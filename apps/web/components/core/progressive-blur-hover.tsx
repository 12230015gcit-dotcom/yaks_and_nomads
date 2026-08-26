import { Play } from 'lucide-react';

interface ProgressiveBlurHoverProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export default function ProgressiveBlurHover({ src, alt, title, className = '' }: ProgressiveBlurHoverProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-[filter,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04] [@media(hover:hover)_and_(pointer:fine)]:group-hover:blur-[2px] motion-reduce:scale-100 motion-reduce:blur-0"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-slate-950/0 opacity-0 transition-[background-color,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:duration-150 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-slate-950/20 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100">
        <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-sm backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105">
          <Play className="h-5 w-5 fill-white stroke-white translate-x-0.5" />
        </span>
      </div>
      {title && (
        <p className="absolute bottom-6 left-0 right-0 text-center font-serif text-white text-lg font-medium opacity-0 transition-opacity duration-300 pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100">
          {title}
        </p>
      )}
    </div>
  );
}



