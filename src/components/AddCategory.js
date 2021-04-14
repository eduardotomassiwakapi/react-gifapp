import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories, /*limit, setLimit*/ }) => {

    const [inputCategoryValue, setInputCategoryValue] = useState('');
    //const [inputLimitValue, setInputLimitValue] = useState(limit)
    
    const handleCategoryInputChange = (e) => {
        //console.log("handleCategoryInputChange="+e.target.value);
        setInputCategoryValue(e.target.value);
    }
    // const handleLimitInputChange = (e) => {
    //     setInputLimitValue(e.target.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCategoryValue.trim().length > 2) {
            //console.log("handleSubmit="+inputCategoryValue);
            setCategories(oldCategories => [inputCategoryValue, ...oldCategories,]);
            //setLimit(inputLimitValue);
            setInputCategoryValue('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={inputCategoryValue}
                onChange={ (e) => handleCategoryInputChange(e)} />
            {/* <input type="number" 
            value={limit} onChange={ (e) => handleLimitInputChange(e)} /> */}
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
   //setLimit: PropTypes.func.isRequired
};
