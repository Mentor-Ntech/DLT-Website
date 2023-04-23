import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container not-found-container">
        <h2>404</h2>
        <h5>Oops! Page Not Found</h5>
        <p>The page you are trying to access doesn't exit</p>

        <div className="sm-div2">
          <h2>
            <a href="/">Back to homepage</a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
