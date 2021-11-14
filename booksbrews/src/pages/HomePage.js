import React from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';

function HomePage() {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li><Link className="App-link" id='link' to="/">Home</Link></li>
                    <li><Link className="App-link" id='link' to="/brews">Brews on Tap</Link></li>
                    <li><Link className="App-link" id='link' to="/books">Shop Books</Link></li>
                    <li><Link className="App-link" id='link' to="/reserve">Reserve Study Space</Link></li>
                </ul>
            </div>
            <div className="homepage">
                <button>
                    <Link className="App-link" id='link' to="/brews">Products</Link>
                </button>
                <button>
                    <Link className="App-link" id='link' to="/books">Locations</Link>
                </button>
                <footer>Photo by <a href="https://unsplash.com/@mikepetrucci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Petrucci</a> on <a href="https://unsplash.com/s/photos/store-open-sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;