import { useEffect } from "react";

const Header = ({ login, setLogin }) => {
  useEffect(() => {
    if (localStorage.getItem("password") && localStorage.getItem("username")) {
      setLogin((login = true));
    }
  }, []);

  const URL = document.location.pathname;

  return (
    <header className="ReactHeader">
      <div id="header-box">
        <div id="login-cart-box">
          {login ? (
            <>
              <a href="/login.html" className="header-btn">
                <img src="./img/cart.svg" alt="" className="header-btn-img" />
              </a>
              <a href="/login.html" className="header-btn">
                <img src="./img/person.svg" alt="" className="header-btn-img" />
              </a>
            </>
          ) : (
            <>
              <a href="./login.html" className="loginBtn">
                ورود
              </a>
              <a href="./sign.html" className="loginBtn">
                ثبت نام
              </a>
            </>
          )}
        </div>
        <div className="header-link-box">
          <a
            href="/shop.html"
            id="shop-link"
            className={URL === "/shop.html" ? "active-link" : ""}
          >
            فروشگاه
          </a>
          <a
            href="/contact.html"
            id="contact-link"
            className={URL === "/contact.html" ? "active-link" : ""}
          >
            ارتباط با ما
          </a>
          <a
            href="/service.html"
            id="service-link"
            className={URL === "/service.html" ? "active-link" : ""}
          >
            خدمات
          </a>
          <a
            href="/about.html"
            id="about-link"
            className={URL === "/about.html" ? "active-link" : ""}
          >
            درباره ما
          </a>
          <a
            href="/index.html"
            id="home-link"
            className={
              URL === "/index.html" || URL === "/" ? "active-link" : ""
            }
          >
            خانه
          </a>
        </div>
        <a href="./index.html">
          <img src="img/site-logo.png" alt="" className="logo" />
        </a>
        <img src="img/menu.png" alt="" id="menu-btn" />
      </div>
      {/* <div className="header-link-box">
        <a href="tel:+08134245652">08134245652</a>
      </div>*/}
    </header>
  );
};
export default Header;
