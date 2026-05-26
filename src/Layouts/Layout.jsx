import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, login, setLogin }) => {
  return (
    <>
      <Header login={login} setLogin={setLogin} />
      {children ? children : ""}
      <Footer />
    </>
  );
};
export default Layout;
