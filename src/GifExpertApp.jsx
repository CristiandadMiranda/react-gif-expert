import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( onNewCategory ) => {
        if(categories.includes(onNewCategory)) return;
        setCategories([...categories, onNewCategory])
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
            // setcategories={ setCategories } 
            onNewCategory={ event => onAddCategory(event) }
            />

            
                {
                categories.map( (category) => {
                    return (
                        <GifGrid category={category} key={category}/>

                    )
                })
                }
        </>
    )

}