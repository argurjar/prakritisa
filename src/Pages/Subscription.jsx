import React, { useState } from 'react';
import '../assets/Css/Subscription.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false); 

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the terms and privacy policy before subscribing.");
      return;
    }

    try {
      const response = await axios.post("https://prakritisa.com/api/subscribe", { email });
      toast.success(response.data.message)
      setEmail("");
      setAgreed(false); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed");
    }
  };

  return (
    <div className="subscription-container">
      <h2>STAY UP TO DATE</h2>
      <p>
        Enter your email address to receive updates on new product previews, ad promotions,<br />
        special offers and latest know-how on skincare routines.
      </p>

      <form className="subscription-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
           pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"  title="Please enter a valid email address" 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" >
          SUBSCRIBE
        </button>
      </form>

      <label className="terms">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
        />
        <span>
          By proceeding ahead, I agree and accept Prakritisa Botanicals
          <a href="/privacy-policy"> privacy policy </a> and
          <a href="/terms-and-condition-policy"> terms</a>.
        </span>
      </label>
    </div>
  );
};

export default Subscription;
