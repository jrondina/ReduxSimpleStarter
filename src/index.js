/**
 * Created by jamesrondina on 7/2/17.
 */

import React from "react";
import ReactDOM from "react-dom";

import Searchbar from './components/search_bar';

const API_KEY = 'APIKEY';

// Create a new component. This component should produce some HTML

const App = () => {
        return (
        <div>
            <Searchbar/>
        </div>
        );
};

// Take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));