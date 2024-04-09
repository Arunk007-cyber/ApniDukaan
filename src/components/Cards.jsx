import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../cart/cartSlice';
import { adding, removing } from '../../cart/LikedSlice';

const Cards = ({ prop }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const likedItems = useSelector((state) => state.liked);

    const isInCart = (item) => {
        return cartItems.some((cartItem) => cartItem.id === item.id);
    };

    const LikedisInCart = (item) => {
        return likedItems.some((likedItem) => likedItem.id === item.id);
    };

    const addToCart = (item) => {
       
        const isItemInCart = isInCart(item);

        if (!isItemInCart) {
            dispatch(add(item));
        } else {
            dispatch(remove(item.id));
        }
    };

    const addToLiked = (item) => {
        
        const likedItemCart = LikedisInCart(item);

        if (!likedItemCart) {
            dispatch(adding(item));
        } else {
            dispatch(removing(item.id));
        }
    };

    return (
        <div className="flex justify-center px-8 py-12">
            <div className="grid grid-cols-2 gap-x-[10rem] gap-y-12">
                {prop && prop.map((item, id) => {
                    const isLessThanFive = item.available <= 5;
                    const buttonBgColor = isLessThanFive ? 'bg-[#FF9446]' : 'bg-[#00CA14]';
                    const buttonText = isLessThanFive ? `Only ${item.available} left` : 'Available';
                    const cartIconColor = isInCart(item) ? 'text-green-500' : 'text-gray-600';
                    const likedIconColor = LikedisInCart(item) ? 'text-red-500' : 'text-gray-600';

                    return (
                        <div className="max-w-[522px] h-[350px] rounded-2xl shadow-xl bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex" key={id}>
                            <div className="grid grid-cols-2">
                                <div className="p-4 flex items-center">
                                    <img src={item.img} className="w-64 h-64 object-cover rounded-lg" alt={item.name} />
                                </div>
                                <div className="flex flex-col p-4 justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {item.name}
                                        </h2>
                                        <div className="text-sm text-gray-600 mt-1 line-clamp-3">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <button className={`text-white ${buttonBgColor} w-28 mt-4 font-semibold py-1 px-4 rounded-full`}>
                                            {buttonText}
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-lg font-semibold text-gray-800 mt-2">
                                            {item.price}
                                        </h2>
                                        <FaHeart  onClick={() => addToLiked(item)}
                                         className={`w-8 h-8 ${likedIconColor} cursor-pointer  transition duration-300`} />
                                        <FaShoppingCart
                                            onClick={() => addToCart(item)}
                                            className={`w-8 h-8 ${cartIconColor} cursor-pointer  transition duration-300`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
