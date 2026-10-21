import heroImg from '../assets/images/kalai_hero.jpg';
import storytellingImg from '../assets/images/kalai_storytelling.jpg';
import artCraftImg from '../assets/images/kalai_art_craft.jpg';
import playAreaImg from '../assets/images/kalai_play_area.jpg';
import artWallImg from '../assets/images/school_photo_1.jpg';
import stagePerformanceImg from '../assets/images/school_photo_3.jpg';
import annualDayImg from '../assets/images/kalai_annual_day.png';
import graduationImg from '../assets/images/kalai_graduation_day.png';
import culturalDanceImg from '../assets/images/kalai_cultural_dance.png';
import kalaiLogoImg from '../assets/images/kalai_logo_clean.png';

export interface SchoolHours {
  day: string;
  time: string;
  isOpenDay: boolean;
}

export interface Branch {
  id: 'velachery' | 'adambakkam';
  name: string;
  shortName: string;
  campusTitle: string;
  tagline: string;
  address: string;
  shortAddress: string;
  area: string;
  city: string;
  pincode: string;
  phone: string;
  altPhone?: string;
  rating: number;
  reviewCount: number;
  mapUrl: string;
  mapEmbed: string;
  hours: string;
  isMain?: boolean;
}

export const branches: Branch[] = [
  {
    id: 'velachery',
    name: 'Kalai Kids Home — Velachery Branch',
    shortName: 'Velachery Campus',
    campusTitle: 'Velachery Campus (Branch 1)',
    tagline: 'Near Phoenix Marketcity & Dhandeeswaram',
    address: 'No. 11, Lakshmi Nagar 2nd Main Road, Velachery, Chennai, Tamil Nadu 600042',
    shortAddress: 'No. 11, Lakshmi Nagar 2nd Main Road, Velachery',
    area: 'Lakshmi Nagar, Velachery',
    city: 'Chennai',
    pincode: '600042',
    phone: '+91 90437 55433',
    altPhone: '044 2259 1470',
    rating: 5.0,
    reviewCount: 37,
    mapUrl: 'https://maps.app.goo.gl/5ekzVdWxFbyvLuLv7',
    mapEmbed: 'https://maps.google.com/maps?q=Kalai+Kids+11+Lakshmi+Nagar+2nd+Main+Road+Velachery+Chennai+600042&output=embed',
    hours: 'Mon – Sat: 8:30 AM – 7:30 PM',
    isMain: true,
  },
  {
    id: 'adambakkam',
    name: 'Kalai Kids Home — Adambakkam Branch',
    shortName: 'Adambakkam Campus',
    campusTitle: 'Adambakkam Campus (Branch 2)',
    tagline: 'Near St. Thomas Mount / Guindy & City Links',
    address: 'No. 74, Ramkrishna Nagar, 1st Main Rd, Adambakkam, Chennai, Tamil Nadu 600088',
    shortAddress: 'No. 74, Ramkrishna Nagar, 1st Main Rd, Adambakkam',
    area: 'Ramkrishna Nagar, Adambakkam',
    city: 'Chennai',
    pincode: '600088',
    phone: '+91 90437 55433',
    rating: 5.0,
    reviewCount: 8,
    mapUrl: 'https://maps.app.goo.gl/iW7uWzVgLfrknykf9',
    mapEmbed: 'https://maps.google.com/maps?q=Kalai+Kids+74+Ramkrishna+Nagar+1st+Main+Rd+Adambakkam+Chennai+600088&output=embed',
    hours: 'Mon – Sat: 8:30 AM – 7:30 PM',
    isMain: false,
  },
];

