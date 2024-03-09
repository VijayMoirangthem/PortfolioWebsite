import jobimage from "./icons/job.jpg";
import CDAC from "./icons/CDAC-Logo.jpg";
import BVP from "./icons/BVPP.png";
import NCS from "./icons/NCSK.jpg";
import Vj from "./icons/Vj.jpeg";
import Sid from "./icons/Sid.jpeg";
import Ayush from "./icons/Ayush.jpeg";
import Kelvin from "./icons/Kelvin.jpeg";
import Laksh from "./icons/Laksh.jpeg";
import weatherImage from "./icons/image.jpg";
import netflixImage from "./icons/NetflixClone1.JPG";
import expenseTracker from "./icons/ExpenseTracker.JPG";
import onlineGroceryStore from "./icons/ForgetAboutIt.png";

export const Bio = {
  name: "Vijay Moirangthem",
  roles: ["Full Stack Developer", "Tech Enthusiast", "Programmer"],
  description:
    "As a versatile and motivated individual, I embrace challenges with enthusiasm. Dedicated to learning and delivering quality results, my positive attitude and growth mindset drive me to make impactful contributions and achieve excellence.",
  github: "https://github.com/VijayMoirangthem",
  resume:
    "https://drive.google.com/file/d/1Z4SPyzxqynl_phpi6qWCPAzp2s3UGNZL/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/vjmoirangthem",
  twitter: "https://twitter.com/vjmoirangthem",
  insta: "https://www.instagram.com/vjmoirangthem/",
  telegram: "https://t.me/vjmoirangthem",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C#",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MS SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: jobimage,
    role: "Content Operator",
    company: "Nuntiare Promotions Private Limited [Process: Xiaomi]",
    date: "June 2021 - November 2022",
    desc: "Assist in managing the marketing and advertising promotional campaigns through social media Channels and email campaigns. Management of creators for social media campaigns. Audits video content according to different categories and maintaining the quality, content moderation, text moderation and video moderation of the content on platform.",
    skills: ["SQL", "NoSQL", "HTML", "CSS"],
    doc: "https://github.com/VijayMoirangthem/PortfolioWebsite/blob/main/src/data/Experience%20Letter/VJ_RelievingLetter.png",
  },
];

export const education = [
  {
    id: 0,
    img: CDAC,
    school: "CDAC, Bengaluru",
    date: "September 2023 - Febuary 2024",
    desc: "Currently in PG-DAC at CDAC Bangaluru, I'm hands-on with frontend, backend, databases, and DevOps. This practical approach prepares me for the fast-paced IT world, enhancing my skills in real-world scenarios and emerging technologies for a meaningful contribution.",
    degree: "PG Diploma",
  },
  {
    id: 1,
    img: BVP,
    school: "Bharati Vidyapeeth College Of Engineering, Pune",
    date: "2014 - 2018",
    grade: "8.22 CGPA",
    desc: "Studying Chemical Engineering, I mixed tech with C++, HTML, CSS, JS, MATLAB, and Network Security. This broadened my skills beyond traditional engineering, shaping a versatile approach to problem-solving and a solid foundation for future challenges.",
    degree: "Bachelor of Technology in Chemical Engineering",
  },
  {
    id: 2,
    img: NCS,
    school: "Navy Children School, Kochi",
    date: "2014",
    grade: "74%",
    desc: "High school was a mix of Physics, Chemistry, Bio, Maths, English and Physical Education, molding me into a well-rounded problem-solver. This diverse foundation laid the path for my future academic and professional pursuits.",
    degree: "CBSE(XII), Science: PCMB, English  with Physical Education",
  },
  {
    id: 3,
    img: NCS,
    school: "Navy Children School, Kochi",
    date: "2012",
    grade: "80%",
    desc: "Discovered HTML in 10th grade at Navy Children School, Kochi—my gateway to the exciting world of frontend development. This sparked my tech journey, setting the stage for my love of creating on the web.",
    degree: "CBSE(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "Online Grocery Store",
    date: "December 2023 - Febuary 2024",
    description:
      "The purpose of the Online Grocery Store is to provide a convenient and efficient platform for customers to order groceries and other items from the comfort of their homes or offices. This system aims to offer benefits such as time and money savings, health and safety, and a diverse range of products with discounted offers.",
    image: onlineGroceryStore,
    tags: [
      "Visual Studio",
      "MS SQL",
      "HTML",
      "CSS",
      "JAVA-Script",
      "Google Cloud SQL",
    ],
    category: "cdac project",
    github: "https://github.com/VijayMoirangthem/OnlineGroceryStore",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Vijay Moirangthem",
        img: Vj,
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/VijayMoirangthem",
      },
      {
        name: "Siddant Mahajan",
        img: Sid,
        linkedin: "https://www.linkedin.com/in/siddant-mahajan-62195717a/",
        github: "https://github.com/SiddantMahajan",
      },
      {
        name: "Ayush Kumar Singh",
        img: Ayush,
        linkedin: "https://www.linkedin.com/in/sunny-singh-a2704513a",
        github: "https://github.com/AyushSabyasachi",
      },
      {
        name: "Kelvin Wilson Kuderical",
        img: Kelvin,
        linkedin:
          "https://www.linkedin.com/in/kelvin-wilson-5b4097212/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/kelwills",
      },
      {
        name: "Lakshya Nandan",
        img: Laksh,
        linkedin:
          "https://www.linkedin.com/in/lakshya-nandan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/LakshyaNandan",
      },
    ],
  },
  {
    id: 1,
    title: "React Weather App",
    date: "Oct 2021 - Nov 2021",
    description:
      "The React-based weather app utilizes a third-party API to provide real-time weather information for various cities. Users can access the app to retrieve detailed weather data, including minimum and maximum temperatures, atmospheric pressure, humidity levels, and wind speed, offering a comprehensive overview of current weather conditions in a user-selected city.",
    image: weatherImage,
    tags: ["React Js", "Netlify", "Weather API", "VS code"],
    category: "personal project",
    github: "https://github.com/VijayMoirangthem/ReactWeatherApp",
    webapp: "https://weatherappusingreactjs.netlify.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    date: "Jan 2024",
    description:
      "Explore our Expense Tracker App, a robust Asp.Net Core MVC project showcasing SyncFusion Components. Experience seamless CRUD operations for Categories and Transactions, dynamic grid functionalities, insightful dashboard with charts, and more, all encapsulating the essence of building enterprise applications from the ground up.",
    image: expenseTracker,
    tags: ["Visual Studios", "MS SQL", "Google Cloud SQL"],
    category: "personal project",
    github: "https://github.com/VijayMoirangthem/ExpenseTracker",
    webapp: "https://weatherappusingreactjs.netlify.app/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    date: "Nov 2023 - Nov 2023",
    description: "A Netflix Clone Webpage using only HTML and CSS.",
    image: netflixImage,
    tags: ["HTML", "CSS"],
    category: "personal project",
    github: "https://github.com/VijayMoirangthem/NetflixClone",
    webapp: "https://zippy-arithmetic-feafb1.netlify.app/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "" },
  { year: 2018, text: "" },
  { year: 2019, text: "" },
  { year: 2020, text: "" },
  { year: 2021, text: "" },
];
