import React from "react";
import "./style.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    contactStyles: {
        background: "orange"
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag
function Contacts() {
    return (
        <section style={styles.contactStyles} className="section">
            <div className="titleR">
                <h2>Contact Me</h2>
                <ul>
                    <li className="list">
                        <a href="#!">louginescott@gmail.com</a>
                    </li>
                    <li className="list">
                        <a href="#!">https://github.com/sclo00ps</a>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default Contacts;
