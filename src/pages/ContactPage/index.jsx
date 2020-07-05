import React from "react";
//import "./ContactPage.css";
import "../Styles.css";

const ContactPage = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Contact us</h1>
      </div>
      <div className="form">
        <form>
          <label htmlFor="fname">*Your name: </label>
          <br />
          <input id="name" label="name" type="text" required />
          <br />
          <label htmlFor="email">*Your email: </label>
          <br />
          <input id="email" label="Your email:" type="email" required />
          <br />
          <label htmlFor="comment">*Your Comment: </label>
          <br />
          <textarea
            rows="4"
            cols="26"
            name="comment"
            id="comment"
            required
          ></textarea>
          <br />
          <button
            input="submit"
            type="submit"
            className="btn"
            disabled={!onFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
