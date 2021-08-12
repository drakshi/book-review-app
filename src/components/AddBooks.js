import React, { useRef } from 'react';

import './AddBooks.css';

function AddBook(props) {
  const titleRef = useRef('');
  const reviewTextRef = useRef('');
  const nameRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const book = {
      title: titleRef.current.value,
      reviewText: reviewTextRef.current.value,
      name: nameRef.current.value
    };

    props.onAddBook(book);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor='name'>Enter Your Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className="control">
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className="control">
        <label htmlFor='reviewText'>Add your review</label>
        <textarea rows='5' id='reviewText' ref={reviewTextRef}></textarea>
      </div>
      <div className="form-footer">
      <button className="addBook__button">Add Book</button>
      <button onClick = {props.onCancel}className="addBook__button">Cancel</button>
      </div>
    </form>
  );
}

export default AddBook;
