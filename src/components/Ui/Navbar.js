import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const Navbar = () => {

  const { isLogged, logout } = useUser()
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" >
          <Link 
            className="link-light " 
            style={{outline: 'none'}}
            to='/'>
            XML Reader
          </Link>
        </div>

        <div className="d-flex justify-content-end">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {
                isLogged 
                ?
                  <Link 
                    className="nav-link active btn btn-link" 
                    to='#'
                    onClick={() => logout()}
                  >
                    Logout
                  </Link>
                : 
                  <Link 
                    className="nav-link active btn btn-link" 
                    to='login'
                  >
                    Login
                  </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
