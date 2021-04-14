
import {fetchGifs} from '../../helpers/fetchGifs'

describe('fetchGifs(apiUrl)', () => {

    const url = "https://api.giphy.com/v1/gifs/search?rating=r&q=Boobs&limit=20&api_key=1H3c5Ybz7bYQgUPoGaTiMK228pvRc0nK";

    test('should return list of images{id,title,url}', async () => {
        const result = await fetchGifs(url)
        //console.log(result);
        
        expect(result.length).toBe(20);

        expect(result[0]).toEqual(expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
          }));
        
          expect(result[0].url.includes('https://')).toBe(true);
    });
    
    test('should return nothing if url ', async () => {
        const result = await fetchGifs('')
        //console.log(result);
        expect(result.length).toBe(0);
    });

})
