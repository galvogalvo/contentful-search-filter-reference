var contentful = require('contentful');

const args = process.argv.slice(2);

const space = String(args[0]);
const accessToken = String(args[1]);

var client = contentful.createClient({
    space: space,
    accessToken: accessToken,
  });

  client
  .getEntries({
    content_type: 'venue',
    limit: 1000,
    skip: 0
  })
  .then(function (entries) {
    entries.items.forEach(function (entry) {
        console.log(`"${entry.fields.name}","${entry.fields.postalCode}","${entry.fields.country}",`);
    });
  });