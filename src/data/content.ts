import {
  ServiceItem,
  WhyChooseItem,
  GalleryItem,
  CollegeSupportCategory,
  InternshipDomain,
  InternshipBenefit,
} from '@/types';

export const COMPANY_INFO = {
  name: 'ALTRUISTY INNOVATION',
  legalName: 'Altruisty Innovation Pvt Ltd',
  tagline: 'Innovate. Build. Transform.',
  phone: '8667839838',
  phoneDisplay: '+91 86678 39838',
  email: 'contact@altruistyinnovation.com',
  website: 'https://www.altruistyinnovation.com/',
  copyright: '© 2026 Altruisty Innovation. All rights reserved.',
  servicesSummary: 'Software Solutions | Emerging Technologies | Internships',
  social: {
    linkedin: 'https://www.linkedin.com/company/altruisty-innovation/',
    instagram: 'https://www.instagram.com/altruisty_innovation/',
  },
};

export const HERO_CONTENT = {
  kicker: 'Innovate. Build. Transform.',
  heading: 'Turning Ideas into Intelligent Digital Solutions',
  paragraph1:
    'We help businesses embrace technology, empower students with practical skills, and support innovators in transforming ideas into meaningful digital experiences.',
  paragraph2:
    'From software development to emerging technologies, we bring ideas to life through innovation, creativity, and technology.',
  ctaPrimary: 'Explore Our Services',
  ctaSecondary: 'Apply for Internship',
};

export const ABOUT_CONTENT = {
  heading: 'Empowering Innovation Through Technology',
  paragraphs: [
    'Altruisty Innovation is a technology-driven company focused on software solutions, skill development, and innovation. We bring together technology, creativity, and learning to help businesses grow and aspiring professionals build their future.',
    'Our approach combines practical problem-solving with modern technologies to create solutions that make a difference.',
    'Whether you are a business looking to build a digital product, a student ready to develop industry-relevant skills, or an aspiring entrepreneur with a new idea, we aim to help you take the next step.',
  ],
  mission: {
    title: 'Our Mission',
    description:
      'To make technology accessible, practical, and impactful through innovation and continuous learning.',
  },
  vision: {
    title: 'Our Vision',
    description:
      'To create a future where technology empowers people, businesses, and communities to achieve more.',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-development',
    number: '01',
    title: 'Software Development',
    description:
      'We develop customized digital solutions that help businesses streamline operations, improve productivity, and deliver better user experiences.',
    features: [
      'Website and web application development',
      'Mobile application development',
      'E-commerce solutions',
      'Custom software development',
      'Database and API integration',
    ],
    iconName: 'Code2',
  },
  {
    id: 'ai-emerging-tech',
    number: '02',
    title: 'Artificial Intelligence & Emerging Technologies',
    description:
      'We explore modern technologies to help organizations create smarter, more efficient digital experiences.',
    features: [
      'Artificial intelligence and machine learning solutions',
      'Generative AI applications',
      'Data analytics and visualization',
      'Intelligent workflow automation',
      'Technology consulting and prototyping',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'digital-transformation',
    number: '03',
    title: 'Digital Transformation',
    description:
      'We help businesses identify opportunities to modernize their processes and make better use of digital technology.',
    features: [
      'Business process automation',
      'Digital product strategy',
      'System integration',
      'Workflow optimization',
      'Digital solution consulting',
    ],
    iconName: 'Sparkles',
  },
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: 'innovation',
    number: '01',
    title: 'Innovation-Driven Thinking',
    description:
      'We explore creative approaches to solving real-world problems with technology.',
  },
  {
    id: 'practical',
    number: '02',
    title: 'Practical Solutions',
    description:
      'We focus on applying modern technologies to meaningful business challenges.',
  },
  {
    id: 'modern-tech',
    number: '03',
    title: 'Modern Technologies',
    description:
      'We explore emerging tools and technologies to develop solutions for evolving digital needs.',
  },
  {
    id: 'collaborative',
    number: '04',
    title: 'Collaborative Approach',
    description:
      'We bring people, ideas, and technology together to encourage collaboration and create opportunities for growth.',
  },
];

