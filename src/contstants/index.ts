const navLinks = [
  { label: "Решения" },
  { label: "Кейсы" },
  { label: "Контакты" },
  { label: "Форма" },
];

const facts = [
  {
    id: "facts-1",
    title: "2016",
    subtitle: "основание компании",
    text: "Наша команда 2016 года активно занималась научными разработками и в 2024 году начала реализовывать свои разработки в виде инновационных цифровых решений. За это время компания реализовала и внедрила более десятка крупных проектов",
  },
  {
    id: "facts-2",
    title: "100+",
    subtitle: "сотрудников",
    text: "К нам присоединилось более 100 профессионалов в области IT, которые поддерживают наши ценности и составляют основной капитал компании",
  },
  {
    id: "facts-3",
    title: "Аэрокосмическая Инновационная Долина",
    subtitle: null,
    text: 'С 2025 года мы являемся резидентами ИНТЦ "Аэрокосмическая Инновационная Долина" развивая и коммерциализируя собственные инновационные разработки в сфере ИТ',
  },
];

const ourStrength = [
  {
    id: "our-strength-1",
    title: "1",
    text: "Создаём инновационные цифровые решения и сервисы с нуля",
  },
  {
    id: "our-strength-2",
    title: "2",
    text: "Помогаем развивать бизнес в цифровой среде, создаем основу для роста на рынке",
  },
  {
    id: "our-strength-3",
    title: "3",
    text: "Привлекаем в свою команду крутых специалистов, которые создают будущее",
  },
  {
    id: "our-strength-4",
    title: "4",
    text: "Занимаемся исследованием и разработкой AI‑решений",
  },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: "./display-1.jpg" },
  { id: "p2", src: "./display-2.jpg" },
  { id: "p3", src: "./display-3.jpg" },
  { id: "p4", src: "./display-4.jpg" },
  { id: "p5", src: "./display-schema.svg" },
  { id: "p6", src: "./display-6.jpg" },
  { id: "p7", src: "./display-7.jpg" },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
  facts,
  ourStrength,
};
