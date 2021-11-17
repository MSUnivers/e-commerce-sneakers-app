import React, { useState } from 'react'

export default function ProductDetails() {
    const [counter, setCounter] = useState(0);
    function decrease() {
        if (counter === 0) return;
        setCounter(counter - 1)
    }
    function increase() {
        setCounter(counter + 1)
    }
    return (
        <div className="w-5/12 h-4/5 m-20 flex flex-col justify-between ">
            <span className="text-primaryOrange">SNEAKERS COMPANY</span>
            <h1 className="text-4xl">Fall Limited Edition Sneakers</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ipsum fuga recusandae officia est pariatur. Velit perferendis corporis est exercitationem?</p>
            <span>$125.00</span><span>50%</span>
            <span>$225.00</span>
            <div>
                <button onClick={decrease} className="w-8">-</button><input className="w-10" type="number" value={counter} /><button onClick={increase} className="w-8">+</button>
            </div>
            <div>
                <button className="bg-primaryOrange w-38">Add to cart</button>
            </div>
        </div>
    )
}
