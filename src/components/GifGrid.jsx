import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {
    const {image, isLoading} = useFetchGifs(category)
    
    return (
        <>
            <h3>{ category } </h3>
            {
                isLoading && (<h2>cargando....</h2>)
                
            }
            <div className="card-grid">
                {
                    image.map((img)=>(
                        <GifItem 
                        key={img.id}
                        {... img}
                        />
                    ))
                }
            </div>

        </>

    )

}
