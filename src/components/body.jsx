import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Loader from './Loader';
import { useSelector } from 'react-redux';

const Body = ({ items, isLoading }) => {
  const [drinkItems, setDrinkItems] = useState([]);
  const [fruitItems, setFruitItems] = useState([]);
  const [bakeryItems, setBakeryItems] = useState([]);
  const filterlist = useSelector((state) => state.filter);
  function getItems() {
    const result = [];

    if (items) {
      items.forEach((item) => {
        const type = item.type;
        const existingItems = result.find((group) => group.type === type);

        if (existingItems) {
          existingItems.items.push(item);
        } else {
          result.push({ type, items: [item] });
        }
      });
    }

    const drinksGroup = result.find((group) => group.type === 'drinks') || { items: [] };
    const bakeryGroup = result.find((group) => group.type === 'bakery') || { items: [] };
    const fruitGroup = result.find((group) => group.type === 'fruit') || { items: [] };

    setDrinkItems(drinksGroup.items);
    setBakeryItems(bakeryGroup.items);
    setFruitItems(fruitGroup.items);
  }

  useEffect(() => {
    getItems();
  }, [items]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : filterlist.length > 0 ? (
        <div>
          <Cards prop={filterlist} />
        </div>
      ) : (
        <div>
          <div id='allItems' className='font-extrabold text-3xl mx-[10rem] my-[2rem]'>
            Trending Items
          </div>
          <Cards prop={items} />
          <div id='fruits' className='font-extrabold text-3xl mx-[10rem] my-[2rem]'>
            Fruits
          </div>
          <Cards prop={fruitItems} />
          <div id='drinks' className='font-extrabold text-3xl mx-[10rem] my-[2rem]'>
            Drinks
          </div>
          <Cards prop={drinkItems} />
          <div id='bakery' className='font-extrabold text-3xl mx-[10rem] my-[2rem]'>
            Bakery
          </div>
          <Cards prop={bakeryItems} />
        </div>
      )}
    </div>
  );
};

export default Body;
