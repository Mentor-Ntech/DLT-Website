import { useState } from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import "./Congrat.scss";

const paymentData = [
  {
    title: "Full payment",
    fullstack: { name: "Full Stack ", price: "- #570,000" },
    frontend: { name: "FrontEnd ", price: "- #370,000" },
    productDesign: { name: "Product Design ", price: "- #150,000" },
    button: "Pay Now In Full",
  },
  {
    title: "Pay 40% upfront",
    fullstack: { name: "Full Stack ", price: "- #228,000" },
    frontend: { name: "FrontEnd ", price: "- #160,000" },
    productDesign: { name: "Product Design ", price: "- #80,000" },
    button: "Pay 40% now",
  },
];

const Congrat = () => {
  const [pay, setPay] = useState(false);
  const [payLater, setPayLater] = useState(false);

  return (
    <section className="sectionCongrat">
      <div className="payments">
        <div className="congratContainer">
          <h2>CONGRATULATIONS!!!</h2>
          <p>Your application has been successfully submitted.</p>
          <button
            onClick={() => {
              setPay(true);
              setPayLater(false);
            }}
          >
            Proceed to Payment
          </button>
          <button
            className="payLaterBtn"
            onClick={() => {
              setPayLater(true);
              setPay(false);
            }}
          >
            Pay Later
          </button>
        </div>
        {pay && (
          <motion.div
            whileInView={{ x: [260, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="paymentsOptions"
          >
            <div className="closeIcon">
              <GrClose onClick={() => setPay(false)} />
            </div>
            <div className="paymentsOptionsDetails">
              <div className="titles">
                <h3>Choose Course Payment Method</h3>
                <p>
                  Select a payment method and proceed to complete your
                  registration for the Full Stack Course.
                </p>
              </div>
              <div className="paymentsCards">
                {paymentData.map((item, i) => (
                  <div key={i}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.fullstack.name}
                      <span>{item.fullstack.price}</span>
                    </p>
                    <p>
                      {item.frontend.name}
                      <span>{item.frontend.price}</span>
                    </p>
                    <p>
                      {item.productDesign.name}
                      <span>{item.productDesign.price}</span>
                    </p>
                    <button>{item.button}</button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {payLater && (
          <motion.div
            whileInView={{ x: [260, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="paymentsOptions accountDetails"
          >
            <div className="closeIcon">
              <GrClose onClick={() => setPayLater(false)} />
            </div>
            <div className="account">
              <h2>DLT Africa Account Details</h2>
              <p>Account Name: DLT Africa Space Limited</p>
              <p>Account Number: 1709346763</p>
              <p>Bank: Access Bank </p>

              <small>
                Send Proof of payment to this number via Whatsapp:&nbsp;
                <span>
                  <Link to="https://wa.me/2348156509701" target="_blank">
                    +234 815 (650) 9701
                  </Link>
                </span>
              </small>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Congrat;
