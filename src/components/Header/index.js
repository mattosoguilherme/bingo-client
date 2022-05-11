import { Link } from "react-router-dom";
import { NavS } from "../styles";

const Header = () => {
  return (
    <NavS>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bingo Red
        </Link>

      
          <Link id="register" className="navbar-brand" to="/register">
            Cadastra-se
          </Link>

        
      </div>
    </NavS>
  );
};
export default Header;
