import { logout, useAuthDispatch } from "../Context";

export const Navigation = (props) => {
  const dispatch = useAuthDispatch();
  const logoutHandler = async () => {
    await logout(dispatch);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-background">
      <a className="navbar-brand" href={props.homelink}>
        HMS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href={props.homelink}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={props.homelink + "/account"}>
              Account
            </a>
          </li>
        </ul>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle nav-dropdown-link-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hi, {localStorage.getItem("username")}
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item" href={props.homelink + "/settings"}>
              Settings
            </a>
            <a
              className="dropdown-item"
              href={props.homelink + "/changepassword"}
            >
              Change Password
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item btn" onClick={logoutHandler}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
