import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-200 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl font-bold"> DevTinder</a>
      </div>

      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
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
    </div>
    </div>
  )
}

export default Navbar
