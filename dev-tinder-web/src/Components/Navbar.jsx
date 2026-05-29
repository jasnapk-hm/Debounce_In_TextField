import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user oin navbar", user);

  const handleLogout = () => {
    console.log("logout click");
    try {
      dispatch(removeUser());
      return navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm px-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-4xl font-bold">
            {" "}
            DevTinder
          </Link>
        </div>

        {user && (
          <div className="flex gap-2">
            Welcome,{user.firstName}
            <div className="dropdown dropdown-end mx-4 flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img alt="profile" src={user.image} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-base"
              >
                <li>
                  <Link
                    to="/profile"
                    className="text-base font-medium justify-between"
                  >
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a className="text-base">Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout} className="text-base">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
