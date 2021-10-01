import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51Je6k4JbatC0w8tZzaF2lIJ6tAFzpNW0lWzpXB6IsbLk4XfEZhts8ndtv8LJbW1XDno2wN114QzJtTlOl5YmX7hS00L7vacoi0');

const CheckoutButton = ({ id }) => {
  async function handleClick() {
    const stripe = await stripePromise();
    const { error } = await stripe.redirectToCheckout({
      items: [
        { sku: id, quantity: 1}
      ],
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  )
}

export default CheckoutButton;