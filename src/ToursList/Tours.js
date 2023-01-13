import { Tour } from './Tour'
export const Tours = ({tours, removeTour}) =>{
    return(
        <main>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
            
        </main>
    )
}