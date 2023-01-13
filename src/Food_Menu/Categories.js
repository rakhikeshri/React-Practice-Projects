import './FoodApp.css'
export const Categories = ({ categories, filterItems }) =>{
    return(
        <div className="menu-btn-container">
            {/* <button className="menu-btn" onClick={()=> filterItems('all')}>all</button>
            <button className="menu-btn" onClick={()=> filterItems('breakfast')}>breakfast</button> */}
            {categories.map((category, index) => {
                return (
                    <button
                    type="button"
                    key={index}
                    className="menu-btn"
                    onClick={()=> filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}