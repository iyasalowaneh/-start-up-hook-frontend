import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

//styling
import { Button } from "../../style";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link to="/home" class="navbar-brand">
          Start-up Hook
        </Link>
        <a class="navbar-brand" href="#">
          Ideas
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <Button type="button">SignIn</Button>
            <Button type="button">SignUp</Button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
