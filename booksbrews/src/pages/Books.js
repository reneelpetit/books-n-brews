import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Books() {
    const [name, setName] = useState('');

    return (
        <div id="stores">
            <h1>Checkout our books</h1>
            <div className="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>State</th>
                            <th>Zipcode</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div classname="zipcodeform">
                <form>
                    <fieldset id="zipFieldset">
                        <legend>Search for a store</legend>
                        <label>Enter Zip:
                            <br/>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="enter your zip"/>
                        </label>
                    <button id="zipcodeButton" onClick={e => {
                        setName(e.target.value);
                        alert(`The zipcode you entered is: ${name}`);
                        e.preventDefault();
                    }}>
                        Search
                    </button>
                    </fieldset>
                </form>
            </div>
            <button>
                <Link className="App-link" id="link" to="/">Home Page</Link>
            </button>
            <button>
                <Link className="App-link" id="link" to="/brews">Product List</Link>
            </button>
        </div>
    );
}

export default Books;