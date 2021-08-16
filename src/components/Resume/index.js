import React from "react";
import "./style.css";
//import Image from "react-bootstrap/Image";

const styles = {
    resumeStyles: {
        background: "orange"
    }
};

function Resume() {
    return (
        <section style={styles.resumeStyles} className="section">
            <div>
                    <h2>Resume</h2>
                    <a target download href="./Lougine Scott.pdf/"><img src="./cv_one1.jpg" class="fluid" />
                    </a>
                </div>
              
        </section>
    );
};

export default Resume;