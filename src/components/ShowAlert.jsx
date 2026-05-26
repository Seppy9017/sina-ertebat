import styles from "./Login.module.css";
const ShowAlert = ({ name, alert }) => {
  return (
    <div id={styles.alertContainer}>
      <p id={styles.alert} className={styles[name]}>
        {alert}
      </p>
    </div>
  );
};
export default ShowAlert;
