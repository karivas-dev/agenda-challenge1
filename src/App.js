import './App.css';
import {useState} from "react";
import {ContactList} from "./components/ContactList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ContactList/>
            </header>
        </div>
    );
}

export default App;