export const schoolInfo = {
  name: 'Kalai Kids Home',
  fullName: 'Kalai Kids Home',
  shortName: 'Kalai Kids Home',
  tagline: 'Where Children Learn, Play & Grow with Confidence',
  established: 2014,
  branchesCount: 2,
  locationsText: 'Velachery & Adambakkam, Chennai',
  address: 'Branch 1: No. 11, Lakshmi Nagar 2nd Main Rd, Velachery | Branch 2: No. 74, Ramkrishna Nagar 1st Main Rd, Adambakkam',
  area: 'Velachery & Adambakkam',
  city: 'Chennai',
  phone: '+91 90437 55433',
  altPhone: '044 2259 1470',
  email: 'kalaikidsvelachery@gmail.com',
  rating: 5.0,
  reviewCount: 45, // 37 in Velachery + 8 in Adambakkam
  mapUrl: 'https://maps.app.goo.gl/5ekzVdWxFbyvLuLv7',
  mapEmbed: 'https://maps.google.com/maps?q=Kalai+Kids+11+Lakshmi+Nagar+2nd+Main+Road+Velachery+Chennai+600042&output=embed',
  operatingHoursText: 'Monday – Saturday: 8:30 AM – 7:30 PM (Sunday: Closed)',
};

export const schoolHours: SchoolHours[] = [
  { day: 'Monday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Tuesday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Wednesday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Thursday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Friday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Saturday', time: '8:30 AM – 7:30 PM', isOpenDay: true },
  { day: 'Sunday', time: 'Closed', isOpenDay: false },
];

export const aboutContent = {
  title: 'Welcome to Kalai Kids Home',
  subheading: '2 Campuses in Chennai: Lakshmi Nagar (Velachery) & Ramkrishna Nagar (Adambakkam)',
  mainDescription:
    'Welcome to Kalai Kids Home, a safe, caring, and joyful learning environment where children learn, play, and grow with confidence across our Velachery and Adambakkam campuses. We focus on early childhood education through fun and engaging activities, including basic academics, storytelling, art and craft, music, games, communication skills, and social development. Our experienced teachers provide individual attention and encourage creativity, curiosity, and good habits. We aim to build a strong foundation for your child’s future in a friendly and nurturing atmosphere. Enroll your little one today and give them a happy start to their learning journey!',
  highlights: [
    'Basic academics & school readiness',
    'Storytelling & Tamil & English language fluency',
    'Art, craft & sensory motor development',
    'Music, action rhymes & movement',
    'Communication skills & social development',
    'Individual attention from experienced teachers',
    'Good habits, discipline & self-confidence',
    'Flexible extended daycare (8:30 AM – 7:30 PM)',
  ],
  quote:
    'Our experienced teachers provide individual attention and encourage creativity, curiosity, and good habits. We aim to build a strong foundation for your child’s future in a friendly and nurturing atmosphere.',
  teachersMentioned: 'Dedicated Mentors: Uma Ma’am, Kalai Ma’am & Compassionate Faculty',
};

export const heroImages = {
  main: annualDayImg,
  secondary: graduationImg,
  tertiary: culturalDanceImg,
  art: artCraftImg,
  play: playAreaImg,
  annualDay: annualDayImg,
  graduation: graduationImg,
  dance: culturalDanceImg,
  logo: kalaiLogoImg,
};

export const aboutImages = {
  main: graduationImg,
  secondary: culturalDanceImg,
  annualDay: annualDayImg,
  storytelling: storytellingImg,
  art: artCraftImg,
  play: playAreaImg,
};

