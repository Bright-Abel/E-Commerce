// .netlify/functions/create_payment_intent
require('dotenv').config();

const stripe = require('stripe')(import.meta.env.VITE_KEY_STRIPE_SECRET_KEY);

export async function handler(event, context) {
  if (event.body) {
    const { total_amount, shipping_fee } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),

        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
}
