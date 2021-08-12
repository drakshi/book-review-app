import React , { useState  } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import Login from './components/Login';
import Ring from './components/Ring';
import AddBook from './components/AddBooks';


function App(){
    const[isLoginPage,setIsLoginPage] = useState(true);
    const[books,setBooks] =useState([]);
    const[isLoading , setIsLoading] =useState(null);
    const[error, setError] =useState(null);
    const[addReview, setaddReview] = useState(false);
    const loginHandler = () =>{
        setIsLoginPage(false)
    }
    const logOutHandler = () => {
        setIsLoginPage(true)
    }
    async function fetchBookHandler(){
       
        setIsLoading(true);
         try{
        const response =await fetch('https://book-api-3d3a9-default-rtdb.firebaseio.com/books.json');
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const data = await response.json();

        const loadedBooks = [];

        for(const key in data) {
            loadedBooks.push({
                id: key,
                title: data[key].title,
                reviewText: data[key].reviewText,
                name:data[key].name
            })
        }

        setBooks(loadedBooks);
        setIsLoading(false);
        console.log(loadedBooks)
        }
        catch(error)
        {
            setError(error.message);
        }
        setIsLoading(false);
    }
    async function addBookHandler (books) {
        const response = await fetch('https://book-api-3d3a9-default-rtdb.firebaseio.com/books.json',{
            method:'POST',
            body:JSON.stringify(books),
            headers:{
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        console.log(books);
        setaddReview(false);
        fetchBookHandler();
    }
    const cancelReviewHandler = () => {
        setaddReview(false)
    }
    const addReviewhandler = () => {
        setaddReview(true);
    }
    
   

    
    return(
        <div className="App">
           {!isLoginPage && addReview && <AddBook onAddBook = {addBookHandler} onCancel={cancelReviewHandler}/>}
            {!addReview && !isLoginPage && <button className="bookreview" onClick={addReviewhandler}>Add Review</button>}
            {!isLoginPage  && <button className="bookreview" onClick={fetchBookHandler}>Fetch Book Reviews</button> }
            {!isLoginPage  && <button className="bookreview" onClick = {logOutHandler}>Log Out</button>}
            {isLoginPage && <Login getIn={loginHandler}/>}
            {!isLoginPage && !isLoading && books.length>0 &&<BooksList book={books} />}
            {isLoading && <Ring />}
            {!isLoading && error && books.length ===0 && !isLoginPage &&<p className="error">{error}</p>}
            {!isLoading && books.length ===0 && !isLoginPage && <p className="bookbox">Found no Book Reviews</p>}
        </div>
    )
}

export default App;