import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

//rsc
const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => setCategories([value, ...categories]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;
