import React from "react";
import "./style.css";
//import Image from "react-bootstrap/Image";

const styles = {
    projectStyles: {
        background: "orange"
    }
};

function Projects() {
    return (
        <section style={styles.projectStyles} className="section">
            <div>
                <div className="container-2">
                    <h2>Projects</h2>
                    <a href="https://sclo00ps.github.io/fashion-saturation-050521/">
                        <img src="./fashion_sat.jpg" class="fluid" />
                    </a>
                </div>

                <div>
                    <a href="https://go-yasi.github.io/perfect-night-in/">
                        <img src="./perfect-night-in2.jpg" class="fluid" />
                    </a>
                </div>

                <div>
                    <a href="https://upper-beaver-88035.herokuapp.com/">
                        <img src="./givehub.JPG" class="fluid" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;