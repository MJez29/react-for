const fs = require('fs');
const path = require('path');

const mainReadmeEnding = 'Click to see full docs <a href="https://github.com/MJez29/react-for/tree/master/docs/README.md#docs">here</a>.';

console.log('Creating README.md');

fs.readFile('base-readme.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    data += mainReadmeEnding;
    fs.writeFile('README.md', data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully created README.md');
      }
    });
  }
});
