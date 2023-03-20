// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Request a Demo',
};

export const nav = [
  { name: 'Features', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Track Your Expenses & Save Money',
  subtitle: 'Help organize your income and expenses!',
  btnText: 'Try Free Demo',
  compText: '— Web, iOS & Android',
  image: HeroImg,
};

export const overview = {
  title: 'Join Our Major Partners',
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Stay online',
    title: 'Real-time Cloud Support',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn More',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Save on costs',
    title: 'Cut Costs For You & Your Family',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn More',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: '24/7 Access',
    title: 'Always There For You',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn More',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Something For Everyone ',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Cross Platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Cloud Server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Choose From Our Flexible Plans',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store 20 GB of Data' },
        { name: 'Export to PDF, XLS & CSV' },
        { name: 'Cloud Server Support' },
        { name: 'Single User Access Only' },
      ],
      price: '$9.99',
      btnText: 'Get This',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store 200 GB of Data' },
        { name: 'Export to PDF, XLS & CSV' },
        { name: 'Cloud Server Support' },
        { name: 'Up to 3 Users' },
      ],
      price: '$19.99',
      btnText: 'Get This',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store Unlimited Data' },
        { name: 'Export to PDF, XLS & CSV' },
        { name: 'Cloud Server Support' },
        { name: 'Up to 5 Users' },
      ],
      price: '$29.99',
      btnText: 'Get This',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'New Happy Customers Everyday!',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'Accounting',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'Surgeon',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'Lead Investor',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'Marketing',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ Downloads Across 32 Different Countries!',
  subtitle: 'Try A Full Featured Demo For 7 Days Today!',
  btnText: 'Try Free Demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of Use', href: '/' },
    { name: 'Terms of Conditions', href: '/' },
    { name: 'Privacy Policy', href: '/' },
    { name: 'Cookie Policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25,000 people have subscribed!',
  },
  form: {
    placeholder: 'Enter Your Email',
    btnText: 'Subscribe',
    smallText: 'We won’t sell your data or send you spam.',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact Us',
    href: '/',
  },
  copyText: 'Spendify Copyright 2023 ',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
