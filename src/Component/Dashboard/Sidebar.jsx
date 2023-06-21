import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo/logoo.png";
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import UseAllUsers from "../../Hooks/UseAllUsers";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [users] = UseAllUsers();
  const currentUser = users?.find((Vusers) => Vusers?.email === user?.email);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="max-w-7xl mx-auto navbar bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <img className="w-36" src={logo} alt="" />
              </Link>
            </div>
            <div className="md:hidden">
              <div className="">
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
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal space-x-4">
                {/* Navbar menu content here */}

                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <AiFillHome className="" />
                    Home
                  </NavLink>
                </li>
                {currentUser?.role === "admin" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/manageUsers"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white my-auto"
                            : "hover:text-white duration-500 ease-in-out my-auto"
                        }
                      >
                        <HiUserGroup className="" />
                        Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/managePosts"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white my-auto"
                            : "hover:text-white duration-500 ease-in-out my-auto"
                        }
                      >
                        <FaRegFilePowerpoint className="" />
                        Manage Posts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addPromo"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white my-auto"
                            : "hover:text-white duration-500 ease-in-out my-auto"
                        }
                      >
                        <FaRegFilePowerpoint className="" />
                        Add Promo
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
                {currentUser?.role === "teacher" ||
                currentUser?.role === "headmaster" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/addAPost"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white my-auto"
                            : "hover:text-white duration-500 ease-in-out my-auto"
                        }
                      >
                        <BsFillBookmarkPlusFill className="" />
                        Add a Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myPosts"
                        className={({ isActive }) =>
                          isActive
                            ? "text-white my-auto"
                            : "hover:text-white duration-500 ease-in-out my-auto"
                        }
                      >
                        <FaClipboardList className="" />
                        My Posts
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li>
                  <div className="">
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
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-gradient-to-r from-cyan-500 to-blue-500">
            {/* Sidebar content here */}

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline my-auto"
                    : "hover:text-white duration-500 ease-in-out my-auto"
                }
              >
                <AiFillHome className="w-8" /> Home
              </NavLink>
            </li>
            {currentUser?.role === "admin" ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white underline my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <HiUserGroup className="w-8" /> Manage Users
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/managePosts"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white underline my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <FaRegFilePowerpoint className="w-8" /> Manage Posts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addPromo"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white underline my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <FaRegFilePowerpoint className="w-8" /> Add Promo
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            {currentUser?.role === "teacher" ||
            currentUser?.role === "headmaster" ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addAPost"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white underline my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <BsFillBookmarkPlusFill className="w-8" /> Add a Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myPosts"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white underline my-auto"
                        : "hover:text-white duration-500 ease-in-out my-auto"
                    }
                  >
                    <FaClipboardList className="w-8" /> My Posts
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
