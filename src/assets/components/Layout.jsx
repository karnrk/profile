import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Layout = () => {
  const location = useLocation();
  const [isShown, setIsShown] = useState(false);
  // Trigger animation after route change
  useEffect(() => {
    setIsShown(false); // reset
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 100);

    return () => clearTimeout(timer); // cleanup on unmount / route change
  }, [location.pathname]);

  const getSectionId = () => {
    if (location.pathname === "/") return "about";
    if (location.pathname === "/education") return "education";
    if (location.pathname === "/projects") return "projects";
    return "default-section";
  };

  const getSectionClass = () => {
    return `section ${isShown ? "section-shown" : ""} ${
      location.pathname.replace("/", "") || "about"
    }-section`;
  };
  return (
    <>
      <Navigation />
      <div className="layout-navigation-children-wrapper ">
        <div className="layout-slideshow ">
          <section id={getSectionId()} className={getSectionClass()}>
            <div className="scrollable-wrapper scrollbar-decorator section-scrollable">
              <div className="scrollable scrollable-with-plugin">
                <div className="scroll-content">
                  <div className="scrollable-content">
                    <div className="section-content">
                      <div className="section-content-border-decoration section-content-border-decoration-top-left"></div>
                      <div className="section-content-elements-wrapper">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Layout