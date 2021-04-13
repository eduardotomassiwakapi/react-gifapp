// import React, { useState, useEffect } from 'react'
// import { fetchGifs } from '../helpers/fetchGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category, limit }) => {

    const apiKey = "1H3c5Ybz7bYQgUPoGaTiMK228pvRc0nK";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?rating=r&q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
    const {data: images, loading} = useFetchGifs(apiUrl);

    return ( 
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
