import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Cart } from "./Cart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { productInCart, totalProducts } from "../states/cartSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Form } from "./Form";
import { Welcome } from "./Welcome";
export const Navbar = () => {
  const [popUp, setPopUp] = useState(false);

  const [formPopup, setFormPopup] = useState(false);

  const toggleForm = () => {
    setFormPopup(!formPopup);
  };

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const TotalItemInCart = useSelector(totalProducts);

  return (
    <nav className="flex fixed top-0 w-screen z-20 justify-between items-center px-8 py-2 bg-red-500 text-white">
      <img className="w-[60px] p-2" src={logo} alt="logo" />
      <div>
        <AccountCircleIcon
          sx={{ fontSize: 30 }}
          className="mr-4 font-s"
          onClick={() => toggleForm()}
        />
        <Welcome />
        <Badge badgeContent={TotalItemInCart} color="primary">
          <LocalGroceryStoreIcon
            sx={{ fontSize: 30 }}
            className="mr-4 text-white "
            onClick={() => togglePopUp()}
          />
        </Badge>

        {popUp && <Cart state={setPopUp} />}
        {formPopup && <Form state={setFormPopup} />}
      </div>
    </nav>
  );
};
