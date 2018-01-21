const json2csv = require('json2csv');

const fs = require('fs');
const User = require('mongoose').model('User');

const fields = [
  'name',
  'email',
  'phone',
  'score',
  'credit_hours',
  'graduation_date',
  'pm_interest',
  'em_interest',
  'github_username',
  'lang',
  'web',
  'db',
  'deploy',
  'frontend_experience',
  'backend_experience',
  'proj',
  'team',
  'bg',
  'other',
  'pref'
];

User.find({ application_status: 'submitted' })
  .populate('languages')
  .populate('databases')
  .populate('web_technologies')
  .populate('deployment')
  .then(data => {
    try {
      const newData = data.map(item => {
        item.github_username = item.github.username;
        item.lang = item.languages.map(i => i.name);
        item.web = item.web_technologies.map(i => i.name);
        item.db = item.databases.map(i => i.name);
        item.deploy = item.deployment.map(i => i.name);
        item.proj = item.free_response.project_experience;
        item.team = item.free_response.team_experience;
        item.bg = item.free_response.bg_interest;
        item.other = item.free_response.other_commitments;
        item.pref = item.free_response.project_preference;
        return item;
      });

      console.log(newData);
      var result = json2csv({ data: newData, fields });

      fs.writeFile('dump.csv', result, function(err) {
        if (err) {
          return console.log(err);
        }

        console.log('The file was saved!');
      });
    } catch (err) {
      // Errors are thrown for bad options, or if the data is empty and no fields are provided.
      // Be sure to provide fields if it is possible that your data array will be empty.
      console.error(err);
    }
  });
