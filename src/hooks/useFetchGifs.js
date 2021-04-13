import { useEffect, useState } from 'react'
import { fetchGifs } from '../helpers/fetchGifs';

export const useFetchGifs = (apiUrl) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        fetchGifs(apiUrl)
            .then( images => {
                // setTimeout( () => {
                    //console.log(images);
                    setState({
                        data: images,
                        loading: false
                    })
                // }, 1000);
            })
    }, [apiUrl] );

    
    return state;
}
 