import './App.css';
export const List = ( {people} ) =>{
    return(
        <>
        {people.map(person => {
            const { id, name, dob, img } = person;
            return (
                <article key={id} className="person">
                    <img src={img} alt={name} className="birth-img"/>
                    <div>
                        <h4>{name}</h4>
                        <p>{dob}</p>
                    </div>
                </article>
            )
        })}
        </>
    )
}