'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function preloadImages(srcs: string[]) {
  srcs.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

const TOURS = [
  {
    slug: 'royal-highland-festival',
    title: 'The Royal Highland Festival',
    heroImage: '/fonts/images/RoyalHighlandFestivalHero.webp',
    description: [
      "Your adventure begins with a hike to the iconic Tiger's Nest Monastery, which serves as an acclimatisation trek before you embark on the Laya–Gasa Trek. The Laya–Gasa Trek is one of Bhutan's most spectacular long-distance treks, following ancient trails along the Tibetan border and showcasing some of the most pristine and untouched Himalayan landscapes.",
      "In Laya, you will experience the vibrant Royal Highland Festival, a unique celebration of Bhutan's nomadic culture featuring traditional music, dances, yak exhibitions, and other cultural performances. After descending to the lower valleys, you will visit Punakha and Thimphu, where you can explore Bhutan's rich history, culture, and architectural heritage.",
    ],
    overview: { duration: '16 Days / 15 Nights', dates: '11 – 16 October, 2026', rating: 'Challenging' },
    features: [
      { title: 'Tour Features', desc: "This tour features high-altitude trekking with overnight stays in tents, combined with visits to key cultural sites and the Royal Highland Festival in Laya. After the trek, explore some towns." },
      { title: 'Accommodation', desc: "You will stay in government-approved 3-star hotels or upgrade to 4-star or 5-star accommodations in the cities. During the trek, you will enjoy comfortable overnight stays in well-equipped tents." },
      { title: 'Meals', desc: "Our trekking chefs prepare delicious meals in any setting, offering a variety of breakfast options, packed lunches with local and international choices, and dinners featuring soups, rice, meats, and fresh vegetables." },
      { title: 'Transportation', desc: "For 1–2 travelers, transportation is provided in a comfortable 4WD SUV. Groups of 3–7 persons will travel in a Hyundai H-1 or Toyota Hiace, while groups of 8 or more will travel in a Toyota Coaster bus." },
      { title: 'Prior Training', desc: "Prior trekking experience is beneficial, but if unavailable, prepare with regular training such as hiking with a 4–5 kg pack, running, stair climbing, cycling, or workouts to build fitness and endurance." },
      { title: 'Customization', desc: "If this tour does not suit your preferences, we can customize it or create a different itinerary tailored to your interests and requirements." },
    ],
    days: [
      { day: 'Day 1: Arrival in Paro', content: 'As your flight approaches Bhutan, you will be treated to breathtaking views of the Himalayas, including the sacred peaks of Jumolhari and Jichu Drake. Upon arrival at the airport, you will be warmly welcomed by your tour guide and transferred to your hotel. In the evening, you may explore Paro Town at your leisure. A stroll through the local market and interactions with the friendly residents will provide a delightful introduction to Bhutanese culture. Overnight stay in Paro.' },
      { day: 'Day 2: Acclimatization hike to Tiger\'s Nest Monastery', content: '7KM | 4-5 HOURS | 900M ASCENT\nHike to Taktsang (Tiger\'s Nest) Monastery, Bhutan\'s most famous pilgrimage site, dramatically perched on a cliff at an altitude of 3,180 metres. Lunch will be served at the Cafeteria Restaurant, located halfway up the mountain. After exploring the monastery and enjoying its spectacular surroundings, hike back down to Paro. Overnight stay in Paro.' },
      { day: 'Day 3: Paro to Shingkarap (Trek Starts)', content: '9KM | 4-5 HOURS | 250M ASCENT | CAMP ALT. 3110M\nIn the morning, after breakfast, you will drive to the northern end of the Paro Valley, passing the historic Drukgyal Dzong. From there, continue for approximately another hour along a rough farm road until you reach Shana Zam (2,850m). Upon arrival, you will meet your trekking crew and enjoy a delicious lunch. The trek then begins with a gradual ascent up the valley, following the winding course of the Pa Chhu River into Jigme Dorji Wangchuck National Park. Tonight\'s camp will be at Shingkarap, situated at an altitude of 3,110m.' },
      { day: 'Day 4: Shingkarap to Soi Thangthangkha', content: '15KM | 6-7 HOURS | 560M ASCENT | CAMP ALT. 3670M\nThe trail once again follows the Pa Chhu (Paro River), winding through beautiful forests of pine, oak, and spruce with a series of gentle ascents and descents. After crossing a bridge to the left bank of the river, you will stop for a hot lunch. The trek then continues along the river, gradually ascending through rhododendron forests before crossing the river once more and reaching the campsite. Overnight camp at Soi Thangthangkha (3,670m).' },
      { day: 'Day 5: Soi Thangthangkha to Jangothang', content: '17KM | 4-5 HOURS | 370M ASCENT | CAMP ALT. 4040M\nThis morning, the trek continues up the Paro Chhu Valley, which gradually opens into alpine meadows and sparse forests. Along the way, you will be rewarded with spectacular views of towering mountain ridges and snow-capped peaks. In this region, yaks and the homes of yak herders become a familiar feature of the landscape. Passing through the villages of Sio, Takethang, and Dangochang adds to the charm of today\'s journey. Upon reaching Jangothang, widely regarded as one of the most beautiful campsites in the Himalayas, you will once again be treated to magnificent views of Mount Jumolhari and Jichu Drake.' },
      { day: 'Day 6: Halt Day at Jangothang (Jumolhari Base Camp)', content: 'The rest day in Jangothang offers excellent opportunities for day hikes, with breathtaking views of alpine lakes and snow-capped peaks, including Mount Jomolhari and Jichu Drake. There is also a good chance of spotting blue sheep grazing on the upper slopes of the valley. Surrounded by spectacular mountain scenery, Jangothang provides the perfect setting for acclimatization.' },
      { day: 'Day 7: Jangothang to Lingshi', content: '18KM | 6-7 HOURS | 820M ASCENT | 860M DESCENT | CAMP ALT. 4010M\nThe trail follows the stream for about half an hour before crossing a bridge to the right bank. From there, the ascent begins, leading to the first ridge, which offers breathtaking views of Jomolhari, Jichu Drake, and Tshering Gang. The route then continues through a broad valley, remaining relatively flat for some time before climbing to the Neyle La Pass at an altitude of 4,870 metres. After crossing the pass, the trail descends gradually to the Lingshi campsite, with magnificent panoramic views of the surrounding peaks and the impressive Lingshi Dzong along the way.' },
      { day: 'Day 8: Lingshi to Chebisa', content: '12KM | 5-6 HOURS | 210M ASCENT | 340M DESCENT | CAMP ALT. 3880M\nAn optional hike leads to the hilltop Lingzhi Dzong (4,220m), offering magnificent views over Lingzhi Village and its herb-rich surroundings. The trail then passes a prayer-flag-adorned cairn before descending to Gongyul Village (3,870m) and continuing to the picturesque Chebisa Village (3,880m), famous for its frozen waterfall in winter. The day ends with camping on a scenic meadow overlooking the village and its tranquil highland landscape.' },
      { day: 'Day 9: Chebisa to Shomuthang', content: '17KM | 6-7 HOURS | 620M ASCENT | 520M DESCENT | CAMP ALT. 4220M\nThe morning begins with a long ascent from behind Chebisa Village, crossing wide pasturelands on the way to Gogu La Pass (4,500m). Along the trail, you may encounter yak herders and occasionally spot herds of blue sheep grazing on the surrounding slopes. After crossing the pass, the trail descends into the valley before climbing gently again and then descending to Shakshepasa (3,980m), a broad U-shaped valley surrounded by impressive mountain scenery. From here, a final ascent leads to the campsite at Shomuthang, situated above a river that forms one of the tributaries of the Nochu River.' },
      { day: 'Day 10: Shomuthang to Robluthang', content: '17KM | 6-7 HOURS | 620M ASCENT | 590M DESCENT | CAMP ALT. 4160M\nThe day begins with a gradual climb up the valley, where edelweiss flowers abound along the trail. To the southeast, you can admire the snow-capped peak of Kang Bum (6,526m). After about two hours of climbing, you will reach Jhari La Pass (4,750m), which offers your first glimpse of Sinche La, the high pass you will cross the following day. Dominating the northern skyline is Gangchhenta (6,840m), better known as the Great Tiger Mountain. Descending into a beautiful, wide, and remote valley, you arrive at Tsheri Jathang, a campsite beside the river. From here, a short climb leads to the final campsite at Robluthang, set in a rocky alpine meadow surrounded by spectacular mountain scenery.' },
      { day: 'Day 11: Robluthang to Lingmithang', content: '19KM | 7-8 HOURS | 850M ASCENT | 870M DESCENT | CAMP ALT. 4140M\nThis challenging day involves crossing Shingchen La Pass (5,005m), the highest point of the trek, with a steep ascent through boggy terrain and stream crossings. From the summit, you are rewarded with sweeping views of Gangchhenta (Tiger Mountain).\nThe descent follows a rugged moraine valley and narrow trails to the Kango Chhu River, before continuing through cedar forests to reach the campsite at Lingmethang (4,140m), set in scenic river meadows beneath the towering peak.' },
      { day: 'Day 12: Limithang to Laya', content: '10KM | 4-5 HOURS | 290M DESCENT | LAYA ALT. 3850M\nIn the morning, you wake up to a superb view of Gangchhenta Peak rising directly in front of you. The walk to Laya is very pleasant, offering wonderful scenery throughout. You pass through a damp forest rich with moss and the sounds of singing birds. You arrive at Laya Village (3,850m), the second-highest settlement in the country. From the western side of the village, there are spectacular views of Mount Gangchhenta, along with glimpses of Mount Masagang.' },
      { day: 'Day 13: The Royal Highland Festival', content: 'The festival with the highlanders showcases their rich cultural heritage, including traditional dress, music, dance, crafts, and cuisine. Key highlights include games and a livestock competition featuring decorated yaks and Bhutanese mastiffs. Visitors can also enjoy optional short hikes in the surrounding area.' },
      { day: 'Day 14: Laya to Punakha (Trek ends)', content: 'The day begins with a short descent from Laya to an Army Post, marking the end of the trek. From there, you will drive to Punakha, passing through forests and villages such as Gasa, Damji, and Tashithang, before the landscape opens into terraced fields.\nThe day ends in Punakha, where you can celebrate your return to more comfortable surroundings with a refreshing shower at a comfortable hotel. Overnight stay in Punakha.' },
      { day: 'Day 15: Punakha to Thimphu, 76 Km, 2-3 hours', content: 'After visiting Punakha Dzong, you drive to Thimphu via Dochula Pass with Himalayan views. En route, you walk through rice fields to Chimi Lhakhang Temple. The day ends in Thimphu with hotel check-in and an evening stroll in the city. Overnight stay in Thimphu.' },
      { day: 'Day 16: Departure from Paro', content: 'In the morning, you will be driven to the airport for your departure. Your guide and driver will bid you farewell.' },
    ],
    galleryImages: [
      { src: '/fonts/images/HorseRoyal.webp', alt: 'Mountain landscape with grazing horses', objectPosition: 'center' },
      { src: '/fonts/images/RoyalCop.webp', alt: 'Yak caravan on trail', objectPosition: 'center' },
      { src: '/fonts/images/NomadsRoyal.webp', alt: 'Trekkers on mountain ridge', objectPosition: 'center' },
    ],
    featureImages: [
      { src: '/fonts/images/RoyalCop.webp', alt: 'Highland nomads', style: undefined },
      { src: '/fonts/images/RoyalCop.webp', alt: 'Highland festival with yaks', style: undefined },
    ],
    itinerarySidebarImages: [
      { src: '/fonts/images/RoyalCop.webp', alt: 'Highland nomads', style: undefined },
      { src: '/fonts/images/RoyalCop.webp', alt: 'Highland festival with yaks', style: undefined },
    ],
    contactQuery: 'The%20Royal%20Highland%20Festival',
  },
  {
    slug: 'western-bhutan-highlights-tour',
    title: 'Western Bhutan Highlights Tour',
    heroImage: '/fonts/images/likhit-dixit-Ow5Gb0Y-ktI-unsplash.webp',
    description: [
      "Discover the highlights of Bhutan on this immersive journey through Thimphu, Punakha, and the scenic Phobjikha Valley. Meet local people, explore sacred temples and historic landmarks, and take in breathtaking mountain landscapes while experiencing Bhutan's rich culture and spiritual heritage. The journey concludes with a memorable hike to the iconic Tiger's Nest Monastery, dramatically perched on a cliffside above the Paro Valley.",
    ],
    overview: { duration: '7 Days / 6 Nights', dates: 'As you wish', rating: 'Easy' },
    features: [
      { title: 'Tour Features', desc: "Bhutan's iconic cultural landmarks, traditional villages, vibrant cities, scenic day hikes—including the legendary Tiger's Nest Monastery—and authentic farmhouse visits for an immersive cultural experience." },
      { title: 'Accommodation', desc: "Our standard tour package includes government-approved 3-star hotels. There is an option to upgrade to premium 4-star or 5-star accommodations. Overnight stays in traditional homestays or monasteries can also be arranged." },
      { title: 'Meals', desc: "Our package includes all three daily meals, featuring a choice of Bhutanese, Indian, Chinese, and Continental cuisines. We are happy to accommodate any dietary requirements or food preferences throughout your journey." },
      { title: 'Transportation', desc: "For 1–2 travelers, transportation is provided in a comfortable 4WD SUV. Groups of 3–7 persons will travel in a Hyundai H-1 or Toyota Hiace, while groups of 8 or more will travel in a Toyota Coaster bus." },
      { title: 'Prior Training', desc: "No prior training is required for this trip. While the hike to the Tiger's Nest Monastery can be challenging, it is scheduled toward the end of your journey, allowing ample time to acclimatize." },
      { title: 'Customization', desc: "If this tour does not suit your preferences, we can customize it or create a different itinerary tailored to your interests and requirements." },
    ],
    days: [
      { day: 'Day 1: Arrival in Paro | Drive to Thimphu (55 Km|1 hour)', content: 'Upon arrival at Paro Airport, you will be greeted by our guide and transferred to Thimphu, Bhutan\'s capital. En route, enjoy scenic views of the Paro Valley and a stop at Chuzom, where local farmers sell fresh produce and traditional dried cheese. Upon reaching Thimphu, take an evening stroll to experience the city\'s local lifestyle. Overnight stay in Thimphu.' },
      { day: 'Day 2: Morning hike to Wangditse Monastery| Afternoon Sightseeing', content: 'The morning is dedicated to a hike to Wangditse Monastery, situated at an altitude of 2,685 meters. The hike begins at the Radio Tower and follows an easy, one-hour trail through a mixed forest of blue pine, rhododendrons, oak, and other native shrubs. The monastery offers spectacular views of Thimphu Valley and Tashichho Dzong.\nAfter exploring the monastery, you will hike back to the Radio Tower, where your vehicle will be waiting to transfer you to Thimphu. En route, visit the Takin Reserve, home to Bhutan\'s unique national animal. In the afternoon, enjoy sightseeing in Thimphu, including visits to the National Memorial Chorten, the Buddha Dordenma Statue, and Tashichho Dzong. Overnight stay in Thimphu.' },
      { day: 'Day 3: Thimphu to Punakha (76 Km|2-3 hours)', content: 'Drive to Punakha via Dochula Pass (3,150 meters), which offers magnificent Himalayan views on a clear day. En route, visit Chimi Lhakhang, the famous Temple of Fertility, after a short hike through scenic rice fields from Metshina Village. Continue to Punakha and visit the magnificent Punakha Dzong and the country\'s longest suspension bridge. Overnight stay in Punakha.' },
      { day: 'Day 4: Punakha to Gangtey/Phobjikha Valley (85 Km|2-3 hours)', content: 'After breakfast, drive to the picturesque Gangtey Valley, stopping briefly to view Wangdue Phodrang Dzong. Continue through forests of oak and rhododendron to Lawala Pass, which offers magnificent Himalayan views, before descending into the beautiful Phobjikha Valley. Visit Gangtey Goenpa, the only Nyingmapa monastery in western Bhutan, and spend the afternoon exploring local villages and experiencing traditional Bhutanese rural life. Overnight stay in Phobjikha.' },
      { day: 'Day 5: Gangtey to Paro (165 Km|4-5 hours)', content: 'Today, you will return to Paro, with a lunch stop along the way. En route, visit the Royal Botanical Garden and Druk Wangyal Monastery, one of Bhutan\'s most unique and significant monasteries. Upon arrival in Paro, you may enjoy a leisurely stroll around the town in the evening and soak in its charming atmosphere. Overnight stay in Paro.' },
      { day: 'Day 6: Hike to Tiger\'s Nest Monastery', content: 'Today, embark on a memorable hike to Taktsang Monastery (Tiger\'s Nest), Bhutan\'s most famous sacred site, dramatically perched on a cliff high above the Paro Valley. After exploring the monastery and enjoying lunch en route, return to Paro. In the evening, experience Bhutanese culture with a visit to a traditional farmhouse, a relaxing hot stone bath, and a traditional dinner accompanied by ara, the local brew. Overnight stay in Paro.' },
      { day: 'Day 7: Departure from Paro', content: 'Morning, you will drive to the airport for departure.' },
    ],
    galleryImages: [
      { src: '/fonts/images/West-view_DSC06713 (1).webp', alt: 'Paro Dzong', objectPosition: 'center' },
      { src: '/fonts/images/nils-leonhardt-rCnHOzY-Ji8-unsplash.webp', alt: 'Bhutan landscape', objectPosition: 'center' },
      { src: '/fonts/images/pema-gyamtsho-KMsMgvb4_M0-unsplash.webp', alt: 'Mountain scenery', objectPosition: 'center' },
    ],
    featureImages: [
      { src: '/fonts/images/raul-taciu-VJpJFnMhLZ0-unsplash.webp', alt: 'Bhutan landscape', style: undefined },
      { src: '/fonts/images/Punakha by Marcus Westberg31 (2).webp', alt: 'Punakha valley', style: { objectPosition: '40% center' } },
    ],
    itinerarySidebarImages: [
      { src: '/fonts/images/premium_photo-1668110864450-48a6591c3a22.webp', alt: 'Bhutan landscape', style: undefined },
      { src: '/fonts/images/premium_photo-1669613233557-1676c121fe73.webp', alt: 'Bhutan landscape', style: undefined },
    ],
    contactQuery: 'Western%20Bhutan%20Highlights%20Tour',
  },
  {
    slug: 'cultural-exploration-day-hikes',
    title: 'Cultural Exploration Through Day Hikes',
    heroImage: '/fonts/images/sam-power-6aP9EGsYE3s-unsplash.webp',
    imagePosition: '20% center',
    description: [
      "This journey takes you through the cultural heart of western Bhutan, including Paro, Punakha, Thimphu, and the beautiful Haa Valley. Along the way, you will visit magnificent dzongs, sacred temples, and traditional villages while enjoying scenic hikes to Zuri Dzong, Khamsum Yulley Namgyal Chorten, Lungchutse Monastery, Tango and Cheri Monasteries, and Kila Goemba Nunnery. The tour concludes with a hike to the iconic Tiger's Nest Monastery, Bhutan's most revered and breathtaking landmark.",
    ],
    overview: { duration: '10 Days / 9 Nights', dates: 'To be decided by you', rating: 'Easy-Moderate' },
    features: [
      { title: 'Tour Features', desc: "Bhutan's iconic cultural landmarks, traditional villages, vibrant cities, scenic day hikes—including the legendary Tiger's Nest Monastery—and authentic farmhouse visits for an immersive cultural experience." },
      { title: 'Accommodation', desc: "Our standard tour package includes government-approved 3-star hotels. There is an option to upgrade to premium 4-star or 5-star accommodations. Overnight stays in traditional homestays or monasteries can also be arranged." },
      { title: 'Meals', desc: "Our package includes all three daily meals, featuring a choice of Bhutanese, Indian, Chinese, and Continental cuisines. We are happy to accommodate any dietary requirements or food preferences throughout your journey." },
      { title: 'Transportation', desc: "For 1–2 travelers, transportation is provided in a comfortable 4WD SUV. Groups of 3–7 persons will travel in a Hyundai H-1 or Toyota Hiace, while groups of 8 or more will travel in a Toyota Coaster bus." },
      { title: 'Prior Training', desc: "No prior training is required for this trip. While the hike to the Tiger's Nest Monastery can be challenging, it is scheduled toward the end of your journey, allowing ample time to acclimatize." },
      { title: 'Customization', desc: "If this tour does not suit your preferences, we can customize it or create a different itinerary tailored to your interests and requirements." },
    ],
    days: [
      { day: 'Day 1: Paro', content: 'The flight to Bhutan provides during a clear weather the most fascinating view of Himalayan scenery. At the airport, you will be greeted by your tour guide and take you to your hotel. Evening, you can take an exploratory walk in Paro Town and interact with people. Overnight stay in Paro.' },
      { day: 'Day 2: Paro to Punakha (120 Km|3-4 hours)', content: 'Today, you will drive to Punakha via Chuzom, the confluence of the Paro and Thimphu rivers, passing through picturesque villages along the Wangchhu River. The journey ascends to Dochula Pass (3,150 metres), where, weather permitting, you can enjoy breathtaking panoramic views of the Himalayas before descending through lush forests into the beautiful Punakha Valley. En route, you will stop at Sopsokha Village for a short walk through rice fields to Chimi Lhakhang, the renowned Temple of Fertility. Overnight stay in Punakha.' },
      { day: 'Day 3: Khamsum Yulley Namgyel Hike', content: 'This morning, hike through farmland and traditional villages to Khamsum Yulley Namgyal Chorten, where you can enjoy breathtaking views of the Punakha Valley and the surrounding snow-capped mountains. After lunch, visit the magnificent Punakha Dzong and the nearby Punakha Suspension Bridge, the longest of its kind in Bhutan. Overnight stay in Punakha.' },
      { day: 'Day 4: Punakha to Gangtey/Phobjikha (85 Km|2 hours) | Nature Trail Hike', content: 'Today, you will drive to the remote Gangtey region, with a brief stop in Wangdue to enjoy views of the impressive Wangdue Phodrang Dzong. The journey then continues through forests and over Lawala Pass, offering panoramic views of the Himalayas, before descending into the beautiful Phobjikha Valley. Upon arrival, visit Gangtey Goenpa Monastery and enjoy a leisurely hike along the Nature Trail through villages, meadows, and forests. You may also explore the local villages, meet the residents, and gain insight into their traditional way of life. Overnight stay in Phobjikha.' },
      { day: 'Day 5: Gangtey to Thimphu (124 Km|3 hours) | Hike to Lungchuzekha Goemba', content: 'Today, you will drive to Thimphu, crossing Dochula Pass and enjoying spectacular views of the Himalayas. From the pass, you will begin a scenic three-hour hike to Lungchuzekha Monastery. The trail winds through beautiful rhododendron forests, offering a serene and picturesque setting. Upon reaching the Goemba (3,570 metres), you will be rewarded with magnificent panoramic views. After spending some time at the monastery, you will descend to Trashigang Goemba through beautiful meadows and moss-covered rhododendron forests, passing towering hemlock and juniper trees that resemble cypresses. Your vehicle will be waiting at Trashigang Goemba, and from there, you will continue your drive to Thimphu. Overnight stay in Thimphu.' },
      { day: 'Day 6: Hike to Tango and Cheri Goembas', content: 'Travel north of Thimphu to hike to the historic Tango Monastery and the serene Cheri Monastery, an active meditation retreat for monks. Both hikes offer beautiful forest scenery, panoramic valley views, and the chance to spot mountain goats before returning to Thimphu. Overnight stay in Thimphu.' },
      { day: 'Day 7: Thimphu to Haa Valley (115 Km|3 hours)', content: 'This morning, you will drive to the beautiful Haa Valley via Chuzom. The journey is a pleasant one, with several opportunities to stop along the way and enjoy the scenic views of traditional villages and the surrounding countryside. Upon arrival, take a leisurely stroll through the charming and laid-back town of Haa. In the afternoon, explore the local villages, visit traditional homes, and meet the resident families to gain an insight into their way of life. Overnight stay in Haa.' },
      { day: 'Day 8: Haa to Paro (60 Km|2 hours) | Chelela Hike', content: 'Drive to Paro via Chele La Pass (3,810 metres) and enjoy breathtaking views of Mount Jomolhari and the surrounding Himalayan peaks. Hike along the scenic ridges to Kila Goemba Nunnery, where you can meet the resident nuns, before continuing through coniferous forests to the roadhead and driving onward to Paro. Overnight stay in Paro.' },
      { day: 'Day 9: Hike to Tiger\'s Nest Monastery', content: 'Today, hike to the iconic Taktsang Monastery (Tiger\'s Nest), Bhutan\'s most sacred and famous monastery, dramatically perched on a cliff high above the Paro Valley. In the evening, enjoy a traditional Bhutanese farmhouse experience, including a hot stone bath, a local dinner, and a taste of ara, Bhutan\'s traditional homemade wine. Overnight stay in Paro.' },
      { day: 'Day 10: Departure from Paro', content: 'Morning, you will drive to the airport for departure. Your guide and driver will bid you farewell.' },
    ],
    galleryImages: [
      { src: '/fonts/images/Trongsa by Matt Dutile10.webp', alt: 'Trongsa Monastery', objectPosition: 'center' },
      { src: '/fonts/images/Marcus Westberg Dochula Pass 2023_16.webp', alt: 'Mountain pass views', objectPosition: 'center' },
      { src: '/fonts/images/Marcus Westberg Bumthang 20235 (1).webp', alt: 'Bumthang valley', objectPosition: 'center' },
    ],
    featureImages: [
      { src: '/fonts/images/Trongsa by Matt Dutile10.webp', alt: 'Trongsa Monastery', style: undefined },
      { src: '/fonts/images/Marcus Westberg Dochula Pass 2023_16.webp', alt: 'Mountain pass views', style: undefined },
    ],
    itinerarySidebarImages: [
      { src: '/fonts/images/Punakha by Marcus Westberg43.webp', alt: 'Punakha valley', style: undefined },
      { src: '/fonts/images/rohit-arora-wK5Wt1KAdyA-unsplash.webp', alt: 'Bhutan landscape', style: undefined },
    ],
    contactQuery: 'Bhutan%20Monastery%20Tour',
  },
  {
    slug: 'eastern-bhutan-untouched-journey',
    title: 'Eastern Bhutan: The Untouched Journey',
    heroImage: '/fonts/images/img (12 of 19).webp',
    description: [
      "Enter Bhutan overland through Samdrup Jongkhar and journey across the country's eastern and central regions, experiencing authentic village life in Trashigang, Radhi, and Merak, home of the unique Brokpa community. Continue through Mongar to Bumthang, then visit the serene Phobjikha Valley and historic Punakha. Explore the cultural attractions of Thimphu and the peaceful Haa Valley before returning to Paro via the scenic Chele La Pass. The journey culminates with a memorable hike to the iconic Tiger's Nest Monastery.",
    ],
    overview: { duration: '16 Days / 15 Nights', dates: 'To be decided by you', rating: 'Easy' },
    features: [
      { title: 'Tour Features', desc: "This tour features an overland entry through eastern Bhutan, visits to the semi-nomadic village of Merak, remote villages, genuinely interactive with locals, scenic day hikes including the legendary Tiger's Nest Monastery." },
      { title: 'Accommodation', desc: "Our standard tour package includes government-approved 3-star hotels. There is an option to upgrade to premium 4-star or 5-star accommodations. Overnight stays in traditional homestays or monasteries can also be arranged." },
      { title: 'Meals', desc: "Our package includes all three daily meals, featuring a choice of Bhutanese, Indian, Chinese, and Continental cuisines. We are happy to accommodate any dietary requirements or food preferences throughout your journey." },
      { title: 'Transportation', desc: "For 1–2 travelers, transportation is provided in a comfortable 4WD SUV. Groups of 3–7 persons will travel in a Hyundai H-1 or Toyota Hiace, while groups of 8 or more will travel in a Toyota Coaster bus." },
      { title: 'Prior Training', desc: "No prior training is required for this trip. While the hike to the Tiger's Nest Monastery can be challenging, it is scheduled toward the end of your journey, allowing ample time to acclimatize." },
      { title: 'Customization', desc: "If this tour does not suit your preferences, we can customize it or create a different itinerary tailored to your interests and requirements." },
    ],
    days: [
      { day: 'Day 1: Guwahati to Samdrup Jongkhar (110 Km|3 hours)', content: 'Upon arrival at Guwahati Airport, you will be greeted by our representative and driven to Samdrup Jongkhar. The scenic journey takes you through lush tea gardens, crystal-clear rivers, peaceful villages, and vibrant small towns. In the evening, enjoy a leisurely walk around the town. Overnight stay in Samdrup Jongkhar.' },
      { day: 'Day 2: Samdrup Jongkhar to Trashigang (180 Km|5 hours)', content: 'After breakfast, begin your journey to Trashigang, the major commercial hub of eastern Bhutan. This scenic drive takes you through diverse landscapes, ranging from tropical forests to broadleaf woodlands, passing picturesque villages and varied vegetation zones along the way. En route, make stops at Narphung, Wamrong, Khaling, and Kanglung to interact with local communities and experience rural Bhutanese life. Overnight stay in Trashigang.' },
      { day: 'Day 3: Trashigang to Merak (95 Km|4 hours)', content: 'Drive to Merak, the remote home of the Brokpa people. En route, visit the charming town of Rangjung and Radhi Village, famous for its handwoven bura silk textiles. Upon arrival in Merak, explore the village and discover the unique culture, traditions, and distinctive way of life of the semi-nomadic Brokpa community. Overnight stay with a local family.' },
      { day: 'Day 4: Merak to Mongar (151 Km|5-6 hours)', content: 'Spend the morning exploring Merak Village and experiencing the unique culture and lifestyle of the Brokpa people. In the afternoon, drive back to Trashigang and continue onward to Mongar, passing through several picturesque villages along the way. The scenic road follows the Gamri River through lush cornfields and banana groves before gradually ascending to Yadi, where you can stop for a refreshing cup of tea. Continue the drive over Kori La Pass (2,450 m), a renowned spot for birdwatchers, before descending into Mongar.\nIn the evening, take a leisurely stroll around Mongar town and enjoy a relaxing dinner. Overnight stay in Mongar.' },
      { day: 'Day 5: Mongar to Khoma (75 Km|2-3 hours)', content: 'After breakfast, drive to the remote district of Lhuentse, the ancestral home of Bhutan\'s royal family and a region renowned for its exceptional weaving traditions. Visit Khoma Village to meet local weavers and observe the creation of exquisite handwoven textiles before enjoying an overnight homestay with a local family.' },
      { day: 'Day 6: Khoma to Bumthang', content: 'Begin your journey to central Bhutan with one of the country\'s most scenic drives to Bumthang, passing dramatic cliffs, fir forests, and verdant pastures. Along the way, stop at Themnangbi to sample seasonal local produce and enjoy a leisurely walk. Continue through the charming village of Ura, known for its medieval atmosphere, cobblestone streets, and rich cultural heritage. Overnight stay in Bumthang.' },
      { day: 'Day 7: Bumthang', content: 'You can visit ancient temples and traditional villages, explore the unique culture of Bumthang Valley, savor local cuisine, and enjoy scenic hikes in the surrounding countryside. Overnight stay in Bumthang.' },
      { day: 'Day 8: Excursion to Tang Valley', content: 'Enjoy a full-day excursion to the remote Tang Valley, visiting the historic Ugyen Chholing Palace Museum and exploring the surrounding villages. On the return journey, stop at the sacred Mebar Tsho (Burning Lake), associated with the treasure revealer Pema Lingpa. In the evening, enjoy a leisurely walk around Bumthang town and interact with the local people. Overnight stay in Bumthang.' },
      { day: 'Day 9: Bumthang to Gangtey/Phobjikha Valley (152 Km|4 hours)', content: 'Drive to Gangtey via Trongsa, stopping at the Chumey yathra weaving centre and visiting the magnificent Trongsa Dzong. After lunch at Chendebji and a scenic drive across two mountain passes, arrive in Gangtey to visit Gangtey Monastery and enjoy a hike through the beautiful Phobjikha Valley and its charming villages. Overnight stay in Gangtey/Phobjikha.' },
      { day: 'Day 10: Gangtey to Punakha (85 Km|2-3 hours)', content: 'Drive to Punakha via Wangdue Phodrang, stopping at Metsina Village for a scenic walk through rice fields to Chimi Lhakhang, the famous Temple of Fertility dedicated to Drukpa Kuenley, the "Divine Madman." After lunch, visit the magnificent Punakha Dzong, spectacularly located at the confluence of the Pho Chhu and Mo Chhu rivers. Overnight stay in Punakha.' },
      { day: 'Day 11: Punakha to Thimphu (76 Km|2-3 hours)', content: 'Drive to the capital, crossing the Dochula Pass and enjoying breathtaking views of the Himalayas along the way. At Dochula, visit the Druk Wangyal Monastery, the only one of its kind in the country. In the afternoon, take a leisurely stroll through Thimphu city. Overnight stay in Thimphu.' },
      { day: 'Day 12: Thimphu', content: 'Sightseeing in Thimphu includes the National Memorial Chorten, the Buddha Dordenma Statue, the Takin Preserve, the Farmer\'s Market, and Tashichho Dzong. Overnight stay in Thimphu.' },
      { day: 'Day 13: Thimphu to Haa Valley (115 Km|3-4 hours)', content: 'Today, drive to Haa Valley via Chuzom. The journey is pleasant, with several optional stops along the way to admire views of traditional villages. Upon arrival in Haa, take a leisurely stroll through the peaceful town. In the afternoon, explore nearby villages, visit local homes, and meet the families. Overnight stay in Haa.' },
      { day: 'Day 14: Haa to Paro, 60 Km/2 hours | Chelela Hike', content: 'This morning, drive to Paro across Chele La Pass (3,810 m). A walk along the high ridges, adorned with colorful Buddhist prayer flags, offers stunning views of Mount Jomolhari and other snow-capped peaks on clear days, along with sweeping vistas of the valleys below. You may continue your hike down the ridge to the Kila Gompa Nunnery, nestled on a rocky mountainside below the pass and dramatically perched against the cliff face. Spend some time here interacting with the nuns, who may offer you tea. Afterwards, walk a few miles through coniferous forests to the roadhead, where your vehicle will be waiting to transfer you to Paro. Overnight stay in Paro.' },
      { day: 'Day 15: Hike to Tiger\'s Nest Monastery', content: 'Today, hike to the iconic Tiger\'s Nest Monastery (3,180 m), dramatically perched on a cliff above the Paro Valley and associated with Guru Rinpoche\'s meditation. Enjoy lunch en route before exploring the monastery and hiking back down to Paro. In the evening, visit a traditional farmhouse for a hot stone bath, Bhutanese dinner, and local "ara," marking a memorable end to your journey. Overnight in Paro. Overnight stay in Paro.' },
      { day: 'Day 16: Departure from Paro', content: 'Morning, you will drive to airport for departure.' },
    ],
    galleryImages: [
      { src: '/fonts/images/merak women.webp', alt: 'Traditional weaving', objectPosition: 'center' },
      { src: '/fonts/images/passang-tobgay-lIQyVxYBwVQ-unsplash.webp', alt: 'Eastern Bhutan landscape', objectPosition: 'center' },
      { src: '/fonts/images/Ogyen Choling by Matt Dutile14 (1).webp', alt: 'Ogyen Choling Palace', objectPosition: 'center' },
    ],
    featureImages: [
      { src: '/fonts/images/merak women.webp', alt: 'Traditional weaving', style: undefined },
      { src: '/fonts/images/mongar dzongkhag teaser.webp', alt: 'Mongar Dzong', style: undefined },
    ],
    itinerarySidebarImages: [
      { src: '/fonts/images/passang-tobgay-K6-A_4kBPcQ-unsplash.webp', alt: 'Eastern Bhutan landscape', style: undefined },
      { src: '/fonts/images/Snowman Race28.webp', alt: 'Eastern Bhutan landscape', style: undefined },
    ],
    contactQuery: 'Traditional%20Weaving%20Heritage',
  },
  {
    slug: 'jumolhari-trek',
    title: 'Jumolhari Trek',
    heroImage: '/fonts/images/Snowman Race38 (2).webp',
    imagePosition: '30% center',
    description: [
      "It begins in Paro with an acclimatization hike to the iconic Tiger's Nest Monastery, a sacred cliffside site associated with Guru Rinpoche. The journey then transitions into the wilderness of Jigme Dorji Wangchuck National Park, where the trail follows river valleys through forests, alpine meadows, and remote highland settlements, offering insight into Bhutan's traditional lifestyle. As the trek progresses, you reach the stunning Jangothang campsite with breathtaking views of Mount Jumolhari and surrounding peaks, followed by a rest day for acclimatization. The route then becomes more adventurous, crossing Yeli La Pass at 4,820 meters before descending through lush forests and scenic valleys. The journey concludes at Dodena with a drive to Thimphu, providing a perfect balance of cultural exploration, natural beauty, and rewarding physical challenge.",
    ],
    overview: { duration: '12 Days / 11 Nights', dates: '14-25 October 2026', rating: 'Moderate-Challenging' },
    features: [
      { title: 'Tour Features', desc: "This tour features trekking through the high mountains with overnight stays in tents, combined with visits to key cultural sites and interactions with local communities." },
      { title: 'Accommodation', desc: "You will stay in government-approved 3-star hotels or upgrade to 4-star or 5-star accommodations in the cities. During the trek, you will enjoy comfortable overnight stays in well-equipped tents." },
      { title: 'Meals', desc: "Our trekking chefs prepare delicious meals in any setting, offering a variety of breakfast options, packed lunches with local and international choices, and dinners featuring soups, rice, meats, and fresh vegetables." },
      { title: 'Transportation', desc: "For 1–2 travelers, transportation is provided in a comfortable 4WD SUV. Groups of 3–7 persons will travel in a Hyundai H-1 or Toyota Hiace, while groups of 8 or more will travel in a Toyota Coaster bus." },
      { title: 'Prior Training', desc: "Prior trekking experience is beneficial, but if unavailable, prepare with regular training such as hiking with a 4–5 kg pack, running, stair climbing, cycling, or workouts to build fitness and endurance." },
      { title: 'Customization', desc: "If this tour does not suit your preferences, we can customize it or create a different itinerary tailored to your interests and requirements." },
    ],
    days: [
      { day: 'Day 1: Arrival in Paro', content: 'As your flight approaches Bhutan, you will be treated to breathtaking views of the Himalayas, including the sacred peaks of Jumolhari and Jichu Drake. Upon arrival at the airport, you will be warmly welcomed by your tour guide and transferred to your hotel. In the evening, you may explore Paro Town at your leisure. A stroll through the local market and interactions with the friendly residents will provide a delightful introduction to Bhutanese culture. Overnight stay in Paro.' },
      { day: 'Day 2: Acclimatization hike to Tiger\'s Nest Monastery', content: '7KM | 4-5 HOURS | 900M ASCENT \nHike to Taktsang (Tiger\'s Nest) Monastery, Bhutan\'s most famous pilgrimage site, dramatically perched on a cliff at an altitude of 3,180 metres. Lunch will be served at the Cafeteria Restaurant, located halfway up the mountain. After exploring the monastery and enjoying its spectacular surroundings, hike back down to Paro. Overnight stay in Paro.' },
      { day: 'Day 3: Paro to Shingkarap (Trek Starts)', content: '9KM | 4-5 HOURS | 250M ASCENT | CAMP ALT. 3110M\nIn the morning, after breakfast, you will drive to the northern end of the Paro Valley, passing the historic Drukgyal Dzong. From there, continue for approximately another hour along a rough farm road until you reach Shana Zam (2,850m). Upon arrival, you will meet your trekking crew and enjoy a delicious lunch. The trek then begins with a gradual ascent up the valley, following the winding course of the Pa Chhu River into Jigme Dorji Wangchuck National Park. Tonight\'s camp will be at Shingkarap, situated at an altitude of 3,110m.' },
      { day: 'Day 4: Shingkarap to Soi Thangthangkha', content: '15KM | 6-7 HOURS | 560M ASCENT | CAMP ALT. 3670M\nThe trail once again follows the Pa Chhu (Paro River), winding through beautiful forests of pine, oak, and spruce with a series of gentle ascents and descents. After crossing a bridge to the left bank of the river, you will stop for a hot lunch. The trek then continues along the river, gradually ascending through rhododendron forests before crossing the river once more and reaching the campsite. Overnight camp at Soi Thangthangkha (3,670m).' },
      { day: 'Day 5: Sio Thangthangkha to Jangothang', content: '17KM | 4-5 HOURS | 370M ASCENT | CAMP ALT. 4040M\nThis morning, the trek continues up the Paro Chhu Valley, which gradually opens into alpine meadows and sparse forests. Along the way, you will be rewarded with spectacular views of towering mountain ridges and snow-capped peaks. In this region, yaks and the homes of yak herders become a familiar feature of the landscape. Passing through the villages of Sio, Takethang, and Dangochang adds to the charm of today\'s journey. Upon reaching Jangothang, widely regarded as one of the most beautiful campsites in the Himalayas, you will once again be treated to magnificent views of Mount Jumolhari and Jichu Drake.' },
      { day: 'Day 6: Halt Day at Jangothang (Jumolhari Base Camp)', content: 'The rest day in Jangothang offers excellent opportunities for day hikes, with breathtaking views of alpine lakes and snow-capped peaks, including Mount Jomolhari and Jichu Drake. There is also a good chance of spotting blue sheep grazing on the upper slopes of the valley. Surrounded by spectacular mountain scenery, Jangothang provides the perfect setting for acclimatization.' },
      { day: 'Day 7: Jangothang to Lingzhi', content: '18KM | 6-7 HOURS | 790M ASCENT | 820M DESCENT | CAMP ALT. 4010M\nThe trail follows the stream for about half an hour before crossing a bridge to the right side. From there, you begin the ascent to the first ridge, which offers breathtaking views of Jomolhari, Jichu Drake, and Tshering Gang.\nThe route then continues into the valley on relatively flat terrain for a while before climbing steadily up to Neyle La Pass at an altitude of 4,830 meters. After crossing the pass, you descend gradually to Lingzhi camp, enjoying sweeping panoramic views of the surrounding peaks and the historic Lingzhi Dzong along the way.' },
      { day: 'Day 8: Lingzhi to Shodu', content: '19KM | 7-8 HOURS | 910M ASCENT | 842M DESCENT | CAMP ALT. 4100M\nThe Laya–Gasa route branches off from the Jumolhari trek at this point. The trail ascends toward a small white chorten located on a ridge above the camp before turning south into the deep Mo Chhu valley. It continues along the west side of this largely treeless valley, gradually climbing a short distance above the Mo Chhu river.\nThe path then crosses the river and makes a steep ascent of about two hours to Yaklay La Pass (4,942 m). From the pass, on a clear day, you can enjoy magnificent views of Jomolhari, Gangchen Ta, Tsherim Gang, and Masang Gang. From Yaklay La, the trail descends alongside a stream to a shelter, then continues further downstream to Shodu (4,100 m), a meadow campsite marked by a chorten.' },
      { day: 'Day 9: Shodu to Dodena to Thimphu (Trek ends)', content: '16KM | 5-6 HOURS | 470M DESCENT \nAt this point, the trail returns to the tree line and continues along the Thimphu River, descending through forests of rhododendron, juniper, and other alpine vegetation. The views of steep cliffs, rock formations, and cascading waterfalls along the way are truly impressive. A hot lunch will be served by the riverside. After lunch, the trail gradually ascends to the ruins of Barshong Dzong at 3,630 meters. You may then walk a short distance along a farm road until you meet your vehicle.\nFrom there, you will drive back to Thimphu.' },
      { day: 'Day 10: Thimphu to Punakha', content: 'Drive to Punakha via Dochula Pass (3,150 meters), which offers magnificent Himalayan views on a clear day. En route, visit Chimi Lhakhang, the famous Temple of Fertility, after a short hike through scenic rice fields from Metshina Village. Continue to Punakha and visit the magnificent Punakha Dzong and the country\'s longest suspension bridge. Overnight stay in Punakha.' },
      { day: 'Day 11: Punakha to Paro', content: 'Drive back to Paro, where you will enjoy sightseeing at key cultural landmarks, including the National Museum, Rinpung Dzong, and Kyichu Lhakhang. Overnight stay in Paro.' },
      { day: 'Day 12: Departure from Paro', content: 'In the morning, you will be transferred to the airport for your departure flight, where your guide and driver will bid you farewell.' },
    ],
    galleryImages: [
      { src: '/fonts/images/sagar-madha-QCjDp4uphf4-unsplash.webp', alt: 'Mount Jumolhari', objectPosition: '30% 70%' },
      { src: '/fonts/images/sam-power-6aP9EGsYE3s-unsplash.webp', alt: 'Yak herders', objectPosition: '60% center' },
      { src: '/fonts/images/Snowman Race6.webp', alt: 'Alpine meadows', objectPosition: '20% center' },
    ],
    featureImages: [
      { src: '/fonts/images/Snowman Race36.webp', alt: 'Mountain trek', style: { objectPosition: '30% center' } },
      { src: '/fonts/images/sonu-agvan-DEWefZDJXPE-unsplash.webp', alt: 'Trekking landscape', style: { objectPosition: '30% center' } },
    ],
    itinerarySidebarImages: [
      { src: '/fonts/images/TrekkingRoyal.webp', alt: 'Trekking landscape', style: undefined },
      { src: '/fonts/images/thedronebook-TourismBoardBhutan-200A6604.webp', alt: 'Bhutan landscape', style: undefined },
    ],
    contactQuery: 'Jumolhari%20Trek',
  },
];

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return <div className="p-20 text-center">Tour not found</div>;

  const otherTours = TOURS.filter((t) => t.slug !== tour.slug);

  useEffect(() => {
    const images = [
      tour.heroImage,
      ...tour.galleryImages.map((i) => i.src),
      ...tour.featureImages.map((i) => i.src),
      ...tour.itinerarySidebarImages.map((i) => i.src),
      ...otherTours.map((t) => t.heroImage),
    ];
    preloadImages(images);
  }, [tour, otherTours]);

  return (
    <div className="min-h-screen bg-white text-black/80 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <ItineraryHero title={tour.title} image={tour.heroImage} />
        <TripOverviewSection tour={tour} />
        <GallerySection images={tour.galleryImages} />
        <FeaturesGridSection features={tour.features} featureImages={tour.featureImages} />
        <ItineraryAccordionSection days={tour.days} contactQuery={tour.contactQuery} sidebarImages={tour.itinerarySidebarImages} />
        <OtherToursSection tours={otherTours} />
      </main>
      <Footer />
    </div>
  );
}

