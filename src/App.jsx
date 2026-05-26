import { useEffect, useState } from "react";

import Products from "./components/Products";
import Login from "./components/Login";
import Layout from "./Layouts/Layout";
import SignIn from "./components/SignIn";
import About from "./components/About";
// import Poster from "./components/Poster";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

const URL = document.location.pathname;

const App = () => {
  const [login, setLogin] = useState(false);

  if (URL === "/shop.html") {
    return (
      <Layout login={login} setLogin={setLogin}>
        <Products />
      </Layout>
    );
  } else if (URL === "/login.html") {
    return <Login login={login} setLogin={setLogin} />;
  } else if (URL === "/sign.html") {
    return <SignIn login={login} setLogin={setLogin} />;
  } else if (URL === "/about.html") {
    return (
      <Layout login={login} setLogin={setLogin}>
        <About />
      </Layout>
    );
  } else if (URL === "/service.html") {
    return (
      <Layout login={login} setLogin={setLogin}>
        <Services />
      </Layout>
    );
  } else if (URL === "/contact.html") {
    return (
      <Layout login={login} setLogin={setLogin}>
        <ContactUs />
      </Layout>
    );
  } else {
    return (
      <Layout login={login} setLogin={setLogin}>
        <About />
        <Services />
      </Layout>
    );
  }
};

export default App;
