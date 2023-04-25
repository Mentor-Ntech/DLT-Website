import { useState } from "react";
import { client } from "../../apis/client";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setIsLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        if (!err.res) {
          setErrMsg("Network error: check your internet connection");
        } else {
          setErrMsg("Sending error: " + err.message);
        }
      });
  };

  return (
    <section className="joinUs container contact">
      <div className="headerText">
        <h2>Contact</h2>
        <small className="pText">
          Looking to get more information about DLT? Send us a direct message.
        </small>
      </div>

      {!success ? (
        <div className="formContainer contactForm">
          <form onSubmit={handleSubmit}>
            <article id="inputCon">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  id="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
            </article>
            <div className="btnCon">
              <button className="genBtn">
                {isLoading ? "Loading..." : "Send"}
              </button>
            </div>
          </form>

          <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
        </div>
      ) : (
        <div className="formContainer" id="successMessage">
          <h2>
            Thank you for your feedback. <br /> Our team will take time to
            review your message.
          </h2>
          <p className="pText" style={{ marginTop: 20 }}>
            <a href="/" style={{ textDecoration: "none", color: "red" }}>
              Go to homepage
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
