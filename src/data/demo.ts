import { Resume } from "./types";

const resume: Resume = {
  name: "Borut Ajdič",
  image: "/avatar.png",
  title: "Senior Front-End Engineer",
  about: {
    firstName: "Borut",
    middleName: "",
    lastName: "Ajdič",
    label: "",
    skype: "",
    picture: "",
    email: "borut.ajdic@gmail.com",
    phone: "+386 40 415 656",
    organization: "2bait",
    website: "https://www.2bait.si",
    summary: [],
    location: {
      address: "",
      postalCode: "",
      city: "",
      countryCode: "",
      region: ""
    },
    profiles: [
      {
        network: "Github",
        username: "borutajdic",
        url: "",
      }, {
        network: "Email",
        username: "borutajdic",
        url: "mailto:borut.ajdic@gmail.com",
      }, {
        network: "LinkedIn",
        username: "borutajdic",
        url: ""
      }
    ]
  },

  experiences: [
    {
      company: "WebPraktikos Inc.",
      position: "Web Developer",
      website: "",
      startDate: "Jun 2018",
      endDate: "Present",
      summary: "",
      highlights: {
        type: "list",
        items:
          [
            "Built doner pork chop • Served salmon, cream soft cheese, and brisket • Acted 55% pork chop • Filled burgdoggen &amp; frankfurter strip steak with 90% burger patties and broth",
          ]
      },
    },
    {
      company: "Mammoth GmbH",
      position: "Android Developer",
      website: "",
      startDate: "Feb 2017",
      endDate: "Apr 2018",
      summary: "",
      highlights: {
        type: "list",
        items: [
          "Cooked shrimps for 2 to 3 minutes per side, or until opaque then, transfered to a serving dish with limon",
          "Roasted a pig, turning frequently, until meat reached 160°F in the thickest part of the shoulder or thigh",
        ]
      },
    },
    {
      company: "Exquisite Systems d.o.o.",
      position: "Software QA Specialist",
      website: "",
      startDate: "May 2015",
      endDate: "Dec 2016",
      summary: "",
      highlights: {
        type: "list",
        items: [
          "Made stockfish, which is unsalted fish, usully cod, dried by cold air and wind on wooden racks on the foreshore",
          "Preserved meat without salt by removing fat, cutting it into very thin strips and drying it in the sun or by a fire.",
        ]
      },
    }
  ],

  education: [
    {
      institution: "Ozyegin University",
      area: "Bachelor's in Computer Science",
      studyType: "",
      gpa: "",
      startDate: "Sep 2011",
      endDate: "Jun 2015",
      summary: "",
      courses: [
        "100% scholarship received from significant achievement obtained on Computer Games Workshop 3, and graduated with a GPA of 3.27 on a 4.0 scale and an honor certificate",
      ],
    }
  ],

  projects: [
    {
      title: "Universal Resume",
      titleHref: "https://github.com/WebPraktikos/universal-resume",
      description: "Since 2019 | HTML CSS",
      body: [
        {
          type: "paragraph",
          items: [
            "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials.",
          ],
        },
      ],
    },
    {
      title: "tailwindcss-rich-docs",
      titleHref: "https://github.com/WebPraktikos/tailwindcss-rich-docs",
      description: "2017 | JavaScript",
      body: [
        {
          type: "paragraph",
          items: [
            "Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated.",
            { type: "newline" },
            "Good design is honest. It does not make a product more innovative, powerful or valuable than it really is.",
          ],
        },
      ],
    },
    {
      title: "Third One",
      description: "2013 - 2014 | Vue",
      body: [
        {
          type: "paragraph",
          items: [
            "Good design is innovative. Technological development is always offering new opportunities for innovative design.",
          ],
        },
      ],
    },
    {
      title: "Fantastic Project",
      description: "2012 | JavaScript",
      body: [
        {
          type: "paragraph",
          items: [
            "Strip steak tail capicola alcatra ground round tenderloin ar. Venison tri-tip porchetta, brisket tenderloin pig beef.",
          ],
        },
      ],
    },
  ],
  publications: [],
  skills: [
    {
      "title": "<DESCRIPTION_TITLE>",
      "description": [
        "<DESCRIPTION_1>",
        "<DESCRIPTION_2>",
        "<DESCRIPTION_3>"
      ],
      "skillDetails": [
        {
          "name": "<SKILL_NAME>",
          "level": "<SKILL_LEVEL>",
          "keywords": [
            "<KEYWORD_1>",
            "<KEYWORD_2>",
            "<KEYWORD_3>"
          ]
        }
      ]
    },
    {
      "title": "<DESCRIPTION_TITLE>",
      "description": [
        "<DESCRIPTION_1>",
        "<DESCRIPTION_2>",
        "<DESCRIPTION_3>"
      ],
      "skillDetails": [
        {
          "name": "<SKILL_NAME>",
          "level": "<SKILL_LEVEL>",
          "keywords": [
            "<KEYWORD_1>",
            "<KEYWORD_2>",
            "<KEYWORD_3>"
          ]
        }
      ]
    }
  ]
};

export default resume;