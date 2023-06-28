import React, { useState } from 'react';

import {FaChevronLeft , FaChevronRight} from "react-icons/fa";
import data from "./data";

const Box = () => {

    const [index , setIndex] = useState(0);
    const {name , para , img } = data[index];
    return (
        <div className='box-area'>
            <div className='box'>
                <div className='img-area'><img src={img} alt="" /></div>
                <h3 className='title'> {name}</h3>
                <p className='para'> {para} </p>
            </div>
            <div className='btns-box'>
                <button className='btn btn-right'><FaChevronRight/></button>
                <button className='btn btn-left'><FaChevronLeft/></button>
            </div>
        </div>
    );
};

export default Box;