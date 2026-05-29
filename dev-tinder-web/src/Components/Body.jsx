import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  console.log("userData", userData);
  const fetchUser = async () => {
    if (userData) return;
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("user data", response.data);

      dispatch(addUser(response.data));
      localStorage.removeItem("accessToken");
      if (!token) {
        console.log("inside iffffffffff");
        navigate("/login");
      }
    } catch (error) {
      console.error("User fetch error", error);

      // Optional logout if token expired
      localStorage.removeItem("accessToken");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      {/* All the child component needs to render from the parent.
       Any children rourtes from body component routes from here  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