export const programs = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    ageRange: '1.5 – 2.5 Years',
    icon: 'Baby',
    color: 'rose',
    description:
      'A gentle, joyful transition from home to school. Toddlers explore sensory textures, colorful toys, finger rhymes, and playful social interaction.',
    highlights: ['Sensory play & motor development', 'Rhymes & story listening', 'Social bonding & sharing', 'Comfortable, caring atmosphere'],
  },
  {
    id: 'pre-kg',
    name: 'Pre-KG / Nursery',
    ageRange: '2.5 – 3.5 Years',
    icon: 'Palette',
    color: 'brand',
    description:
      'Developing spoken language fluency, curiosity, and creativity. Kids quickly gain confidence in speaking Tamil & English, coloring, and self-expression.',
    highlights: ['Speech & vocabulary boost', 'Storytelling & picture reading', 'Art & craft activities', 'Alphabet & number curiosity'],
  },
  {
    id: 'junior-kg',
    name: 'Junior KG (LKG)',
    ageRange: '3.5 – 4.5 Years',
    icon: 'BookOpen',
    color: 'ocean',
    description:
      'Building structured learning habits with love. Children learn basic writing, phonics, numbers, discipline, and expressing thoughts independently.',
    highlights: ['Phonics & early reading', 'Number concepts & logic', 'Good habits & independence', 'Stage participation & annual day'],
  },
  {
    id: 'senior-kg',
    name: 'Senior KG (UKG)',
    ageRange: '4.5 – 5.5 Years',
    icon: 'GraduationCap',
    color: 'mint',
    description:
      'Comprehensive primary school readiness. Smooth preparation for top CBSE, ICSE, and Matriculation primary schools with confidence.',
    highlights: ['Fluent reading & handwriting', 'Analytical reasoning & math', 'Communication & public speaking', 'Primary school admission ready'],
  },
  {
    id: 'daycare',
    name: 'Extended Daycare & Crèche',
    ageRange: '1.5 – 8 Years',
    icon: 'HeartHandshake',
    color: 'sunshine',
    description:
      'Safe, home-like extended care until 7:30 PM for working parents. Nutritious snack support, supervised nap time, homework help, and evening play.',
    highlights: ['Open till 7:30 PM (Mon–Sat)', 'Safe & hygienic resting zone', 'Homework assistance', 'Engaging evening playtime'],
  },
];

export const features = [
  {
    icon: 'HeartHandshake',
    title: 'Individual Attention & Loving Mentors',
    description:
      'Beloved teachers like Uma Ma’am and Kalai Ma’am give personal care and patience to each child, ensuring no little one feels left behind.',
    color: 'rose',
  },
  {
    icon: 'Sparkles',
    title: 'Rapid Speech & Language Fluency',
    description:
      'Proven track record celebrated by parents: children quickly pick up fluent spoken Tamil and English through daily storytelling and conversation.',
    color: 'brand',
  },
  {
    icon: 'Clock',
    title: 'Extended Working Hours (8:30 AM – 7:30 PM)',
    description:
      'Convenient full-day and extended daycare timings Monday through Saturday, giving complete peace of mind to working parents across Velachery and Adambakkam.',
    color: 'sunshine',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe, Disciplined & Caring Campuses',
    description:
      'Secure, hygienic, and child-safe environments in Velachery (Lakshmi Nagar) and Adambakkam (Ramkrishna Nagar) where children learn good habits, table manners, and self-reliance.',
    color: 'ocean',
  },
  {
    icon: 'Palette',
    title: 'Engaging Arts, Crafts & Celebrations',
    description:
      'Creative daily tasks, festive celebrations, cultural events, and annual day performances that bring out every child’s unique confidence.',
    color: 'mint',
  },
  {
    icon: 'Smile',
    title: 'Kids Eager to Go to School Every Day',
    description:
      'Children love coming to Kalai Kids Home! The joyful, stress-free atmosphere turns learning into an exciting daily adventure they cherish.',
    color: 'rose',
  },
];

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  alt: string;
  tag: 'Celebrations' | 'Classroom' | 'Storytelling' | 'Art & Craft' | 'Play Area' | 'Creativity';
  badge?: string;
  isFeatured?: boolean;
}

