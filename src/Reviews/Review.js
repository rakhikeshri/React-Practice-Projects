import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { data } from './Reviews'
import './review.css';

export const Review = () => {
    const [index,setIndex] = useState(1);
    const {name, job, img, text} = data[index];

    const checkNumber = (number) =>{
        if(number > data.length - 1){
            return 0;
        }
        if(number < 0){
            return data.length -1
        }
        return number;
    }

    const prevReview = () =>{
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex); 
        })
    }
    const nextReview = () =>{
        setIndex((index) => {
            let newIndex = index +1;
            return checkNumber(newIndex); 
        })
    }
    const randomReview = () =>{
        let randomNumber = Math.floor(Math.random()*data.length)
        if(randomNumber === index){
            randomNumber = index + 1
        }
        return setIndex(checkNumber(randomNumber));
    }

    return (
        <>
            <article className='content-review'>
                
                    <div className="image-review">
                        <FaQuoteRight className='quote' />
                        <img src={img} className='profile-img' alt="image--review" />
                        <div className="profile-bcg"></div>
                    </div>
               
                    <h2>{name}</h2>
                    <p className='job'>{job} </p>
                    <p className='desc'>{text} </p>
                    <div className="arrow">
                        <FaChevronLeft className='left' onClick={prevReview}/>
                        <FaChevronRight className='right' onClick={nextReview}/>
                    </div>
                    <button className="random-review" onClick={randomReview}>Random Review</button>
               
            </article>
        </>
    )
}