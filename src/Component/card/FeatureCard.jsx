const FeatureCard = (props) => (
  <>
    <div className="feature-box">
      <div className="card-icon">
        <img src={props.image} alt={props.imagee} />
      </div>
      <div className="feature-headpage">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  </>
);
export default FeatureCard;
