
export const fetchGifs = async (apiUrl) => {

    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.warn('Error');
    }
    const { data } = await response.json()
    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.fixed_height.url
        };
    })
    
    //console.log(gifs);
    return gifs;
}
