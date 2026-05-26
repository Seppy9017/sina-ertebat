const Card = ({ title, desc, price, imageSrc, deleteBtn }) => {
  return (
    <div className="card">
      <div id="image-container">
        <img src={imageSrc} alt="" />
      </div>
      <h2> {title}</h2>
      <p>{desc}</p>
      <h4>{price} ريال </h4>
      {deleteBtn}
    </div>
  );
};
export default Card;
