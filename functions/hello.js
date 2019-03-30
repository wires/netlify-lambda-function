export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ads ${Math.floor(Math.random() * 10)}` })
  };
}
