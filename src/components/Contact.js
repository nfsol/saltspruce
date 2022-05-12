import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import phoneFilled from "@iconify/icons-carbon/phone-filled";
import emailIcon from "@iconify/icons-carbon/email";
const Contact = () => {
  //-------------------------------------------------------------------
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [contactSent, setContactSent] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_FORM_NAME,
        process.env.REACT_APP_FORM_TEMPLATE,
        formState,
        process.env.REACT_APP_MAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //-----------------------------------------------------------------------
  return (
    <div id="contact">
      <form className="contactForm">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input
            id="name"
            placeholder="What should we call you?"
            onChange={handleChange}
          ></input>
        </p>
        <p type="Phone:">
          <input
            id="phone"
            placeholder="Mobile or Landline"
            onChange={handleChange}
          ></input>
        </p>
        <p type="Email:">
          <input
            id="email"
            placeholder="Let us know how to contact you back.."
            onChange={handleChange}
          ></input>
        </p>
        <p type="Message:">
          <input
            id="message"
            placeholder="What would you like to talk about?"
            onChange={handleChange}
          ></input>
        </p>
        <button onClick={sendEmail}>Send Message</button>
        <div>
          <span>
            <Icon icon={phoneFilled} inline={true} />
            Protected
          </span>
          <span>
            <Icon icon={emailIcon} inline={true} /> contact@saltspruce.com
          </span>
        </div>
      </form>
    </div>
  );
};

export default Contact;
