import ytLogo from "./assets/img/yt.png";
import instLogo from "./assets/img/inst.png";
import fbLogo from "./assets/img/fb.png";

const currentLang = "pl";
const translate = {
  pl: {
    tabs: {
      About: "O mnie",
      Gallery: "Galeria",
      Records: "Nagrania",
      Calendar: "Kalendarz",
      Blog: "Blog",
      Contact: "Kontakt"
    },
    weekdays: {
      sunday: "Niedziela",
      monday: "Poniedziałek",
      tuesday: "Wtorek",
      wednesday: "Środa",
      thursday: "Czwartek",
      friday: "Piątek",
      saturday: "Sobota",
    }

  },
  en: {
    tabs: {
      About: "About",
      Gallery: "Gallery",
      Records: "Records",
      Calendar: "Calendar",
      Blog: "Blog",
      Contact: "Contact"
    },
    weekdays: {
      sunday: "Sunday",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
    }
  }
}



  export const mobileWidth = 767;  
  export const getTranslateTabs = key => translate[currentLang]["tabs"][key];
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
      link: "https://www.instagram.com/",
      alt: "Youtube",
      imgSrc: ytLogo,
    },
    {
      link: "https://www.youtube.com/",
      alt: "Instagram",
      imgSrc: instLogo,
    },
    {
      link: "https://www.instagram.com/",
      alt: "Youtube",
      imgSrc: fbLogo,
    },
  ]

export const time = { timeStart: 14, timeEnd: 21 };

