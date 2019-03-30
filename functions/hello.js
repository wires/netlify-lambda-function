let R = require('ramda')

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ads ${R.add(2, Math.floor(Math.random() * 10))}` })
  };
}