import { NavLink } from "react-router-dom";
import "../pages/PagesStyles.css";

/* WIP */
/* Home Page component with links to every project in separate pages */
export default function HomePage() {
  return (
    <nav className="project-cards">
      <NavLink to="/accordian">
        <button>accordian project</button>
      </NavLink>
      <NavLink to="/random-color">
        <button>random color project</button>
      </NavLink>
      <NavLink to="/star-rating">
        <button>star rating project</button>
      </NavLink>
      <NavLink to="/image-slider">
        <button>image slider project</button>
      </NavLink>
      <NavLink to="/load-more-data">
        <button>load more data project</button>
      </NavLink>
    </nav>
  );
}
