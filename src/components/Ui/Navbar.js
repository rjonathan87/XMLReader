import { Link } from "react-router-dom";

export const Navbar = () => {
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
              <Link 
                className="nav-link active btn btn-link" 
                to='logout'
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
