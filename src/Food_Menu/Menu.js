export const Menu = ({ items }) =>{
    return(
        
            <div className="menu-container">
                {items.map((menuItem) => {
                    const { id, title, img} = menuItem;
                    return(
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="menu-image" />
                            <div className="menu-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='menu-price'>Rs. 100</h4>
                                </header>
                                <p className='menu-desc'>jnx,cvu mndkfj df ljdlfjlkf jl kjmcnvmn,mxn,v cvnxvnzc ernq wkrebmwmnbermwb remnmwbcnvnxc,n</p>
                            </div>
                        </article>
                    )
                })}
            </div>
       
    )
}