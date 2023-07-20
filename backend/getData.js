const fs = require('fs');

const loadFn = () => {
  try {
    const data = fs.readFileSync('data/TestData.json').toString();
    const dataObject = JSON.parse(data);
    return dataObject;
  } catch (error) {
    return [];
  }
};

module.exports = loadFn;
