import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('useFetchGifs', () => {


    test('should return initial state', async () => {
        const apiUrl = 'https://api.giphy.com/v1/gifs/search?rating=r&q=tomatoes&limit=0&api_key=1H3c5Ybz7bYQgUPoGaTiMK228pvRc0nK';
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(apiUrl))
        //console.log(result);
        
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([])
        expect(loading).toBeTruthy
    })

    test('should return an array of images and loading:false',async() => {

        const apiUrl = 'https://api.giphy.com/v1/gifs/search?rating=r&q=tomatoes&limit=7&api_key=1H3c5Ybz7bYQgUPoGaTiMK228pvRc0nK';
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(apiUrl));
        
        await waitForNextUpdate();
        const {data: images, loading} = result.current;
        // console.log(images);

        expect(images.length).not.toBe(0)
        expect(loading).toBeFalsy
    })
    
});
