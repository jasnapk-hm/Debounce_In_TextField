import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log("user oin navbar", user);
  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl font-bold"> DevTinder</a>
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
                  <a className="text-base font-medium justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="text-base">Settings</a>
                </li>
                <li>
                  <a className="text-base">Logout</a>
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
