import { Link, NavLink } from "react-router-dom";
import ProfileImage from "../images/RK.png";

const Navigation = () => {

  const ActiveSidebar = () => {
    let sidebar = document.querySelector('.layout-navigation-wrapper');
    sidebar.classList.toggle('nav-sidebar-shrink');
  }

  return (
    <>
      <div className="nav-sidebar scrollbar-decorator">
        <div className="nav-sidebar-card-wrapper card">
          {/* Profile  */}
          <div className="profile-wrapper">
            <div className="logo-wrapper">
              <div className="logo-inner">
                <img src={ProfileImage} alt="Rahul Kumar" />
                <div className="nav-profile-card-status-circle rounded">
                  <div className="status-circle-pulse"></div>
                  <div className="status-circle-body"></div>
                </div>
              </div>
              <button className="nav-sidebar-btn-toggle" onClick={ActiveSidebar}>
                <i className="fa-solid fa-caret-left"></i>
              </button>
            </div>
            <div className="pro-name">
              <p><span style={{ color: 'var(--primary-color)' }}>Rahul</span> <span>Kumar</span></p>
            </div>
          </div>
          {/* Navigation */}
          <div className="nav-wrapper">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                  <i className="fa-solid fa-address-card"></i>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/education" end className={({ isActive }) => isActive ? "active" : ""}>
                  <i className="fa-solid fa-graduation-cap"></i><span>Skills and Education</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/experience" end className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-briefcase"></i> <span>Experience</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" end className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-folder-open"></i><span>Portfolio</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" end className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-pen-to-square"></i><span>Contact</span></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
