export const getGifs = async (query) => {
    const { VITE_GIPHY_API_KEY } = import.meta.env;

    const url = `https:/api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_API_KEY}&limit=10&q=${query}`;

    const response = await fetch(url);
    const { data = [] } = await response.json();

    const gifs = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url,
    }));

    return gifs;
};
