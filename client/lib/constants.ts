import { GraduationCap, Home, Info, Library, Mail, MapPin, Phone, School } from 'lucide-react';
import school from '../../client/app/assets/school-img.jpg';
import building2 from '../../client/app/assets/building2-img.jpg';
import rifel from '../../client/app/assets/rifel.jpg';
import staff from '../../client/app/assets/staff.jpg';
import building3 from '../../client/app/assets/building3.jpg';
import tradition from '../../client/app/assets/tradition-img.jpg';
import swami from '../../client/app/assets/swami-img.jpg';
import students from '../../client/app/assets/students.jpg';
import shiv from '../../client/app/assets/shiv-img.jpg';
import sciencelab from '../../client/app/assets/sciencelab-img.jpg';
import professor from '../../client/app/assets/professor-img.jpg';
import lab from '../../client/app/assets/lab-img.jpg';
import hostel from '../../client/app/assets/hostel.jpg';
import front from '../../client/app/assets/front-img.jpg';
import ground from '../../client/app/assets/ground-img.jpg';
import food from '../../client/app/assets/food-img.jpg';

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

export const GALLERY_CATEGORIES = ['events', 'assemblies', 'staff', 'campus', 'function'];

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
    src: building2.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199332/school-building_ff46sk.jpg',
    alt: 'School Building',
    category: 'campus'
  },
  {
    id: 3,
    src: rifel.src,
    // src: "https://res.cloudinary.com/dmolheokh/image/upload/v1749199279/Rifile-shooting_ir2hy8.jpg",
    alt: 'Rifle Shooting Training',
    category: 'events'
  },
  {
    id: 4,
    src: staff.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg',
    alt: 'School Staff',
    category: 'staff'
  },
  {
    id: 5,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXPLA47a-bfeO1d_mGpR45eaElSff2aCz7w&s',
    alt: 'Program',
    category: 'function'
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749201060/program_niwrhz.jpg',
    alt: 'Program',
    category: 'function'
  },
  {
    id: 7,
    src: building3.src,
    alt: 'School Assembly',
    category: 'assemblies'
  },
  {
    id: 8,
    src: swami.src,
    alt: 'School Assembly',
    category: 'assemblies'
  },
  {
    id: 9,
    src: tradition.src,
    alt: 'Program',
    category: 'function'
  },
  {
    id: 10,
    src: students.src,
    alt: 'Program',
    category: 'function'
  },
  {
    id: 11,
    src: shiv.src,
    alt: 'Program',
    category: 'function'
  },
  {
    id: 12,
    src: sciencelab.src,
    alt: 'sciencelab',
    category: 'campus'
  },
  {
    id: 13,
    src: professor.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg',
    alt: 'School Staff',
    category: 'staff'
  },
  {
    id: 14,
    src: lab.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg',
    alt: 'lab',
    category: 'campus'
  },
  {
    id: 15,
    src: hostel.src,
    // src: 'https://res.cloudinary.com/dmolheokh/image/upload/v1749199168/Sttaf_m9lyww.jpg',
    alt: 'hostel',
    category: 'campus'
  },
  {
    id: 16,
    src: front.src,
    alt: 'Program',
    category: 'function'
  },
  {
    id: 17,
    src: ground.src,
    alt: 'ground',
    category: 'campus'
  },
  {
    id: 18,
    src: food.src,
    alt: 'food',
    category: 'all'
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