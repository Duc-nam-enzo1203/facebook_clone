import React from "react";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../Pages/Login"),
  // },
  // {
  //   path: "/create-account",
  //   name: "Create Account",
  //   component: () => import("../Pages/CreateAccount"),
  // },
  // {
  //   path: "/recover-password",
  //   name: "Recover Password",
  //   component: () => import("../Pages/RecoverPassword"),
  // },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

export default publicRoutes;
