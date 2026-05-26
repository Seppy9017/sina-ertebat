import styles from "./ServiceCard.module.css"

const ServiceCard = ({ data: { title, description } }) => {
  return (
    <div className={styles.card}>
      <img src="img/taptotop.png" alt="" />
      <h3>دوربین مداربسته</h3>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href=""></a>
    </div>
  );
};
export default ServiceCard;
