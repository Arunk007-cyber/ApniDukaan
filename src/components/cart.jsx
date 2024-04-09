import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../cart/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const [counts, setCounts] = useState(items.map(() => 1));
  const [totalPrice, setTotalPrice] = useState(0);
  const [Discount,setDiscount]=useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    
    let total = 0;
    items.forEach((item, index) => {
        let price=item.price.replace("£","")
      total += price * counts[index];
    });
    setTotalPrice(total);
  }, [items, counts]);

  const increment = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? Math.max(count - 1, 1) : count))
    );
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen ">
      <div className="flex h-[8rem] items-center ">
        <h1 className="text-4xl font-bold mx-[10rem] text-gray-800">Checkout</h1>
      </div>
      <div className="max-w-6xl mx-auto">
        {items.map((item, id) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg my-[1rem] px-6 py-6 flex justify-between items-center"
          >
            <div className="">
              <img
                src={item.img}
                className="w-32 h-32 rounded-lg"
                alt={item.name}
              />
            </div>
            <div className="flex items-center justify-center w-28 h-20">
              <p className="text-sm font-semibold text-gray-800 text-center">
                {item.name}
              </p>
            </div>
            <div className="flex items-center ml-6">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={() => decrement(id)}
              >
                -
              </button>
              <span className="mx-4 text-gray-800 font-semibold">
                {counts[id]}
              </span>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={() => increment(id)}
              >
                +
              </button>
            </div>
            <div className="w-[4rem]">
              <p className="text-gray-800 font-semibold text-lg text-center">
                {"£"+(item.price.replace("£","")*counts[id]).toFixed(2)}
              </p>
            </div>
            <div className="">
              <button onClick={() => removeFromCart(item.id)} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {(items.length)?
      <div>
      <div className='mx-[20rem] mt-[3rem]'>
        <hr className="max-w-[100rem] border-t-2 border-gray-300" />
      </div>
      <div className='h-24 flex items-center justify-center '>
        <div className='flex w-[24rem] justify-between'>
            <h1 className='font-bold text-xl'>Subtotal</h1>
             <p className='text-gray-500 font-bold'>{'£'+(totalPrice).toFixed(2)}</p>
        </div>   
      </div>
      <div className='mx-[20rem] md-[3rem]'>
        <hr className="max-w-[100rem] border-t-2 border-gray-300" />
      </div>
      <div className='h-24 flex items-center justify-center '>
        <div className='flex w-[24rem] justify-between'>
            <h1 className='font-bold text-xl'>Discount</h1>
             <p className='text-gray-500 font-bold'>{'£'+0}</p>
        </div>   
      </div>
      <div className='mx-[20rem] md-[3rem]'>
        <hr className="max-w-[100rem] border-t-2 border-gray-300" />
      </div>
      <div className=' flex items-center justify-center  h-24 '>
        <div className='flex w-[24rem] justify-between ml-[8rem]'>
            <h1 className='font-bold text-xl'>Total</h1>
             <p className='text-gray-500 font-bold'>{'£'+(totalPrice+Discount).toFixed(2)}</p>
        </div>
        <div className='ml-2 '>
             <button className='bg-green-500 p-2 rounded-lg text-white font-semibold border-1 border-green-500 ml-6'>Checkout</button>
          </div>   
      </div>

      </div>:<div className= 'text-center '>
        <h1 className='inline-block text-center text-4xl font-semibold shadow-lg'>No Item In the Cart 😲  </h1>
        </div>

      }
      
      

    </div>
  );
};

export default Cart;
