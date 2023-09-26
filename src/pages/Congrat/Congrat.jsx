import { useState } from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

import "./Congrat.scss";

const paymentData = [
  {
    title: "Full payment",
    price: "#570,000",
    type: "(Make full payment)",
    button: "Pay Now In Full",
  },
  {
    title: "Pay 40% upfront",
    price: "#228,000",
    type: "",
    button: "Pay Now In Full",
  },
];

const Congrat = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="sectionCongrat">
      <div className="payments">
        <div className="congratContainer">
          <h2>CONGRATULATIONS!!!</h2>
          <p>Your application has been successfully submitted.</p>
          <button onClick={() => setToggle(true)}>Proceed to Payment</button>
        </div>
        {toggle && (
          <motion.div
            whileInView={{ x: [260, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="paymentsOptions"
          >
            <div className="closeIcon">
              <GrClose onClick={() => setToggle(false)} />
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
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <small>{item.type}</small>
                    <button>{item.button}</button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Congrat;
