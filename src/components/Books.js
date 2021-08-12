import React from 'react';
import './Books.css';

function Books(props) {

    return (
        <div className="bookbox">
            <h2 className="bookbox__title">{props.title}</h2>
            <p className="bookbox__content">{props.reviewText}</p>
            <p className="bookbox__name"> By {props.name}</p>
        </div>
    )
}

export default Books;
