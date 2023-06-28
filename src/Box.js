import React from 'react';
import RayanProfile from "./img/rayan.jpg";

const Box = () => {
    return (
        <div className='box-area'>
            <div className='box'>
                <div className='img-area'><img src={RayanProfile} alt="" /></div>
                <h3 className='title'>رایان جابری</h3>
                <p className='para'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بارم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ، و</p>
            </div>
            <div className='btns-box'>
                <button className='btn btn-right'>+</button>
                <button className='btn btn-left'>-</button>
            </div>
        </div>
    );
};

export default Box;