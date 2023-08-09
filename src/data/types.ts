export type Renderable =
  | string
  | Paragraph
  | List
  | Pills
  | NewLine
  | Important
  | Link;

export type Paragraph = { type: "paragraph"; items: Renderable[] };
export type List = { type: "list"; items: Renderable[] };
export type Pills = { type: "pills"; items: string[] };
export type NewLine = { type: "newline" };
export type Important = { type: "important"; text: string };
export type BulletPoints = string[];

export type Link = {
  type: "link";
  inline?: boolean;
  text: string;
  href: string;
};

export type Location = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
};

export type Profile = {
  network: string;
  username: string;
  url: string;
};

export type ResumeAbout = {
  firstName: string;
  lastName: string;
  middleName: string;
  organization: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  skype: string;
  website: string;
  summary: BulletPoints;
  location: Location;
  profiles: Profile[];
};

export type ResumeExperiences = {
  company: string;
  position?: string;
  website?: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights?: List;
};

export type ResumeEducation = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  summary: string;
  courses: BulletPoints;
};


export type ResumePublication = {
  title?: string;
  titleHref?: string;
  description?: string;
  body?: Renderable[]
};

export type ResumeSkillDetail = {
  name: string;
  level: string;
  keywords: BulletPoints;
};

export type ResumeSkill = {
  title: string;
  description: BulletPoints;
  skillDetails: ResumeSkillDetail[];
};

export type ResumeProject = {
  title?: string;
  titleHref?: string;
  description?: string;
  body?: Renderable[];
};

export type Resume = {
  name: string;
  image: string;
  title: string;
  about: ResumeAbout;
  education: ResumeEducation[];
  experiences: ResumeExperiences[];
  projects: ResumeProject[];
  publications: ResumePublication[];
  skills: ResumeSkill[];
};