function ItineraryHero({ title, image }: { title: string; image: string }) {
  return (
    <section className="relative h-[60vh] md:h-[85vh] min-h-[400px] bg-slate-900 flex items-center justify-center text-center text-white overflow-hidden z-10">
      <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('${image}')`, backgroundPosition: 'center 72%' }} />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl md:text-[66px] tracking-wide font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>{title}</h1>
        </FadeIn>
      </div>
    </section>
  );
}

function TripOverviewSection({ tour }: { tour: typeof TOURS[number] }) {
  return (
    <section className="py-20 px-6 md:px-[130px] bg-[#fcfbfa] text-slate-800 font-serif">
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeIn className="max-w-3xl ml-auto space-y-6 text-[18px] text-slate-700 leading-relaxed">
          <div style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            {tour.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={150} className="max-w-3xl ml-auto pt-6 space-y-6">
          <div className="space-y-1">
            <span className="text-sm md:text-[20px] uppercase tracking-widest block text-[#5B3231]/80" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>ADVENTURE AWAITS</span>
            <h2 className="text-3xl md:text-[32px] text-slate-900 font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>Trip Overview</h2>
          </div>
          <div className="divide-y divide-black/70 text-[16px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', color: 'rgba(91, 50, 49, 0.7)' }}>
            <div className="py-4 flex justify-between items-center"><span>Duration</span><span className="font-medium">{tour.overview.duration}</span></div>
            <div className="py-4 flex justify-between items-center"><span>Next Dates</span><span className="font-medium">{tour.overview.dates}</span></div>
            <div className="py-4 flex justify-between items-center"><span>Physical Rating</span><span className="font-medium">{tour.overview.rating}</span></div>
          </div>
          <a href={`/contact?trip=${tour.contactQuery}`} className="inline-flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]">Let&apos;s Talk</a>
        </FadeIn>
      </div>
    </section>
  );
}

function GallerySection({ images }: { images: typeof TOURS[number]['galleryImages'] }) {
  return (
    <section className="py-12 px-6 md:px-[130px] bg-[#fcfbfa]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          <FadeIn className="overflow-hidden group">
            <img src={images[0].src} alt={images[0].alt} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: images[0].objectPosition || 'center' }}/>
          </FadeIn>
          <FadeIn className="overflow-hidden group">
            <img src={images[1].src} alt={images[1].alt} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: images[1].objectPosition || 'center' }}/>
          </FadeIn>
        </div>
        <FadeIn delay={150} className="overflow-hidden group">
          <img src={images[2].src} alt={images[2].alt} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: images[2].objectPosition || 'center' }}/>
        </FadeIn>
      </div>
    </section>
  );
}

function FeaturesGridSection({ features, featureImages }: { features: typeof TOURS[number]['features']; featureImages: typeof TOURS[number]['featureImages'] }) {
  return (
    <section className="py-20 px-6 md:px-[130px] bg-[#fcfbfa] text-slate-800 font-serif border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="md:w-2/3 ml-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((item, i) => (
            <FadeIn key={i} className="space-y-3 pt-4 border-t border-black/70" style={{ borderTopWidth: '0.5px' }}>
              <h3 className="text-[#8B5A52] font-semibold text-[20px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>{item.title}</h3>
              <p className="text-[16px] text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        <div className="md:w-2/3 ml-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {featureImages?.map((img, i) => (
            <FadeIn key={i} className="overflow-hidden group" style={{ transitionDelay: i === 1 ? '150ms' : '0ms' }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-115"
                style={img.style}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItineraryAccordionSection({ days, contactQuery, sidebarImages }: { days: typeof TOURS[number]['days']; contactQuery: string; sidebarImages?: typeof TOURS[number]['itinerarySidebarImages'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-[130px] bg-black/60 text-white font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl text-white font-normal mb-8" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>Itinerary</h2>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {days.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-8">
                  <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="w-full flex items-center justify-between text-left text-[18px] font-medium hover:text-amber-200 transition-colors focus:outline-none">
                    <span className="pr-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>{item.day}</span>
                    <span className="relative w-4 h-4 shrink-0">
                      <Plus className={`w-4 h-4 text-white/70 absolute inset-0 transition-all duration-300 ease-out ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                      <Minus className={`w-4 h-4 text-white/70 absolute inset-0 transition-all duration-300 ease-out ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity motion-reduce:duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="mt-3 text-[16px] text-white/80 whitespace-pre-line leading-relaxed pl-1" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>{item.content}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4">
            <a href={`/contact?trip=${contactQuery}`} className="inline-flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]">Let&apos;s Talk</a>
          </div>
        </div>
        <FadeIn className="lg:col-span-5 space-y-6 sticky top-28">
          {sidebarImages?.map((img, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                style={img.style}
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

function OtherToursSection({ tours }: { tours: typeof TOURS }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const next = window.innerWidth >= 768 ? 3 : 1;
      setVisibleCount(next);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, tours.length - next)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [tours.length]);

  const maxIndex = Math.max(0, tours.length - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const gapCount = visibleCount - 1;

  return (
    <section className="py-24 px-6 md:px-[130px] bg-[#E3E1DC] text-slate-900 font-serif">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-normal">Other Tours</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                width: '100%',
                gap: '1.5rem',
                transition: 'transform 700ms cubic-bezier(0.16,1,0.3,1)',
                transform: `translateX(calc(${currentIndex} * ((100% - ${gapCount} * 1.5rem) / ${visibleCount} + 1.5rem) * -1))`,
              }}
            >
              {tours.map((tour) => (
                <a
                  key={tour.slug}
                  href={`/itinerary/${tour.slug}`}
                  className="relative group shrink-0 overflow-hidden"
                  style={{ width: `calc((100% - ${gapCount} * 1.5rem) / ${visibleCount})` }}
                >
                  <img src={tour.heroImage} alt={tour.title} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" style={tour.imagePosition ? { objectPosition: tour.imagePosition } : undefined}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-[18px]">{tour.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-15 justify-end">
            <button onClick={prev} aria-label="Previous tour" className="w-10 h-10 rounded-full border border-[#5B3231] bg-transparent text-[#5B3231] flex items-center justify-center hover:bg-[#5B3231] hover:text-white transition-[background-color,border-color,color] disabled:opacity-40 disabled:cursor-not-allowed" disabled={currentIndex === 0}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next tour" className="w-10 h-10 rounded-full border border-[#5B3231] bg-transparent text-[#5B3231] flex items-center justify-center hover:bg-[#5B3231] hover:text-white transition-[background-color,border-color,color] disabled:opacity-40 disabled:cursor-not-allowed" disabled={currentIndex >= maxIndex}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer is imported from @/components/layout/Footer
