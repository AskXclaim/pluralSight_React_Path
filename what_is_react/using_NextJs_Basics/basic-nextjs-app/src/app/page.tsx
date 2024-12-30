"use client";
import Items from "@/app/items/Items";
import {useState} from "react";

const Home = () => {
    const [numbers, setNumbers] = useState([1, 2, 3])
    // const numbers:number[]=[1,2,3]; 
    const addNumber = (value: number) => {
        const newValue = Math.max(...numbers) + value;
        setNumbers([...numbers, newValue]);
    };
    return (
        <div>
            <button style={{cursor: "pointer"}} onClick={() => addNumber(3)}>
                Click to add new value
            </button>
            <Items items={numbers}/>
        </div>
    );
};

export default Home;