import { MainPropsType } from "./Types/PropsTypes";

export const mainData: MainPropsType["mainData"] = [
  {
    id: 1,
    title: "Про мене",
    description:
      "Я зацікавився програмуванням, щоб створити свій сайт для власного бізнесу, а потім продовжив вивчати нові технології. У мене пів року досвіду роботи над проектом у SoftServe стажування та роботи над моїм улюбленим проектом. Маю більше року досвіду на freelance, займався виготовленням сайтів (Сайти візитка, інтернет магазин). Мої сильні сторони - комунікабельність і наполегливість. Я прагну розвиватися як Full stack developer, досягаючи цілей. Здатний швидко навчатися, знаходити рішення та брати на себе відповідальність, я можу працювати з JavaScript(ES6+), TypeScript, HTML5, CSS3, React, Redux, Next.js, Node.js, Express, MongoDB, Figma. Шукаю сильну команду та наставника для розробки нових проектів. Крім того, будучи перфекціоністом протягом усього життя, я прагну писати чистий, зручний, ефективний код навіть у скрутному середовищі. Я прагну дотримуватись загальних принципів програмування, таких як SOLID, KISS і DRY.",
    // title: "About me",
    // description:
    //  "I became interested in programming to create my website for own business and than continued to learn new technologies. I have half a year of experience on a project at SoftServe intership and working on my pet project. My strengths are communication and persistence. I strive to develop as a Full stack developer, achieving goals. Able to learn quickly, find solutions and take responsibility, I can work with JavaScript(ES6+), TypeScript, HTML5, CSS3, React, Redux, Next.js, Node.js, Express, MongoDB, Figma. I am looking for a strong teamand mentor to develop new projects. Additionally, being a lifelong perfectionist, I aim to write clean, eliable,  efficient code even in a time pressured environment. I strive to follow general programming principles such as SOLID, KISS, and DRY.",
  },
  {
    id: 2,
    title: "Технічні навички",
    description:
      "Мова програмування  JavaScript(ES6+), TypeScript, Framework: React, Redux, Next.js Node.js Технології: HTML5,CSS3, Sass/Less, BEM Методологія Додаткові інструменти: Dev Tools, VsCode, Terminal, http/rest api Css Framework: Material UI, Styled Components Control Version: Git, GitHub, npm/yarn, cdn Libraries: Lodash, Axios, Moment.js Module bundler: Webpack, Babel SCRUM methodology: Trello Formating: ESLint, Prettier Design: Figma Testing : Jest Git , Гіхаб",
    // title: "Technical skills",
    // description:
    //  "Language: JavaScript(ES6+), TypeScript JS Library/Framework : React, Redux, Next.js Node.js Layout: HTML5,CSS3, Sass/Less, BEM Methodology Extra tools: Dev Tools, VsCode, Terminal, http/rest api Css Framework: Material UI, Styled Components Control Version: Git, GitHub, npm/yarn, cdn Libraries: Lodash, Axios, Moment.js Module bundler: Webpack, Babel SCRUM methodology: Trello Formatting: ESLint, Prettier Design: Figma Testing : Jest Git, Gihub",
    images: [
      { id: 1, src: "/images/html.svg" },
      { id: 2, src: "/images/css.svg" },
      { id: 3, src: "/images/javascript.svg" },
      { id: 4, src: "/images/react.svg" },
      { id: 5, src: "/images/nextjs.svg" },
      { id: 6, src: "/images/ts.svg" },
    ],
  },
  {
    id: 3,
    title: "Рівень англійської",
    description: `Мій рівень англійської pre-intermediate.`,
    // title: "English level",
    // description: `My level of English is pre-intermediate.`,
  },
  {
    id: 4,
    title: "Досвід роботи",
    description:
      "Я створив сайти: ladclimatservice.com.ua на WordPress deshevakovka.com.ua на HTML5, CSS3, JavaScript(ES6+) remontonline.netlify.app на React, Redux, Node.js, Next.js, Express, MongoDB. Основним завданням було впровадження нових функцій і оновлення поточного коду за допомогою сучасних технологій і стеків. Вивчав і використовував стек React-Router, Redux-Toolkit, React Hooks, MongoDB, CRUD, AJAX, JSON, REST API і працював над проектом постійно та понаднормово вдома 3-5 годин на день.",
    // description:
    //  "I created websites: ladclimatservice.com.ua by using WordPress deshevakovka.com.ua by HTML5, CSS3, JavaScript(ES6+) remontonline.netlify.app by React, Redux, Node.js, Next.js, Express, MongoDB. The main task was to introduce new features and update the current code using modern technologies and stacks. Studied and used the stack React-Router, Redux-Toolkit, React Hooks, MongoDB, CRUD, AJAX, JSON, REST API and worked on the project ull time and overtime at home 3-5 hours a day.",
  },
  {
    id: 5,
    title: "Soft skills",
    description: "Можу виділити наступне soft skills:",
    listItems: [
      { id: 1, skill: "Чесність" },
      { id: 2, skill: "Комндна робота" },
      { id: 3, skill: "Комунікабельність" },
      { id: 4, skill: "Виконливість" },
      { id: 5, skill: "Надійність" },
      { id: 6, skill: "Управління часом" },
    ],
    // description: "I can highlight the following soft skills:",
    // listItems: [
    //  { id: 1, skill: "Honesty" },
    //  { id: 2, skill: "Teamwork" },
    //  { id: 3, skill: "Communication" },
    //  { id: 4, skill: "Empathy" },
    //  { id: 5, skill: "Reliability" },
    //  { id: 6, skill: "Time management" },
    // ],
  },
  {
    id: 6,
    title: "Мої проекти",
    // title: "My projects",
    description: "This text is not displayed",
    sliderData: [
      {
        id: 1,
        imageSrc: "/Pizza-Stor.jpg",
        projectTitle: "Pizza-Stor App",
        projectDescription: "A small website for a pizza shop",
        technologies: [
          { id: 1, technology: "React" },
          { id: 2, technology: "JavaScript" },
          { id: 3, technology: " Node.js" },
          { id: 4, technology: " MongoDB" },
          { id: 5, technology: " Express" },
        ],
        src: "https://pizza-storr.netlify.app",
      },
      {
        id: 1,
        imageSrc: "/Remontonline.png",
        projectTitle: "remontonline App",
        projectDescription: "Program for accounting of equipment in the workshop",
        technologies: [
          { id: 1, technology: "React" },
          { id: 2, technology: "JavaScript" },
          { id: 3, technology: " Node.js" },
          { id: 4, technology: " MongoDB" },
          { id: 5, technology: " Express" },
        ],
        src: "https://remontonline.netlify.app/",
      },
      {
        id: 2,
        imageSrc: "/Petly.png",
        projectTitle: "Petly App",
        projectDescription:
          "Used of HTTP requests, mongodb database, express framework react, and nodeJS. The work is done independently.",
        technologies: [
          { id: 1, technology: "JavaScript" },
          { id: 2, technology: "CSS" },
          { id: 3, technology: " Node.js" },
          { id: 4, technology: " MongoDB" },
          { id: 5, technology: " Express" },
        ],
        src: "https://viacheslav-tykhovlis.github.io/petly-site/",
      },
      {
        id: 3,
        imageSrc: "/deshevakovka.png",
        projectTitle: "deshevakovka.com",
        projectDescription:
          "The site is made on pure HTML CSS for the sale of forged luxury gates",
        technologies: [
          { id: 1, technology: "HTML5" },
          { id: 2, technology: " JavaScript(ES6+)" },
          { id: 3, technology: "CSS3" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://deshevakovka.com.ua/",
      },
      {
        id: 4,
        imageSrc: "/Ladclimatservice.png",
        projectTitle: "Ladclimatservice",
        projectDescription:
          "The site is made on pure HTML, CSS and WordPress libraries for selling air conditioners",
        technologies: [
          { id: 1, technology: "WordPress" },
          { id: 2, technology: "HTML" },
          { id: 3, technology: "CSS" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://ladclimatservice.com.ua/",
      },
      {
        id: 5,
        imageSrc: "/Coffee-Shop.jpg",
        projectTitle: "Coffee Shop",
        projectDescription:
          "The site is made on pure HTML, CSS and javascript libraries for selling coffee",
        technologies: [
          { id: 2, technology: "HTML" },
          { id: 3, technology: "CSS" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://l-coffee-shop.netlify.app",
      },
      {
        id: 6,
        imageSrc: "/Our-Chat.jpg",
        projectTitle: "Our-Chat-App",
        projectDescription:
          "The site is made on pure HTML, CSS and javascript",
        technologies: [
          { id: 2, technology: "HTML" },
          { id: 3, technology: "CSS" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://our-chat-my.netlify.app",
      },
      {
        id: 7,
        imageSrc: "/Bitmap.png",
        projectTitle: "adaptiv site",
        projectDescription:
          "The site is made on pure HTML, CSS and javascript libraries for selling air conditioners",
        technologies: [
          { id: 2, technology: "HTML" },
          { id: 3, technology: "CSS" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://stunning-strudel-576147.netlify.app",
      },
      {
        id: 8,
        imageSrc: "/Flovers-store.jpeg",
        projectTitle: "adaptiv site",
        projectDescription:
          "The site is made on pure HTML, CSS and javascript libraries for selling air conditioners",
        technologies: [
          { id: 2, technology: "HTML" },
          { id: 3, technology: "CSS" },
          { id: 4, technology: "Webpack" },
          { id: 5, technology: "Babel" },
        ],
        src: "https://flowers-goithop.netlify.app",
      },
    ],
  },
  {
    id: 7,
    title: "EDUCATION",
    description:
      "Lviv State Agrarian University Automation Agriculture sector Mechanical engineer",
    listItems: [
      {
        id: 1,
        skill:
          "Lviv State Agrarian University Automation Agriculture sector Mechanical engineer",
      },
      {
        id: 2,
        skill: "Lemon.School Java Developer Desember 2021 - May 2021",
      },
      {
        id: 3,
        skill:
          "Soft Serve Academy Inership for Front-End Developer May 2020 - August 2021",
      },
      {
        id: 4,
        skill: "Lemon.School Java Developer Desember 2021 - May 2021",
      },
    ],
  },
];
