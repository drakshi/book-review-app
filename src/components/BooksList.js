import React from 'react';
import Books from './Books';


function BooksList(props) {
  
    return (
        <div>
            {props.book.map((list)=>(
                <Books title={list.title} reviewText={list.reviewText} name={list.name} />
            ))}
        </div>
    )
}

export default BooksList
