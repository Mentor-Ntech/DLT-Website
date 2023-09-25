import "./Congrat.scss";

const Congrat = () => {
  return (
    <div className="sectionCongrat">
      <h2>CONGRATULATIONS!!!</h2>
      <p>
      Your application has been successfully submitted.
      </p>
      <button>
        <a href="/payments">Proceed to Payment</a>
      </button>
    </div>
  );
};

export default Congrat;
