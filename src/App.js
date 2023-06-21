import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Page from "./pages/page";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "This is the home page";
        break;
      case "/page":
        title = "Page";
        metaDescription = "This is a special page";
        break;
      default:
        title = "Default Title";
        metaDescription = "Default Description";
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );

    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
