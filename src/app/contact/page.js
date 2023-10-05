import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "@/app/contact/contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1>..contact us.. </h1>
      <ContactCard></ContactCard>

      <section className={styles.contact_section}>
        <h2>
          We love to hear <span> from you </span>
        </h2>

        <ContactForm />
      </section>
    </div>
  );
};

export default contact;
