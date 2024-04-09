import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { adder } from "../../cart/FilteredItemSlice";

const Navbar = ({data}) => {
  const cartItems = useSelector((state) => state.cart);
  const likedItems=useSelector((state)=>state.liked)
  const dispatch=useDispatch();
  const [input,setInput]=useState('')
  const cartItemCount = cartItems.length;
  const handleOnChange=(e)=>{
    setInput(e.target.value);
    
  }

  const handleGroceryLinkClick = (e) => {
  
    dispatch(adder([]));
    setInput('')
    
}



  const handleSearch=()=>{
    const filteredItems = data.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    dispatch(adder(filteredItems.flat()));

  }

  const handleEnterPress=(e)=>{
    if(e.key==='Enter'){
      handleSearch();
    }

  }
  
  return (
    <div className="h-[7rem] flex items-center justify-center px-10 ">
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        <div className="flex items-center space-x-6">
        <Link to='/' onClick={(e)=>handleGroceryLinkClick(e)}>
            <h2 className="text-2xl font-bold text-gray-800">GROCERIES</h2>
          </Link>
          <div className="relative w-[45rem]">
            <input
              className="py-2 pl-8 pr-4 rounded-xl shadow-xl border w-full border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={input}
              placeholder="Search"
              onChange={(e)=>handleOnChange(e)}
              onKeyDown={handleEnterPress}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <CiSearch className="text-xl text-gray-600 hover:text-black"  onClick={handleSearch} />
            </div>
          </div>
        </div>  
        <div className="flex items-center space-x-4">
          <div className="flex items-center relative">
            <FaHeart
              className={`w-8 h-8  'text-gray-600' ${likedItems.length>0?'text-red-500':'text-gray-700'} cursor-pointer hover:text-red-500 transition duration-300`}
                />
               {likedItems.length > 0 && <span className="bg-red-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs absolute -top-1 -right-2">{likedItems.length}</span>}  
          </div>

          <div className="flex items-center">
            <FaRegUser
              className="w-8 h-8 text-gray-600 cursor-pointer hover:text-blue-500 transition duration-300"
            />
           
          </div>
          <Link to='/cart'>
            <div className="flex items-center relative">
              <FaShoppingCart
                className={`w-8 h-8 ${cartItemCount > 0 ? 'text-green-600' : 'text-gray-600'} cursor-pointer hover:text-green-500 transition duration-300`}
              />
              {cartItemCount > 0 && <span className="bg-green-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs absolute -top-1 -right-2">{cartItemCount}</span>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
