import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);
    //const [limit, setLimit] = useState(20)
    const limit = 20;
    // const addCategory = (newCat) => {
    //     console.log(categories, newCat);
    //     setCategories( [...categories, newCat] );
    // }

    return (<>
        <h2>- GIFS APP - </h2>
        <AddCategory setCategories={setCategories} />
        {/* <button onClick={ () => addCategory('asd') }>Add</button> */}
        <hr />
        <div >
            {categories.join(' - ')}
        </div>
        <hr />
        <ol>
            {
                categories.map(cat =>
                    <GifGrid key={cat} category={cat} limit={limit} />
                )
            }
        </ol>
    </>)
}

export default GifExpertApp;
