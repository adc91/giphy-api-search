import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {images.map((item) => (
                    <GifGridItem key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default GifGrid;
