import { ResumeAbout } from "../types";

const about: ResumeAbout = {
  firstName: "Borut",
  lastName: "Ajdič",
  middleName:"",
  organization: "2bait",
  label: "??",
  picture: "",
  skype:"",
  email: "borut.ajdic@gmail.com",
  phone: "+386 40 415 656",
  website: "https://www.2bait.si",
  summary: [
    "Hi, my name is Borut Ajdič I'm a Creative / Full Stack Developer from Slovenia. Over the years I developed strong creative and problem solving skills set in a range of technologies, management and communication.",
    "Where I really value mutual trust, respect, mutually beneficial, high-quality and long-lasting solutions. Specialized in digital transformation of manufacturing processes and familiar with several widely recognized ERP solutions.",
    "Also I'm very passionate about artificial intelligence and machine learning.",
    "And last but not least, I am the proud father of daughter and son. I enjoy playing piano, guitar and I'm a little bit of a geek in self-improvement."
  ],
  location: {
    address: "Rimska cesta 19E",
    postalCode: "8210",
    city: "Trebnje",
    countryCode: "Slovenia",
    region: "Dolenjska"
  },
  profiles: [{
    network: "Github",
    username: "borutajdic",
    url: "https://github.com/2bait",
  },{
    network: "Email",
    username: "borutajdic",
    url: "mailto:borut.ajdic@gmail.com",
  },{
    network: "LinkedIn",
    username: "borutajdic",
    url: ""
  }]
};

export default about;