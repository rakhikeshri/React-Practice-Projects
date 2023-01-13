import React, { useState, useEffect } from 'react'
import './Tours.css'
import { Tours } from './Tours'
import { Loading } from './Loading'

const url= 'https://course-api.com/react-tours-project'

export const ToursApp = () =>{
    const [loading,setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const fetchTours = async () => {
        setLoading(true);
        try{
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        }catch (error){
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading){
        return (
            <main>
                <Loading />
            </main>
        );
    }
    if(tours.length === 0) {
        return(
            <main className='container2'>
                <h2>No Tours left</h2>
                <div className="underline"></div>
                <button className='read-show' onClick={fetchTours}>Refresh</button>
            </main>
        )
    }
    return(
        <main>
            <section className="container2">
                <h2>Tours List</h2>
                <div className="underline"></div>
                <Tours tours={tours} removeTour={removeTour}/>
            </section>
        </main>
    )
}