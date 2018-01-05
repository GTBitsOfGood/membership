export const programmingLanguages = [
  "Python",
  "C",
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "PHP",
  "Go",
  "Swift/Objective-C",
  "Scala",
  "Ruby",
  "Web Assembly"
];

export const webTechnologies = [
  "HTML",
  "CSS",
  "React",
  "Node/Express",
  "Angular",
  "Vue",
  "Larvel/Symfony",
  "Ruby on Rails",
  "ASP.NET",
  "Django",
  "Flask",
  "Meteor",
  "Ember",
  "Backbone",
  "Wordpress"
];

export const databases = [
  "MySQL",
  "SQLite",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "Oracle SQL"
];

export const deployment = [
  "Google Cloud",
  "Nginx",
  "Apache",
  "Kubernetes",
  "Docker",
  "Heroku",
  "Azure",
  "AWS"
];
v
export const frontEndFamiliarity = [
  'Never worked with it',
  'A little experience',
  'Some experience',
  'A lot of experience',
  'Can teach it'
];

export const backEndFamiliarity = [
  'Never worked with it',
  'A little experience',
  'Some experience',
  'A lot of experience',
  'Can teach it'
];

export const graduation_dates = () => {
  let year = new Date().getFullYear();
  const dates = [];
  for (let i = 0; i < 6; i++) {
    dates.push(`Fall ${year}`);
    dates.push(`Spring ${++year}`);
  }
  const month = new Date().getMonth() + 1;
  const isSpringSemester = (month < 5) || (month > 10);
  return isSpringSemester ? dates.slice(1) : dates;
};
