import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (query) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getImages = async () => {
        setIsLoading(true);

        const images = await getGifs(query);
        setImages(images);

        setIsLoading(false);
    };

    useEffect(() => {
        if (typeof query !== undefined) getImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
