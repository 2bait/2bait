import { Resume } from "./types";

import education from "./resume/education";
import experiences from "./resume/experiences";
import projects from "./resume/projects";
import publications from "./resume/publications";
import skills from "./resume/skills";
import about from "./resume/about";

const resume: Resume = {
  name: "Borut Ajdič",
  image: "/oguz.jpg",
  title: "Senior Front-End Engineer",
  about : about,
  education: education,
  experiences:experiences,
  projects: projects,
  publications: publications,
  skills: skills
};

export default resume;