import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
export const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <div className=" relative grid grid-cols-1 md:grid-cols-2 flex-grow">
                <div>
                    <div className=" bg-red-500 p-4 m-4 w-[200px] rounded-md flex gap-2 items-center">
                        <img className="w-[50px]" src={logo} alt="logo" />{' '}
                        E-fruits
                    </div>
                </div>
                <div className="absolute hidden md:block inset-x-0 shadow-xl bg-white w-[200px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <img className="w-fit" src={logo} alt="logo" />
                </div>
                <div className="bg-fruit1 bg-cover bg-center"></div>
                <div className="bg-fruit2 bg-cover bg-center"></div>
                <div className="flex flex-col justify-center items-center text-center font-bold ">
                    <h2>
                        Vuoi avere i migliori frutti direttamente a casa tua?{' '}
                        <br />
                        Visita il nostro shop
                    </h2>
                    <Link to={'/shop'}>
                        <button className=" bg-red-600 mt-2 p-2 w-36 text-white rounded-md h-16 custom-btn btn-5">
                            Vai allo shop
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
