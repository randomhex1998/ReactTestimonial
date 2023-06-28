import React, { useState } from 'react';

import {FaChevronLeft , FaChevronRight} from "react-icons/fa";
import data from "./data";

const Box = () => {

    const [index , setIndex] = useState(0);
    const {name , para , img } = data[index];

    const checkNumber = (item) => {
        if(item > data.length-1 ) {
            return  0;
        }
        if(item < 0 ) {
            return  data.length -1 
        }

        return item;
    } 


    const rightHandler = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex); 
        })
    }

    const leftHandler = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex); 
        })
    }

    return (
        <div className='box-area'>
            <div className='box'>
                <div className='img-area'><img src={img} alt="" /></div>
                <h3 className='title'> {name}</h3>
                <p className='para'> {para} </p>
            </div>
            <div className='btns-box'>
                <button className='btn btn-right' onClick={rightHandler}><FaChevronRight/></button>
                <button className='btn btn-left' onClick={leftHandler}><FaChevronLeft/></button>
            </div>
        </div>
    );
};

export default Box;