import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userState } from "../states/usersSlice";

export const Welcome = () => {
  const users = useSelector(userState);
  return <div>Benvenuto {users[0]?.name}</div>;
};
