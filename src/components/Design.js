import React, { Component } from 'react';

export default class Design extends Component {
  render(){
    return(
        <section>
            <h2>Content</h2>

            <div className="checklist-item">
                <input type="checkbox" id="content_one"/>
                <label for="content_one">When each page is zoomed between 200 and 400%, everything is still readable and functional. </label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_two"/>
                <label for="content_two">Heading structure is logical, with main header at top.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_three"/>
                <label for="content_three">Title text for each page is descriptive and matches main header if appropriate.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_four"/>
                <label for="content_four">A "skip to main content" link has been designed or deemed unneccessary.</label>    
            </div>


            <h2>State Changes</h2>
            <div className="checklist-item">
                <input type="checkbox" id="state_one"/>
                <label for="state_one">Focus states have been designed to follow contrast requirements, or native states are allowed.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_two"/>
                <label for="state_two">Elements have increased visibility when hovered and follow contrast requirements.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_three"/>
                <label for="state_three">Necessary content does not disappear when hovered away. (ex: tooltip)</label>    
            </div>

            <h2>Color</h2>
            <div className="checklist-item">
                <input type="checkbox" id="color_one"/>
                <label for="color_one"> Contrast has been checked with<a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer"> WebAIM's Contrast Checker </a> and it at least meets AA criteria in areas requiring user interaction.</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="color_five"/>
                <label for="color_five">Text has high enough contrast so that it is readable throughout the site.</label>
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
                <label for="font_one">Text is always "true text", so that it is not embeded in graphics.</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="images_three"/>
                <label for="images_three">Text has been provided for infographics if appropriate.</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="images_four"/>
                <label for="images_four">If needed, visual text has been provided with icons (ex: social media)</label>
            </div>

            <h2>Links</h2>

            <div className="checklist-item">
                <input type="checkbox" id="links_one"/>
                <label for="links_one">Links are distinguishable from other page elements (underlined is best).</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="links_two"/>
                <label for="links_two">Links meet contrast requirements before, during and after a hover (unless underlined).</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="links_three"/>
                <label for="links_three">Text is descriptive of the link content instead of "Click Here".</label>
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="links_four"/>
                <label for="links_four">Links have a "large" (44 x 44px) clickable area.</label>
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

            <div className="checklist-item">
                <input type="checkbox" id="forms_four"/>
                <label for="forms_four">If forms are lengthy, section headers are provided for organization</label><br/>
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

            <h2>Animation</h2>
            <div className="checklist-item">
                <input type="checkbox" id="animation_one"/>
                <label for="animation_one">Animated elements are subtle and there is a clear play/pause button if appropriate</label>
            </div>

        </section>
    )
  }
}