import { useState } from "react";
import styles from "./Login.module.css";
import ShowAlert from "./ShowAlert";

let loggedIn = false;
const text = "Seppy12345";
const LowerCaseTest = /[a-z_]/;
const UpperCaseTest = /[A-Z_]/;
const NumberTest = /[0-9_]/;
const LengthTest = /[a-zA-Z0-9]{8,16}/;

const passTest = (txt) => {
  return (
    LowerCaseTest.test(txt) &&
    UpperCaseTest.test(txt) &&
    NumberTest.test(txt) &&
    LengthTest.test(txt)
  );
};

const Login = ({ login, setLogin }) => {
  if (localStorage.getItem("password")) {
    location.assign("/index.html");
  }
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLogggedIn] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (passTest(data.password)) {
      localStorage.setItem("password", data.password);
    } else return;
    localStorage.setItem("username", data.username);
    setLogin(true);

    setTimeout(() => location.assign("/index.html"), 2000);
  };
  return (
    <>
      <form className={styles.container}>
        <h1>ورود</h1>

        <div
          className={`${styles.inputBox} ${!passTest(data.password) && data.password && styles.error}`}
        >
          <input
            type="text"
            name="username"
            placeholder=" "
            required
            onChange={changeHandler}
            value={data.username}
          />
          <label>نام کاربری</label>
        </div>

        <div
          className={`${styles.inputBox} ${
            !passTest(data.password) && data.password && styles.error
          }`}
        >
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder=" "
            required
            onChange={changeHandler}
            value={data.password}
          />
          <label>رمز عبور</label>
          <span
            className={styles.eye}
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? "🔒" : "👁️"}
          </span>
        </div>

        <button onClick={SubmitHandler}>Login</button>
        <p className={styles.toSign}>
          تا کنون ثبت نام نکرده اید؟
          <a href="/sign.html"> ثبت نام </a>
        </p>
      </form>
    </>
  );
};
export default Login;
