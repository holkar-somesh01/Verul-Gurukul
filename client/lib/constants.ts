import { GraduationCap, Home, Info, Library, Mail, MapPin, Phone, School } from 'lucide-react';
import school from '../../client/app/assets/school-img.jpg';
import building2 from '../../client/app/assets/building2-img.jpg';
import rifel from '../../client/app/assets/rifel.jpg';
import staff from '../../client/app/assets/staff.jpg';
import Assembly from '../app/assets/Assembly.jpg'
import Assembly01 from '../app/assets/Assembly01.jpg'
import Assembly02 from '../app/assets/Assembly02.jpg'
import AssemblyFN from '../app/assets/AssemblyFN.jpg'
import AwardFN from '../app/assets/AwardFN.jpg'
import AwardFn01 from '../app/assets/AwardFn01.jpg'
import Computer from '../app/assets/Computer.jpg'
import FN from '../app/assets/FN.jpg'
import FN01 from '../app/assets/FN01.jpg'
import FN02 from '../app/assets/FN02.jpg'
import FN03 from '../app/assets/FN03.jpg'
import FN04 from '../app/assets/FN04.jpg'
import FrontSchool from '../app/assets/FrontSchool.jpg'
import RakhiFN from '../app/assets/RakhiFN.jpg'
import RifileShoot from '../app/assets/RifileShoot.jpg'
import ScienceExp from '../app/assets/ScienceExp.jpg'
import ScienceExp01 from '../app/assets/ScienceExp01.jpg'
import Teaching from '../app/assets/Teaching.jpg'
import Work from '../app/assets/Work.jpg'
import Work01 from '../app/assets/Work01.jpg'
import babaji from '../app/assets/babaji.jpg'
import BookD from '../app/assets/bookD.jpg'
import buildingImg from '../app/assets/building-img.jpg'

export const SITE_CONFIG = {
  name: 'Shree Sant Janardhan Swami School',
  shortName: 'SSJSS',
  description: 'Shree Sant Janardhan Swami Secondary and Higher Secondary School, Verul',
  url: 'https://janardhanswamischool.edu.in',
  ogImage: '/images/og-image.jpg',
}

export const NAVIGATION_LINKS = [
  {
    key: 'home',
    href: '/',
    icon: Home
  },
  {
    key: 'about',
    href: '/about',
    icon: Info
  },
  {
    key: 'departments',
    href: '/departments',
    icon: School,
    children: [
      {
        key: 'rifleShooting',
        href: '/departments/rifle-shooting',
      },
      {
        key: 'hostel',
        href: '/departments/hostel',
      },
    ]
  },
  {
    key: 'gallery',
    href: '/gallery',
    icon: Library
  },
  {
    key: 'contact',
    href: '/contact',
    icon: Mail
  },
];

export const CONTACT_INFO = {
  address: {
    lines: ['Verul', 'Aurangabad District', 'Maharashtra, India'],
    icon: MapPin,
  },
  phone: {
    number: '+91 123 456 7890',
    icon: Phone,
  },
  email: {
    address: 'info@janswamiSchool.edu.in',
    icon: Mail,
  },
};

export const GALLERY_CATEGORIES = ['events', 'assemblies', 'staff', 'campus',];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: school.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199369/Assembely_y9vimb.jpg',
    alt: 'School Assembly',
    category: 'assemblies'
  },
  {
    id: 2,
    src: Assembly.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199369/Assembely_y9vimb.jpg',
    alt: 'School Assembly',
    category: 'assemblies'
  },
  {
    id: 3,
    src: building2.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199332/school-building_ff46sk.jpg',
    alt: 'School Building',
    category: 'campus'
  },
  {
    id: 4,
    src: rifel.src,
    // src: "https://res.cloudinary.com/dmolheokh/image/upload/v1749199279/Rifile-shooting_ir2hy8.jpg",
    alt: 'Rifle Shooting Training',
    category: 'events'
  },
  {
    id: 5,
    src: staff.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg',
    alt: 'School Staff',
    category: 'staff'
  },
  {
    id: 6,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXPLA47a-bfeO1d_mGpR45eaElSff2aCz7w&s',
    alt: 'Program',
    category: 'events'
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749201060/program_niwrhz.jpg',
    alt: 'Program',
    category: 'events'
  },
  {
    id: 8,
    src: FN.src,
    alt: 'Program',
    category: 'events'
  },
  {
    id: 9,
    src: FN01.src,
    alt: 'Program',
    category: 'events'
  },
  {
    id: 10,
    src: FN02.src,
    alt: 'Program',
    category: 'events'
  },
  {
    id: 11,
    src: FN03.src,
    alt: 'Program',
    category: 'events'
  },
  {
    id: 12,
    src: FN04.src,
    alt: 'Program',
    category: 'events'
  },
];

export const QUICK_LINKS = [
  { name: 'nav.home', href: '/' },
  { name: 'nav.about', href: '/about' },
  { name: 'nav.departments', href: '/departments' },
  { name: 'nav.gallery', href: '/gallery' },
  { name: 'nav.contact', href: '/contact' },
];

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
];

export const ACHIEVEMENTS = [
  {
    title: '100%',
    description: 'home.achievements.item1',
    icon: GraduationCap,
  },
  {
    title: '50+',
    description: 'home.achievements.item2',
    icon: School,
  },
  {
    title: '200+',
    description: 'home.achievements.item3',
    icon: Library,
  },
  {
    title: '25+',
    description: 'home.achievements.item4',
    icon: GraduationCap,
  },
];