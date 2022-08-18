import { useShop } from '../customHooks/useShop'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import React from 'react'
import { Details } from '../components/Details'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../states/cartSlice'
import toast, { Toaster } from 'react-hot-toast'
import { nanoid } from '@reduxjs/toolkit'

const Shop = () => {
    const [data] = useShop()
    const [popUp, setPopUp] = useState(false)
    const [popUpData, setPopUpData] = useState(null)
    const togglePopUp = () => setPopUp(!popUp)

    const notify = () => toast.success('Prodotto aggiunto al carrello')

    const dispatch = useDispatch()
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 mt-32  justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4 ">
                <Toaster position="bottom-right" reverseOrder={false} />
                {data.map((fruit, index) => (
                    <div
                        key={index}
                        className="max-w-xs mx-auto w-[350px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                    >
                        <div>
                            <div className="flex items-center justify-between px-4 py-2 ">
                                <h1 className="text-2xl font-bold text-black">
                                    {fruit.name}
                                </h1>
                                <p className="text-2xl mb-4 font-bold text-black">
                                    {fruit.price}€
                                </p>
                            </div>
                            <div>
                                <p className="font-bold m-4 text-black">
                                    <strong>Famiglia:</strong> {fruit.family}
                                </p>
                                <p className="text-md font-bold m-4 text-black">
                                    <strong>Kcal:</strong>{' '}
                                    {fruit.nutritions.calories}
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto  h-[250px]">
                            <img
                                className="object-cover w-full h-48 mt-2 hover:scale-110 duration-300"
                                src={fruit.image}
                                alt="fruit"
                            />
                        </div>
                        <div className="flex items-center justify-between px-4 py-2 bg-green-500">
                            <button
                                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                                onClick={() => {
                                    setPopUpData(fruit)
                                    togglePopUp()
                                }}
                            >
                                Dettagli
                            </button>

                            <button
                                onClick={() => [
                                    notify(),
                                    dispatch(
                                        addToCart({
                                            ...fruit,
                                            cartId: nanoid(),
                                            quantity: 1,
                                        })
                                    ),
                                ]}
                                className=" font-bold rounded-md cursor-pointer p-2  bg-red-500 text-white  text-center"
                            >
                                Acquista
                            </button>
                        </div>
                    </div>
                ))}

                <div>
                    {popUp && (
                        <Details singleFruit={popUpData} state={setPopUp} />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Shop
