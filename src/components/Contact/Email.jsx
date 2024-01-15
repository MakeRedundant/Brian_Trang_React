import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
// import Me from "../assets/img/Me.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Email.css";

import emailjs from "emailjs-com";
//emailjs is a library for sending emails using JavaScript.
import Swal from "sweetalert2";

import { validateEmail } from "../utils/Email Validate/helpers";

//EmailJS
///Constant that stores the required IDs for sending emails via the EmailJS Service
const TEMPLATE_ID = "template_4aipo27";
const USER_ID = "dNo7JEuizWBnqYSMg";
const SERVICE_ID = "service_lv2pvc8";

// !!!!!Refer to this !!!!!!!!!!!!
//https://plainenglish.io/blog/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3

export default function Email() {
  // Define states

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [submission, setSubmission] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState({ message: "", success: null });

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (inputValue === "") {
        return setErrorMessage("cannot be empty"), setEmail("");
      } else {
        setEmail(inputValue);
      }
    }
    if (inputType === "name") {
      if (inputValue === "") {
        return setErrorMessage("Please include your name"), setName("");
      } else {
        setName(inputValue);
      }
    }
    if (inputType === "phone") {
      // Update phone state
      setPhone(inputValue);
    }
    if (inputType === "message") {
      if (inputValue === "") {
        return (
          setErrorMessage("Please include a message, thanks"), setMessage("")
        );
      } else {
        setMessage(inputValue);
      }
    }
    setErrorMessage("");
    setSubmission("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(email)) {
      setStatus({
        message: "Error! Email is invalid, please try again",
        success: false,
      });
      return;
    }

    // Simulate sending email
    setButtonText("Sending...");
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });
      //Alerts user after successful message sent
      setSubmission(`Thanks for your email ${name}. I'll be in contact 👍`);

      setName("");
      setMessage("");
      setPhone("");
      setErrorMessage("");
      setEmail("");
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      });
    } finally {
      // Reset button text regardless of success or failure
      setButtonText("Submit");
    }
  };

  const checkName = (event) => {
    console.log(event.target.value);
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue.length < 1) {
      setErrorMessage(`${inputType} cannot be empty`);
    }
  };

  return (
    <section className="contact" id="email">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <h3>{submission}</h3>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={name}
                          placeholder="Name"
                          onBlur={checkName}
                          onChange={(e) => handleInputChange(e)}
                          name="name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={email}
                          placeholder="Email Address"
                          onBlur={checkName}
                          onChange={(e) => handleInputChange(e)}
                          name="email"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={phone}
                          placeholder="Phone #"
                          onChange={(e) => handleInputChange(e)}
                          name="phone"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <textarea
                          rows="6"
                          value={message}
                          placeholder="Message"
                          onBlur={checkName}
                          onChange={(e) => handleInputChange(e)}
                          name="message"
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {(status.message || errorMessage) && (
                        <Col>
                          <p
                            className={
                              status.success === false || errorMessage
                                ? "danger"
                                : "success"
                            }
                          >
                            {status.message || errorMessage}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}