export const GALLERY_CONTENT = {
  heading: 'Moments That Inspire Innovation',
  description:
    'Explore our journey through technology projects, events, team activities, and collaborative initiatives. Our gallery highlights the people, ideas, and experiences that reflect our commitment to creativity and technological advancement. From project demonstrations to memorable events, discover the moments that shape our journey.',
  items: [
    {
      id: 'g1',
      title: 'Digital Solutions Showcase',
      category: 'Technology Projects',
      description: 'Demonstrating modern enterprise architectures and responsive digital experiences.',
      badge: 'Project Demo',
    },
    {
      id: 'g2',
      title: 'Student Innovation Hackathons',
      category: 'Events & Challenges',
      description: 'Empowering young engineers with mentorship and real-time development hurdles.',
      badge: 'Hackathon',
    },
    {
      id: 'g3',
      title: 'Hands-on AI Workshops',
      category: 'Skill Development',
      description: 'Interactive technical masterclasses covering Generative AI and ML pipelines.',
      badge: 'Workshop',
    },
    {
      id: 'g4',
      title: 'Campus Project Expos',
      category: 'Collaborative Initiatives',
      description: 'Evaluating innovative prototypes with academic faculties and student creators.',
      badge: 'Campus Expo',
    },
    {
      id: 'g5',
      title: 'Team Technology Sprints',
      category: 'Team Activities',
      description: 'Collaborative problem solving and creative brainstorming for scalable solutions.',
      badge: 'Team Sprint',
    },
    {
      id: 'g6',
      title: 'Industry Mentorship Sessions',
      category: 'Mentorship',
      description: 'Bridging classroom knowledge with enterprise perspectives and best practices.',
      badge: 'Mentorship',
    },
  ],
};

export const CLIENTS_CONTENT = {
  heading: 'Trusted Relationships. Meaningful Solutions.',
  paragraph1:
    'We work with businesses and organizations to understand their challenges and deliver technology-driven solutions that support their goals.',
  paragraph2:
    'Our focus is on building lasting relationships through collaboration, quality, and a commitment to creating value.',
  paragraph3:
    'We look forward to working with organizations that share our vision for digital innovation.',
};

export const PARTNERS_CONTENT = {
  heading: 'Growing Together Through Collaboration',
  description:
    'Strong partnerships create opportunities for innovation. We welcome collaborations with technology companies, educational institutions, startups, and organizations that share our passion for technology and development. Together, we aim to exchange knowledge, explore new possibilities, and create meaningful opportunities for businesses and aspiring professionals.',
  ctaTitle: 'Interested in Partnering With Us?',
  ctaText:
    "Let's build a collaborative ecosystem that encourages innovation and shared success.",
  contactPhone: '8667839838',
};

export const COLLEGE_COLLABORATIONS_CONTENT = {
  heading: 'Your Campus. Your Ideas. Our Innovation.',
  description:
    'Altruisty Innovation is open to collaborating with colleges and educational institutions as an Industry Partner for technical events, hackathons, innovation challenges, project expos, startup events, and student-led initiatives. We believe that great ideas deserve the right guidance, industry exposure, and opportunities to grow. Through our collaborations, we aim to help students turn their creativity into practical solutions while connecting academic innovation with real-world industry perspectives.',
  supportCategories: [
    {
      number: '01',
      title: 'Mentorship Sessions',
      description:
        'Industry guidance, technical roadmap planning, and practical advice from experienced technologists.',
    },
    {
      number: '02',
      title: 'Jury and Evaluation Support',
      description:
        'Constructive feedback, technical evaluation criteria, and objective jury participation for competitions.',
    },
    {
      number: '03',
      title: 'Internship Opportunities for Winners',
      description:
        'Direct internship placement pipelines and practical experience tracks for standout student teams.',
    },
    {
      number: '04',
      title: 'Product Development Support',
      description:
        'Assisting student innovators in turning conceptual project prototypes into scalable products.',
    },
    {
      number: '05',
      title: 'Innovation Funding Opportunities',
      description:
        'Guidance on incubation, funding pathways, and ecosystem connections for high-impact ideas.',
    },
  ],
  calloutTitle: "Let's Create Opportunities for Student Innovators",
  calloutText:
    'Organizing a college symposium, hackathon, technical festival, project expo, or innovation event? Partner with Altruisty Innovation to bring industry perspectives, mentorship, and opportunities for promising student ideas to grow.',
  contactPhone: '8667839838',
};

