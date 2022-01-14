var contentful = require('contentful');

const args = process.argv.slice(2);

const space = String(args[0]);
const accessToken = String(args[1]);
const filterId = String(args[2]);

var client = contentful.createClient({
    space: space,
    accessToken: accessToken,
  });

  client
  .getEntries({
    content_type: 'productRetailerOverride',
    'fields.retailer.sys.id': filterId,
    limit: 1000
  })
  .then(function (entries) {
    entries.items.forEach(function (entry) {
        if(entry.fields.additionalBodyCopy && JSON.stringify(entry.fields.additionalBodyCopy).includes("spotify")){
            console.log(`https://app.contentful.com/spaces/${space}/entries/${entry.sys.id}`);
        }
    });
  });