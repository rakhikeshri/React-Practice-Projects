import React from "react";
import { Review } from "./Review";

export const ReviewApp = () =>{
    return(
        <main>
            <section className="container-review">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="review-underline"></div>
                </div>
                <Review />
            </section>
        </main>
    )
} 