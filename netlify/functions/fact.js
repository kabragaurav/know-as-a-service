const fs = require('fs');

const facts = JSON.parse(fs.readFileSync(`${__dirname}/../../facts.json`, 'utf-8'));

exports.handler = async function(event, context) {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fact })
  };
};
