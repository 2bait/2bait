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
    "Hi, I'm Borut Ajdič, a Creative and Full Stack Developer based in Slovenia.",
    "I bring a strong blend of creativity and technical expertise, with proven experience across a wide range of technologies, as well as in management and communication. Over the years, I’ve developed a problem-solving mindset focused on delivering efficient, scalable, and high-quality solutions.",
    "I specialize in the digital transformation of manufacturing processes and have hands-on experience with several widely recognized ERP systems. I’m particularly driven by building solutions that are not only technically sound but also create long-term value through trust, collaboration, and mutual benefit.",
    "I have a strong interest in artificial intelligence and machine learning, and I continuously explore ways to apply these technologies in real-world scenarios.",
    "Outside of work, I’m a proud father of a daughter and a son, a music enthusiast who enjoys playing the piano and guitar, and a lifelong learner with a passion for self-improvement."
  ],
  location: {
    address: "Rimska cesta 19E",
    postalCode: "8210",
    city: "Trebnje",
    countryCode: "Slovenia",
    region: "Dolenjska"
  },
  social: [{
    network: "Github",
    display: "github.com/2bait",
    url: "https://github.com/2bait",
  },{
    network: "Email",
    display: "borut.ajdic@gmail.com",
    url: "mailto:borut.ajdic@gmail.com",
  },{
    network: "LinkedIn",
    display: "borutajdic",
    url: "https://www.linkedin.com/in/borutajdic"
  }]
};

export default about;