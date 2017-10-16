const currentLang = 'pl';
const translate = {
    pl: {
        About:"O mnie",
        Gallery: "Galeria",
        Records: "Nagrania",
        Calendar: "Kalendarz",
        Blog: "Blog",
        Contact: "Kontakt"
    },
    en: {
        About:"About",
        Gallery: "Gallery",
        Records: "Records",
        Calendar: "Calendar",
        Blog: "Blog",
        Contact: "Contact"
    },
}


const mobileWidth = 768;

const mobile = window.matchMedia("screen and (max-width:768px)");
mobile.addListener(function(mobile){
    if(mobile.matches){
        console.log("ponizej")
    }
    else{
        console.log("powyzej");
    }
})



export const getTranslate = key => translate[currentLang][key];
export const isMobile = () => window.screen.width <= mobileWidth;
export const imgSrc = "./src/assets/img/";
export const tabButtons = ['About','Gallery','Records',"Calendar",'Blog','Contact'];
