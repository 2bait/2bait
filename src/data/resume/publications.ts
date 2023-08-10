import { ResumePublication } from "../types";

const publications: ResumePublication[] = [
  {
    title:
      "Human Tasks in Executable Business Processes based on WS-BPEL Extension for People",
    titleHref:
      "https://repozitorij.uni-lj.si/IzpisGradiva.php?id=72843",
    description: "2015 | Bachelor's Thesis",
    body: [
      {
        type: "paragraph",
        items: [
          "We described the ",
          {
            type: "link",
            text: "BPEL4People",
            href: "https://en.wikipedia.org/wiki/Business_Process_Execution_Language#BPEL4People",
          },
          "formal language to support user interactions and the WS-HumanTask specification for an abstract description of the human task."
        ],
      }
    ],
  }
];

export default publications;