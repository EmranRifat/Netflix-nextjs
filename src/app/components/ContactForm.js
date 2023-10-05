'use client'
import styles from "@/app/contact/contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({...prevUser, [name] : value}));

  };



  const handleSubmit =async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch('', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        

    }catch (e) {
        console.log(e)
    }

  };


  return (
    <>
        <div>
      <form onSubmit={handleSubmit} className={styles.contact_form}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Enter your name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              value={user.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              value={user.phone}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your Message"
              value={user.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div>
          {<p className={styles.success_msg}>Thank you for your message!</p>}
          {
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          }

          <button type="submit">Send Message</button>
        </div>
      </form>
      
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700322531768!2d90.34355871340178!3d23.794581992068252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1696487262753!5m2!1sen!2sbd" width={900}
        height={350 } style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
      </div>
    </div>
    
    </>
  );
};

export default ContactForm;