export const galleryImages: GalleryItem[] = [
  {
    id: 'annual-day-9',
    url: annualDayImg,
    title: '9th Annual Day Celebration',
    subtitle: 'Costumed stage performance with students and faculty at Kalai Kids Home',
    alt: 'Kalai Kids Home Montessori School 9th Annual Day Celebration',
    tag: 'Celebrations',
    badge: 'Verified Event Photo',
    isFeatured: true,
  },
  {
    id: 'kindergarten-graduation',
    url: graduationImg,
    title: 'Kindergarten Convocation & Graduation',
    subtitle: 'Proud little graduates in ceremonial caps and gowns receiving certificates on stage with teacher',
    alt: 'Kalai Kids Home Preschool Convocation and Graduation Day',
    tag: 'Celebrations',
    badge: 'Graduation Ceremony',
    isFeatured: true,
  },
  {
    id: 'cultural-classical-dance',
    url: culturalDanceImg,
    title: 'Annual Day Cultural Dance Performance',
    subtitle: 'Children performing traditional Bharatanatyam dance in colorful festive attire on stage',
    alt: 'Kalai Kids Home Children Classical Dance Performance on Stage',
    tag: 'Celebrations',
    badge: 'Cultural Stage',
  },
  {
    id: 'montessori-learning',
    url: heroImg,
    title: 'Montessori Activity & Cognitive Play',
    subtitle: 'Hands-on wooden blocks, geometry puzzles, and collaborative peer learning',
    alt: 'Joyful Learning & Play at Kalai Kids Home — Velachery',
    tag: 'Classroom',
    badge: 'Daily Activity',
  },
  {
    id: 'story-circle',
    url: storytellingImg,
    title: 'Storytelling & Language Circle',
    subtitle: 'Interactive storybook reading fostering rapid Tamil & English speech fluency',
    alt: 'Storytelling & Language Circle with Teacher',
    tag: 'Storytelling',
    badge: 'Speech & Phonics',
  },
  {
    id: 'creative-arts',
    url: artCraftImg,
    title: 'Creative Art & Finger Painting',
    subtitle: 'Non-toxic watercolors and sensory motor craft work designed for toddlers',
    alt: 'Creative Art & Finger Painting Activities',
    tag: 'Art & Craft',
    badge: 'Fine Motor Skills',
  },
  {
    id: 'indoor-play-zone',
    url: playAreaImg,
    title: 'Safe Indoor Play & Motor Skills',
    subtitle: 'Soft foam mats, ball pool, sensory climbers, and joyful group activities',
    alt: 'Safe Indoor Play & Motor Skill Development',
    tag: 'Play Area',
    badge: 'Active Play',
  },
  {
    id: 'student-creations',
    url: artWallImg,
    title: 'Student Creations & Exhibition Wall',
    subtitle: 'Classroom showcase of child paintings, paper origami, and creative tasks',
    alt: 'Children’s Creative Art & Craft Wall',
    tag: 'Creativity',
    badge: 'Exhibition',
  },
  {
    id: 'festive-stars',
    url: stagePerformanceImg,
    title: 'Stage Dance & Performance Stars',
    subtitle: 'Annual day performance helping every child develop public poise and joy',
    alt: 'Annual Day Stage Performance & Celebrations',
    tag: 'Celebrations',
    badge: 'Confidence',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  child?: string;
  program?: string;
  timeAgo: string;
  rating: number;
  text: string;
  tag: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rohini Chamy',
    role: 'Parent',
    child: 'K.Mahilan',
    program: 'Playgroup to Pre-KG',
    timeAgo: '5 days ago',
    rating: 5,
    tag: 'Overall Growth',
    text: 'My son (K.Mahilan) has been studying at Kalai Kids for the past two years, from Playgroup to Pre-KG. I am very happy and satisfied with his overall development. I have seen a great improvement in his speech, communication skills, behaviour, and confidence. The teachers are caring, supportive, and patient with the children. The school provides a good learning environment where kids can learn and grow happily. I am really thankful to the teachers and management for their dedication and efforts in shaping my son\'s early childhood.',
    initials: 'RC',
  },
  {
    name: 'Deepa Jayakumar',
    role: 'Parent',
    child: 'Adhvik.R',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Speech & Development',
    text: 'I’m very happy with my son’s (Adhvik.R) experience at Kalai Kids School. It provides a disciplined and nurturing environment, and I’ve seen a great improvement in his speech and overall development. The teachers are caring and give individual attention to every child. Special thanks to Uma Ma’am, Kalai Ma’am, and all the teaching and non-teaching staff for their support and dedication. Highly recommended for a strong early foundation!',
    initials: 'DJ',
  },
  {
    name: 'Kanchana Kumar',
    role: 'Mother of Shanvitha Sai',
    child: 'Shanvitha Sai',
    program: 'Pre-KG',
    timeAgo: '2 months ago',
    rating: 5,
    tag: 'Eager Learner',
    text: 'I am Shanvitha Sai mom. My daughter studing pre kg in Kalai kids. We are very happy to be a part of Kalai Kids. I can see so much improvement in my daughter, she is now so eager to read and do her homework daily. The school encourages her to get involved in all activities. A big thanks to all the teachers and Uma mam.',
    initials: 'KK',
  },
  {
    name: 'Petromax Lights',
    role: 'Parent',
    child: 'Venbha',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Loving Care',
    text: 'We are very happy with our Kalai kids school. The Teachers are kind, caring and give good attention to every child. My kid Venbha enjoys going to school every day.💝 Thank you to all teachers and special thanks to Uma mam for taking such a wonderful care of my child.',
    initials: 'PL',
  },
  {
    name: 'Shyamjith P',
    role: 'Parent',
    child: 'Urvi',
    program: 'Pre-KG',
    timeAgo: '10 months ago',
    rating: 5,
    tag: 'Language Fluency',
    text: 'I\'m extremely happy with Kalai Kids School! My daughter Urvi is in pre-kg and has picked up Tamil language so quickly. She\'s speaking fluently and doing great academically. The school is doing a fantastic job! Highly recommend 👍',
    initials: 'SP',
  },
  {
    name: 'Macline Ashok',
    role: 'Parent',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Exceptional Faculty',
    text: 'Five stars for the incredible faculty at Kalai Kids. The curriculum is engaging, and the teachers go above and beyond to ensure no student is left behind. My child is actually excited to go to school every morning, which speaks volumes about the quality of education provided here.',
    initials: 'MA',
  },
  {
    name: 'Bhuvana Bhuvi',
    role: 'Parent',
    child: 'Thaaragai',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Caring Team',
    text: 'The school is doing a great job. Teachers are very caring and supportive. My child name is Thaaragai she is very happy and learning well. Thank you for your effort… team.',
    initials: 'BB',
  },
  {
    name: 'Catherene Dhevakirubai C',
    role: 'Parent',
    timeAgo: '1 year ago',
    rating: 5,
    tag: 'Good Habits & Manners',
    text: 'My daughter is studying in Kalai kids. It is not that easy to make a child of 3 years to say rhymes or write in book. It is possible bcoz of the faculties here. The teachers are not only teaching the syllabus but also teaching good habits like arranging the things on their own, properly putting the things in its respective places. My parents and in-laws who saw the annual day function was overwhelmed by all the kids performance. We wish to thank Head mistress and all the teachers and staff who are part of Kalai kids.',
    initials: 'CD',
  },
  {
    name: 'Suganya pst',
    role: 'Mother of R.K. Surya Narayanah',
    child: 'R.K. Surya Narayanah',
    program: 'Completed KG',
    timeAgo: '1 year ago',
    rating: 5,
    tag: 'Academics & Activities',
    text: 'My Son R.K. surya Narayanah completed his KG in "KALAI KIDS" school. It provided an excellent balance between academics and extracurricular activities. The teachers were dedicated and approachable, always ensuring every student understood the concepts. The management was well-organized, responsive to parents’ concerns, and maintained a safe, disciplined environment. They taking care of each and every student separately. Special thanks to Uma Rani Ma\'am...',
    initials: 'SP',
  },
  {
    name: 'Prasanth Deva',
    role: 'Parent',
    timeAgo: '1 year ago',
    rating: 5,
    tag: 'Joyful Learning',
    text: 'School is very good. Teachers are very friendly and care taking. My daughter is studying in this school for past one year. She has learn a lot in short span of time. Her interest towards studying is always improved. She also loves to go school everyday. She enjoys alot being in the school.',
    initials: 'PD',
  },
  {
    name: 'Stephy Td',
    role: 'Mother of Adam Praveen',
    child: 'Adam Praveen',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Dedication',
    text: 'My son Adam praveen grown up from here, Thank you Uma mam for your support and dedication to take care of each and every child. Highly recommend this school.',
    initials: 'ST',
  },
  {
    name: 'Kaviya Sudhakar',
    role: 'Mother of Hrithik Iniyan',
    child: 'Hrithik Iniyan',
    program: 'Playgroup',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Speech Improvement',
    text: 'My son Hrithik Iniyan joined here. He is in Playgroup, his speaking ability has been improving well.. thankyou so much for that mam.',
    initials: 'KS',
  },
  {
    name: 'Sana Akbar',
    role: 'Parent',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Behavior & Progress',
    text: 'Very nice school.... Good Academic progress. Very cooperative teachers. Good changes in children behaviour.... Kids are willing to go to school...',
    initials: 'SA',
  },
  {
    name: 'M.Muthusamy M.Muthusamy',
    role: 'Parent',
    timeAgo: '10 months ago',
    rating: 5,
    tag: 'Creative Tasks',
    text: 'Childrens activities, u will give to childres creative task, childrens take carring, u will create for festival celebrations. Everything fantastic extraordinary & amazing outstanding performance. Coming up childrens future is brightness.. my baby is very much improve personal skills. Thank u so much everything. Keep it up.',
    initials: 'MM',
  },
  {
    name: 'Saranya Aswin',
    role: 'Parent',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Super Handling',
    text: 'Truely we are all loving so much mam THANK YOU SO MUCH and the way of teaching then way of handling the students is really really super.',
    initials: 'SA',
  },
  {
    name: 'Tharaneshwari Anbarasu',
    role: 'Parent',
    timeAgo: '3 years ago',
    rating: 5,
    tag: 'Kind & Caring',
    text: 'My daughter is studying in Kalai kids. She improved a lot after joined kalai kids. Teachers are very kind and very caring. Especially Uma mam, thank u very much for your support and care.. keep rocking always.',
    initials: 'TA',
  },
  {
    name: 'Vishwathigaa',
    role: 'Parent',
    timeAgo: '1 year ago',
    rating: 5,
    tag: 'Safe & Secured',
    text: 'Great school... The teachers guide the children in all aspect and make both the child and the parent feel safe and secured.',
    initials: 'VI',
  },
  {
    name: 'Shalini Xavier',
    role: 'Parent',
    timeAgo: '1 year ago',
    rating: 5,
    tag: 'Kind Teachers',
    text: 'A better environment of the children\'s development in studies. Teachers are very kind to children. Kalai kids is the best school for your children\'s 😊',
    initials: 'SX',
  },
  {
    name: 'Renuka Senthil',
    role: 'Parent',
    timeAgo: '4 years ago',
    rating: 5,
    tag: 'Trusted Learning',
    text: 'Very very good school. My kid learnt a lot after joining Kalai kids home. Thanks to all the teachers.',
    initials: 'RS',
  },
  {
    name: 'Msd Brendan',
    role: 'Parent',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Individual Care',
    text: 'Excellent... Good supporting and care taken by each of the individual kids... Thankful for the support and guidance.',
    initials: 'MB',
  },
  {
    name: 'Arul Selvam',
    role: 'Parent',
    timeAgo: '10 months ago',
    rating: 5,
    tag: 'Good Atmosphere',
    text: 'Good atmosphere, Good communication, wake of teaching from teachers was Good.',
    initials: 'AS',
  },
  {
    name: 'S.v.lishav Vinoth',
    role: 'Parent',
    timeAgo: '6 months ago',
    rating: 5,
    tag: 'Excellent Efforts',
    text: 'Really excellent 👍 efforts 👍',
    initials: 'SV',
  },
];

export const stats = [
  { value: '5.0 ★', label: 'Google Rating (45+ Reviews)', sub: 'Velachery & Adambakkam' },
  { value: '2 Campuses', label: 'Velachery & Adambakkam', sub: 'Easy Neighborhood Access' },
  { value: '8:30–7:30', label: 'Extended Hours (Mon–Sat)', sub: 'Full Day & Daycare Support' },
  { value: '10+', label: 'Years of Excellence', sub: 'Montessori Early Childhood' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Hours', href: '#hours' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#features' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
