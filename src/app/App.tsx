import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Router, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/orders.Page";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";

function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  /** HANDLER **/

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          {/* <Test /> */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
      />
    </>
  );
}

export default App;
