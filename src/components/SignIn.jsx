import { useState } from "react";
import styles from "./Login.module.css";
import ShowAlert from "./ShowAlert";

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

const SignIn = ({ login, setLogin }) => {
  const [showPass, setShowPass] = useState(false);

  if (
    localStorage.getItem("password") &&
    localStorage.getItem("password") &&
    localStorage.getItem("phone")
  ) {
    location.assign("/index.html");
  }
  const [data, setData] = useState({
    username: "",
    password: "",
    phone: "",
  });
  const phoneTest = () => {
    +data.phone[0] === 0 && +data.phone[1] === 9 && data.phone.length === 11;
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (passTest(data.password) && phoneTest && data.username) {
      localStorage.setItem("phone", +data.phone);
      localStorage.setItem("password", data.password);
      localStorage.setItem("username", data.username);
    } else {
      return;
    }
    setLogin(true);
    setTimeout(() => location.assign("/"), 1000);
  };
  return (
    <>
      <form className={styles.container}>
        <h1>ثبت نام </h1>

        <div className={`${styles.inputBox} }`}>
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

        <div className={`${styles.inputBox} `}>
          <input
            type="text"
            name="phone"
            placeholder=" "
            required
            onChange={changeHandler}
            value={data.phone}
          />
          <label>شماره تلفن</label>
        </div>

        <div
          className={`${styles.inputBox} ${
            !passTest(data.password) && DataTransfer.password && styles.error
          }`}
        >
          {/* <p style={{ display: "none" }} id="passAlert">
            Invalid
          </p> */}
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder=" "
            required
            onChange={changeHandler}
            value={data.password}
          />
          <label id="passAlert">رمز عبور</label>
          <span
            className={styles.eye}
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? "🔒" : "👁️"}
          </span>
        </div>

        <button onClick={SubmitHandler}>Login</button>
        <p className={styles.toSign}>
          ثبت نام کرده اید؟
          <a href="/login.html"> ورود </a>
        </p>
      </form>
      {/* <a href="#" id="toTopBox">
        <img src="/img/taptotop.png" alt="" id="toTop"/>
      </a> */}
    </>
  );
};
export default SignIn;
