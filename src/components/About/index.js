import React from "react";
import "./style.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
     <img src="./lougine.jpg" class="fluid" />
                <h2>About Me</h2>
                <p>
                    An Information Technology Consultant who has provided Project Manager, Product Owner, Scrum Master, 
                    Business Analyst, Test Management/Execution, and previous Developer services.  Consulting services have
                    been provided to Fortune 500 and Fortune 1000 corporate clients both domestic and international locations
                    in several industries. Projects have included legacy system application and platform conversions, CSV 
                    validation, digital transformation, process re-engineering, infrastructure, disaster recovery, systems 
                    security, mobile, web development, UX/UI design, data conversion/migration/validation, and testing
                    (manual/automated). 
                    </p>
                    <p> 
                    A desire to return to my initial passion of software development which is where my career  began is the 
                    catalyst for studying to obtain these new skills. The ability to collaborate and make a contribution 
                    creating during these amazing times of technological advancements and global growth is exciting.  I look
                    forward to integrating these Full Stack Web Development skills with my existing expertise and continuously
                    learning so much more in an amazing opportunity.  
                    </p>
                    <p> 
                    I believe that everything is possible!! This includes the good, the bad, and the ugly, however,
                    our everything result will be defined by the resources we have to work with and the choices we make
                    in the utilization of those resources. Communication is key and will allow us to reduce the number of obstacles that we face
                    in our professional and personal lives. Being open to change, out-of-the-box thinking, having the
                    willingness to expand boundaries and accept inputs from others increases successful outcomes.
                </p>
            </section>
   
  );
}

export default Section;
