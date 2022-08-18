import React, { useEffect, useState } from "react";

export const Details = ({ singleFruit, state }) => {
  useEffect(() => {
    state(true);
  }, []);
  const close = () => {
    state(false);
  };

  return (
    <div className=" flex  items-center justify-center h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md">
      <div className="relative flex shadow-lg flex-col justify-center items-center bg-zinc-200 w-[400px] h-[500px] rounded-lg">
        <h1 className="font-bold text-4xl">{singleFruit.name} </h1>
        <img
          className="w-[40%] rounded-[100%] mt-4 "
          src={singleFruit.image}
          alt="image"
        />
        <p className="font-bold mt-4">Famiglia: {singleFruit.family}</p>
        <p className="font-bold">kcal: {singleFruit.nutritions.calories}</p>
        <p className="font-bold mt-4 text-red-500">
          Prezzo: {singleFruit.price}€
        </p>
        <button onClick={close} className="absolute top-2 right-2 text-4xl">
          &times;
        </button>
      </div>
    </div>
  );
};
