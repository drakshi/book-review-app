import React from 'react';
import './Login.css';

function Login(props) {
    return (
        <div className='login__panel'>
            <h1>Post and Get Reviews of Your Fav Books</h1>
            <p>Get in to the exciting platform of reading Reviews of various books posted by different community of people.
                Get and Share your Ideas, your reviews and thoughts are safely saved by us.
            </p>
            <button onClick={props.getIn} className="login__panelButton">Get In</button>
        </div>
    )
}

export default Login
