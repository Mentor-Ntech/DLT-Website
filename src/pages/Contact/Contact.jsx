import { useState } from "react";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setSuccess(true);
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
        <div className="formContainer">
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
                {isLoading ? "Loading" : "Send"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="formContainer">
        <h2 style={{ color: "#333934" }}>
          Thank you for your feedback. <br /> Our team will take time to
          review your message.
          </h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
