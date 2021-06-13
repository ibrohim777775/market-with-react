import React, { Component } from "react";
import { Route } from "react-router";
import Main from "./Containers/Main";
import Delivery from "./Containers/Delivery";
import Support from "./Containers/Support";
import Payment from "./Containers/Payment";
import AboutProduct from "./Containers/AboutProduct";
import ShoppingCart from "./Containers/ShoppingCart";
import Ordering from "./Containers/Ordering";
import Vacansies from "./Containers/Vacansies";
import UserInfo from "./Containers/UserInfo";

const Routes = [
  { exact: true, path: "/", component: Main },
  { exact: true, path: "/delivery", component: Delivery },
  { exact: true, path: "/faq", component: Support },
  { exact: true, path: "/payment", component: Payment },
  { exact: true, path: "/:id/product-info", component: AboutProduct },
  { exact: true, path: "/shopping-cart", component: ShoppingCart },
  { exact: true, path: "/ordering", component: Ordering },
  { exact: true, path: "/vacansies", component: Vacansies },
  { exact: true, path: "/user", component: UserInfo },
];

export default Routes;
