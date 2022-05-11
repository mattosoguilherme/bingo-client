import { NavPrincipalS } from "../styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderLog = () => {

  const navigate = useNavigate();

  const LogOut = () => {
    alert(`Até a proxima`);
    navigate("/");
    localStorage.removeItem("token");
  };

  return (
    <>
      <NavPrincipalS className=" navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
          <Link id="nameBar" className="navbar-brand" to="/home">
            Bingo Red
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/session">
                  Sessões
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <a
                  href="/"
                  className="nav-link active dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  mais
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link onClick={LogOut} className="dropdown-item" to="/">
                      Sair
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </NavPrincipalS>
    </>
  );
};

export default HeaderLog;
