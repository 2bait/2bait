import { Resume } from "./types";

const resume: Resume = {
  name: "Borut Ajdič",
  image: "/avatar.png",
  title: "Senior Front-End Engineer",
  about: {
    firstName: "Borut",
    middleName: "",
    lastName: "Ajdič",
    label: "Senior Front-End Engineer",
    skype: "",
    picture: "",
    email: "borut.ajdic@gmail.com",
    phone: "+386 40 415 656",
    organization: "2bait",
    website: "https://www.2bait.si",
    summary: [
      "15+ years building accessible, responsive web applications with React and TypeScript.",
      "Strong collaborator with experience in design systems, performance tuning and developer workflows.",
      "Delivered polished user experiences for SaaS, publishing and enterprise products."
    ],
    location: {
      address: "Trg republike 3",
      postalCode: "1000",
      city: "Ljubljana",
      countryCode: "SI",
      region: "Slovenia"
    },
    social: [
      {
        network: "Github",
        display: "borutajdic",
        url: "https://github.com/borutajdic",
      },
      {
        network: "Email",
        display: "borut.ajdic@gmail.com",
        url: "mailto:borut.ajdic@gmail.com",
      },
      {
        network: "LinkedIn",
        display: "borut-ajdic",
        url: "https://linkedin.com/in/borut-ajdic",
      }
    ]
  },

  experiences: [
    {
      company: "2bait",
      position: "Senior Front-End Engineer",
      website: "https://www.2bait.si",
      startDate: "Aug 2020",
      endDate: "Present",
      summary: "Leading frontend architecture and design systems for customer-facing applications.",
      highlights: {
        type: "list",
        items: [
          "Architected a reusable React component library that reduced launch time for new products by 30%.",
          "Improved site performance by 40% through code splitting, image optimization and caching improvements.",
          "Mentored junior engineers and introduced accessibility audits across the frontend team."
        ]
      },
    },
    {
      company: "WebPraktikos Inc.",
      position: "Front-End Developer",
      website: "https://www.webpraktikos.com",
      startDate: "Jun 2018",
      endDate: "Jul 2020",
      summary: "Built responsive marketing sites and interactive dashboards for startup and agency clients.",
      highlights: {
        type: "list",
        items: [
          "Delivered pixel-perfect UIs with modern CSS layout techniques and animation patterns.",
          "Integrated REST and GraphQL APIs into performant single-page applications.",
          "Created reusable UI utilities that reduced duplicated work across projects."
        ]
      },
    },
    {
      company: "Exquisite Systems d.o.o.",
      position: "Software QA Specialist",
      website: "",
      startDate: "May 2015",
      endDate: "Dec 2016",
      summary: "Managed quality assurance for web and mobile software releases.",
      highlights: {
        type: "list",
        items: [
          "Designed test plans and coordinated regression testing across development teams.",
          "Improved release quality with automated acceptance checks and usability reviews."
        ]
      },
    }
  ],

  education: [
    {
      institution: "Ozyegin University",
      area: "Bachelor's in Computer Science",
      studyType: "Full-time",
      gpa: "3.27 / 4.0",
      startDate: "Sep 2011",
      endDate: "Jun 2015",
      summary: "Focused on software engineering, web technologies and interactive systems.",
      courses: [
        "Algorithm design and data structures",
        "Web development and user interfaces",
        "Software quality assurance and testing"
      ],
    }
  ],

  projects: [
    {
      title: "Universal Resume",
      titleHref: "https://github.com/WebPraktikos/universal-resume",
      description: "A clean, customizable resume generator built with HTML and CSS.",
      body: [
        {
          type: "paragraph",
          items: [
            "An open-source resume template focused on readability, responsive layout and easy customization."
          ],
        }
      ],
    },
    {
      title: "tailwindcss-rich-docs",
      titleHref: "https://github.com/WebPraktikos/tailwindcss-rich-docs",
      description: "Documentation site generator using Tailwind CSS.",
      body: [
        {
          type: "paragraph",
          items: [
            "Created a maintainable docs experience with searchable content, rich layout support and responsive design."
          ],
        }
      ],
    }
  ],

  publications: [],

  skills: [
    {
      title: "Front-End Engineering",
      description: "Building performant, accessible web interfaces with modern JavaScript frameworks.",
      skillDetails: [
        {
          name: "React",
          level: "Expert",
          keywords: ["TypeScript", "Hooks", "Context", "Suspense"]
        },
        {
          name: "HTML & CSS",
          level: "Expert",
          keywords: ["Flexbox", "Grid", "Responsive design", "Animations"]
        }
      ]
    },
    {
      title: "Tooling & Collaboration",
      description: "Improving developer workflows and delivering high-quality products.",
      skillDetails: [
        {
          name: "Tooling",
          level: "Advanced",
          keywords: ["Webpack", "Vite", "ESLint", "Prettier"]
        },
        {
          name: "Collaboration",
          level: "Advanced",
          keywords: ["Agile", "Code reviews", "Pair programming", "Design systems"]
        }
      ]
    }
  ]
};

export default resume;