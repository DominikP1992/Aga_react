import ytLogo from "./assets/img/yt.png";
import instLogo from "./assets/img/inst.png";
import fbLogo from "./assets/img/fb.png";

const currentLang = "pl";
const translate = {
  pl: {
    About: "O mnie",
    Gallery: "Galeria",
    Records: "Nagrania",
    Calendar: "Kalendarz",
    Blog: "Blog",
    Contact: "Kontakt"
  },
  en: {
    About: "About",
    Gallery: "Gallery",
    Records: "Records",
    Calendar: "Calendar",
    Blog: "Blog",
    Contact: "Contact"
  }
};



export const mobileWidth = 767;  
export const getTranslate = key => translate[currentLang][key];
export const imgSrc = "./src/assets/img/";
export const tabButtons = [
  "About",
  "Gallery",
  "Records",
  "Calendar",
  "Blog",
  "Contact"
];
export const socialMedia = [
  { 
    link:"https://www.instagram.com/",
    alt:"Youtube",
    imgSrc:ytLogo,
  },
  { 
    link:"https://www.youtube.com/",
    alt:"Instagram",
    imgSrc:instLogo,
  },
  { 
    link:"https://www.instagram.com/",
    alt:"Youtube",
    imgSrc:fbLogo,
  },
]