export const INTERNSHIP_DOMAINS: InternshipDomain[] = [
  { id: 'ai-ml', title: 'Artificial Intelligence & Machine Learning', category: 'Emerging Tech', popular: true },
  { id: 'gen-ai', title: 'Generative AI', category: 'Emerging Tech', popular: true },
  { id: 'data-science', title: 'Data Science', category: 'Emerging Tech' },
  { id: 'data-analytics', title: 'Data Analytics', category: 'Emerging Tech' },
  { id: 'python', title: 'Python Programming', category: 'Software Engineering' },
  { id: 'java', title: 'Java Programming', category: 'Software Engineering' },
  { id: 'full-stack', title: 'Full-Stack Web Development', category: 'Software Engineering', popular: true },
  { id: 'mern', title: 'MERN Stack Development', category: 'Software Engineering', popular: true },
  { id: 'web-dev', title: 'Web Development', category: 'Software Engineering' },
  { id: 'mobile-dev', title: 'Mobile App Development', category: 'Software Engineering' },
  { id: 'ui-ux', title: 'UI/UX Design', category: 'Design & Business', popular: true },
  { id: 'hr-marketing', title: 'HR & Marketing', category: 'Design & Business' },
  { id: 'other', title: 'Other', category: 'Specialized' },
];

export const INTERNSHIPS_CONTENT = {
  heading: 'Learn. Build. Grow.',
  description:
    'Turn your interest in technology into practical experience. Our internship opportunities are designed to help students explore emerging technologies, strengthen their technical knowledge, and develop project-building skills. Whether you are beginning your technology journey or exploring a specialized field, discover an internship domain that aligns with your interests and career goals.',
  whyApply: [
    'Explore modern technology domains.',
    'Strengthen your technical foundations.',
    'Apply concepts through practical projects, where offered.',
    'Improve problem-solving and analytical skills.',
    'Develop portfolio-ready project experience.',
    'Prepare for future career opportunities.',
  ],
};

export const REGISTRATION_CONTENT = {
  header: 'Ready to Start Your Journey?',
  subheading:
    'Complete the registration form below and select your preferred domain. Our team can follow up with information about available opportunities and application requirements.',
  title: 'Internship Registration Form',
  subtitle: 'Register your interest in an internship at Altruisty Innovation.',
  yearOptions: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate / Other'],
  modeOptions: ['Online', 'In-person', 'Hybrid'],
  consentText:
    'I agree to the processing of my submitted information for the purpose of responding to my internship enquiry, in accordance with the Privacy Policy.',
};

export const CONTACT_CTA_CONTENT = {
  heading: "Let's Build Something Meaningful",
  subheading: 'Have an Idea? Let\'s Make It Happen.',
  description:
    'Whether you want to develop a digital product, explore a technology solution, collaborate on an innovative project, or begin your technology career, Altruisty Innovation welcomes the opportunity to connect. Let\'s collaborate, innovate, and create solutions for tomorrow.',
  btnPrimary: 'Contact Us',
  btnSecondary: 'Get Started',
};

export const CONTACT_CONTENT = {
  heading: "We'd Love to Hear From You",
  description:
    'Have a project in mind, want to explore a partnership, or need more information about our internship opportunities? Reach out to our team.',
  companyName: 'Altruisty Innovation',
  phone: '8667839838',
  phoneDisplay: '+91 86678 39838',
  email: 'contact@altruistyinnovation.com',
  website: 'https://www.altruistyinnovation.com/',
  location: 'Tamil Nadu, India',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Clients', href: '#clients' },
  { name: 'Partners', href: '#partners' },
  { name: 'College Events', href: '#college-events' },
  { name: 'Internships', href: '#internships' },
  { name: 'Contact', href: '#contact' },
];

