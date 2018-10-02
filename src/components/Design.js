import React, { Component } from 'react';

export default class Design extends Component {
  render(){
    return(
        <section>
            <h2>Zoomed Content</h2>
            <div className="checklist-item">
                <input type="checkbox" id="zoom_one"/>
                <label for="zoom_one">When each page is zoomed between 200 and 400%, the site is still readable and functional. </label>    
            </div>

            <h2>State Changes</h2>
            <div className="checklist-item">
                <input type="checkbox" id="state_one"/>
                <label for="state_one">Focus states have been designed with clear contrast in mind, or native states are allowed.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_two"/>
                <label for="state_two">Elements have increased visibility when hovered.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_three"/>
                <label for="state_three">Necessary content does not disappear when hovered away.</label>    
            </div>



            <h2>Color</h2>
            <div className="checklist-item">
                <input type="checkbox" id="color_one"/>
                <label for="color_one">Text has high enough contrast so that it is readable throughout the site. Contrast has been checked with<a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer"> WebAIM </a> and it at least meets AA criteria in areas requiring user interaction.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="color_two"/>
                <label for="color_two">Difference in alert messages are not only differentiated by color. (Ex: form failure = red and success = green) </label>
            </div>

            <h2>Images</h2>

            <div className="checklist-item">
                <input type="checkbox" id="images_one"/>
                <label for="images_one">Images with overlayed text meet the contrast ratio requirement, or have drop shadow for increased readability.</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="font_one"/>
                <label for="font_one">Text is not embeded in graphics.</label>
            </div>

            <h2>Links</h2>
            <div className="checklist-item">
                <input type="checkbox" id="links_one"/>
                <label for="links_one">Links are either underlined, or distinguishable. Rollover states increase awareness of element.</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="links_two"/>
                <label for="links_two">Links meet contrast requirements before, during and after a hover.</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="links_three"/>
                <label for="links_three">Link text is descriptive instead of "Click Here".</label>
            </div>

            <h2>Forms</h2>

            <div className="checklist-item">
                <input type="checkbox" id="forms_one"/>
                <label for="forms_one">Form field borders/boundaries meet the minimum contrast ratio requirements.</label><br/>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="forms_two"/>
                <label for="forms_two">There are obvious focus states for form fields (either custom or default)</label><br/>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="forms_three"/>
                <label for="forms_three">Form labels are directly above form fields, or floated inside.</label><br/>
            </div>

            <h2>Error Messages</h2>

            <div className="checklist-item">
                <input type="checkbox" id="error_msg_one"/>
                <label for="error_msg_one">Errors messages are easy to understand and are associated with the form field (below is a good choice).</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="error_msg_two"/>
                <label for="error_msg_two">Error messages meaning can be understood without color.</label>
            </div>

        </section>
    )
  }
}