import React, { useState } from 'react'
import './FoodApp.css'
import { data } from './food-data'
import { Categories } from './Categories'
import { Menu } from './Menu'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
console.log(allCategories)

export const FoodApp = () => {
    const [menuItems, setMenuItems] = useState(data);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(data)
            return
        }
        const newItems = data.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='food-container'>
                <div className='food-title'>
                    <h1>Food Menu</h1>
                    <div className="underline-food"></div>
                </div>
                <Categories filterItems={filterItems} categories={categories}/>
                <Menu items={menuItems}/>
            </section>

        </main>
    )
}