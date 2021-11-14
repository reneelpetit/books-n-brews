import React from 'react';
import { Link } from 'react-router-dom';

function Brews() {
    return (
        <div id="products">
            <h1>Browse our products</h1>
            <div className="list-container">
                <table>
                    <caption>Brews</caption>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <button>
            <Link className="App-link" id="link" to="/">Home Page</Link>
            </button>
            <button>
            <Link className="App-link" id="link" to="/books">Books</Link>
            </button>
        </div>
    );
}

export default Brews;