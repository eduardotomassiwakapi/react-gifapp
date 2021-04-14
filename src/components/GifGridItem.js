import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({title,url}) => {
    //console.log({id,title,url});
    return (
        <div className='card animate__animated animate__fadeIn'>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};