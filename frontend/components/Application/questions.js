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
