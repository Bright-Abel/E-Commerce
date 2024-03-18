// .netlify/functions/func

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: 'Hello world',
  };
}
