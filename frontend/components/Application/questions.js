export const programmingLanguages = [
  'Python',
  'C',
  'Java',
  'C++',
  'C#',
  'JavaScript',
  'PHP',
  'Go',
  'Swift/Objective-C',
  'Scala',
  'Ruby',
  'Web Assembly'
];

export const webTechnologies = [
  'HTML',
  'CSS',
  'React',
  'Node/Express',
  'Angular',
  'Vue',
  'Larvel/Symfony',
  'Ruby on Rails',
  'ASP.NET',
  'Django',
  'Flask',
  'Meteor',
  'Ember',
  'Backbone',
  'Wordpress'
];

export const databases = [
  {
    _id: '5a505e6ef13f039b8fda0f36',
    updatedAt: '2018-01-06T05:28:14.969Z',
    createdAt: '2018-01-06T05:28:14.969Z',
    category: 'databases',
    value: 1,
    name: 'C#',
    __v: 0
  },
  {
    _id: '5a505e6ff13f039b8fda0f3b',
    updatedAt: '2018-01-06T05:28:15.250Z',
    createdAt: '2018-01-06T05:28:15.250Z',
    category: 'databases',
    value: 1,
    name: 'Scala',
    __v: 0
  }
];
export const databasesOld = [
  'MySQL',
  'SQLite',
  'MongoDB',
  'Redis',
  'PostgreSQL',
  'Oracle SQL',
  'Cassandra',
  'MariaDB',
  'CouchDB',
  'Neo4j',
  'Elasticsearch',
  'Amazon SimpleDB',
  'Firebase',
  'Apache Spark',
  'Hadoop',
  'CockroachDB'
];

export const deployment = [
  'Google Cloud',
  'Nginx',
  'Apache',
  'Kubernetes',
  'Docker',
  'Heroku',
  'Azure',
  'AWS'
];

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
  dates.push(`Spring ${year}`);
  for (let i = 0; i < 6; i++) {
    dates.push(`Fall ${year}`);
    dates.push(`Spring ${++year}`);
  }
  const month = new Date().getMonth() + 1;
  const isSpringSemester = month < 5 || month > 10;
  return isSpringSemester ? dates.slice(1) : dates;
};
