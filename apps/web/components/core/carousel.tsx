'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
  type EmblaViewportRefType,
} from 'embla-carousel-react';
import type { EmblaPluginType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];

interface CarouselContextValue {
  api: CarouselApi;
  carouselRef: EmblaViewportRefType;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

interface CarouselProps {
  opts?: UseEmblaCarouselType[0];
  plugins?: EmblaPluginType[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  children?: ReactNode;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

export function Carousel({ opts, plugins, autoplay = false, autoplayInterval = 6000, className, children }: CarouselProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'start', 
      duration: reducedMotion ? 0 : 2500,
      dragFree: false,
      loop: false,
      containScroll: 'trimSnaps',
      ...opts 
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const id = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoplayInterval);

    return () => clearInterval(id);
  }, [emblaApi, autoplay, autoplayInterval]);

  const value = useMemo<CarouselContextValue>(
    () => ({
      api: emblaApi,
      carouselRef: emblaRef,
      canScrollPrev,
      canScrollNext,
      selectedIndex,
      scrollPrev: () => emblaApi?.scrollPrev(),
      scrollNext: () => emblaApi?.scrollNext(),
      scrollTo: (index) => emblaApi?.scrollTo(index),
    }),
    [emblaApi, emblaRef, canScrollPrev, canScrollNext, selectedIndex]
  );

  return (
    <CarouselContext.Provider value={value}>
      <div className={cn('relative', className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: ComponentProps<'div'>) {
  const { carouselRef } = useCarouselAPI();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div className={cn('flex -ml-4', className)} {...props} />
    </div>
  );
}

export function CarouselItem({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full pl-4', className)}
      {...props}
    />
  );
}

export function useCarouselAPI() {
  const ctx = useContext(CarouselContext);
  if (!ctx) {
    throw new Error('useCarouselAPI must be used within a <Carousel>');
  }
  return ctx;
}

interface CarouselNavigationProps {
  className?: string;
  classNameButton?: string;
  classNameButtonPrev?: string;
  classNameButtonNext?: string;
  alwaysShow?: boolean;
  prevLabel?: string;
  nextLabel?: string;
}

export function CarouselNavigation({
  className,
  classNameButton,
  classNameButtonPrev,
  classNameButtonNext,
  alwaysShow = false,
  prevLabel = 'Previous',
  nextLabel = 'Next',
}: CarouselNavigationProps) {
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarouselAPI();

  const buttonBase = cn(
    'pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full transition-[opacity,background-color,color,border-color] duration-300 disabled:pointer-events-none disabled:opacity-40',
    alwaysShow ? 'opacity-100' : 'opacity-0 hover:opacity-100 focus-visible:opacity-100'
  );

  return (
    <div className={cn('pointer-events-none absolute flex items-center', className)}>
      <button
        type="button"
        aria-label={prevLabel}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(buttonBase, classNameButton, classNameButtonPrev)}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(buttonBase, classNameButton, classNameButtonNext)}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

interface CarouselDotsProps {
  className?: string;
}

export function CarouselDots({ className }: CarouselDotsProps) {
  const { api, selectedIndex } = useCarouselAPI();
  const count = api ? api.slideNodes().length : 0;

  if (count === 0) return null;

  return (
    <div className={cn('flex gap-2', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => api?.scrollTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={cn(
            'h-2 rounded-full transition-[width,background-color] duration-300',
            i === selectedIndex ? 'w-6 bg-[#8B5A52]' : 'w-2 bg-transparent border border-[#5B3231] hover:bg-slate-300'
          )}
        />
      ))}
    </div>
  );
}



