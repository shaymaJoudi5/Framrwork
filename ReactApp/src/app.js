import React from "react";
import "./app.css";
import Carte from "./component/carte";
import Register from "./Register";

function App() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <Carte
                lastName="Robinson"
                firstName="Joel"
                age={53}
                hair="dark brown"
            />
            <Register />
        </div>
    );
}

export default App;
