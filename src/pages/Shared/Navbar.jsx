import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/logoo.png";
import { AuthContext } from "../../providers/AuthProvider";
import UseAllUsers from "../../Hooks/UseAllUsers";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [users] = UseAllUsers();
  const currentUser = users?.find((Vusers) => Vusers?.email === user?.email);
  // console.log(currentUser);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-gradient-to-r via-[#753a88] from-[#cc2b5e] text-primary-content fixed top-[40px] z-[999] mb-10">
        <div className="navbar-start w-[30%] md:w-[50%]">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary bg-white"
                      : "hover:bg-white hover:text-primary duration-500 ease-in-out"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary bg-white"
                      : "hover:bg-white hover:text-primary duration-500 ease-in-out"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary bg-white"
                      : "hover:bg-white hover:text-primary duration-500 ease-in-out"
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary bg-white"
                      : "hover:bg-white hover:text-primary duration-500 ease-in-out"
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary bg-white"
                      : "hover:bg-white hover:text-primary duration-500 ease-in-out"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img className="w-20 md:w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */}
          {/* </button> */}

          {user && user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar text-white"
              >
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="bg-primary rounded-box menu menu-compact dropdown-content mt-3 p-2 shadow w-52"
              >
                <li>
                  <a className="justify-between hover:bg-white hover:text-primary duration-500 ease-in-out">
                    Profile
                    {/* <span className="badge"></span> */}
                  </a>
                </li>
                {currentUser?.role !== "user" ? (
                  <Link to="/dashboard">
                    <li>
                      <a className="justify-between hover:bg-white hover:text-primary duration-500 ease-in-out">
                        Dashboard
                      </a>
                    </li>
                  </Link>
                ) : (
                  " "
                )}

                <li onClick={handleLogout}>
                  <a className="hover:bg-white hover:text-primary duration-500 ease-in-out">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <div className="w-10 rounded-full border-2 border-white">
                <img
                  className=""
                  src="https://i.ibb.co/7nqRb61/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail-removebg-previe.png"
                  alt=""
                  title="login"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
