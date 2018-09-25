import React, { Component } from 'react';

export default class Design extends Component {
  render(){
    return(
        <section>
            <h2>Color</h2>
                <input type="checkbox" id="color_one"/>
                <label for="color_one">There is <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">sufficient contrast</a> that meets AA criteria throughout the entire site, especially in areas requiring user interaction.</label>
        
                <br/><input type="checkbox" id="color_two"/>
                <label for="color_two">State changes, and user information is obvious and not only differentiated by color. (Ex: form failure = red and success = green) </label>

            <h2>Images</h2>
                <input type="checkbox" id="images_one"/>
                <label for="images_one">Images with overlayed text has sufficient contrast on its own or with drop shadow.</label>
        
            <h2>Font</h2>
            <input type="checkbox" id="font_one"/>
            <label for="font_one">Text is not embeded in graphics unless absolutely necessary</label>
            
            <h2>Links</h2>
                <input type="checkbox" id="links_one"/>
                <label for="links_one">Links are either underlined, or distinguishable. Rollover states increase awareness of element.</label>
                
            <h2>Forms</h2>
                <input type="checkbox" id="forms_one"/>
                <label for="forms_one">Form field borders meet AA contrast ratio</label><br/>

                <input type="checkbox" id="forms_two"/>
                <label for="forms_two">There are obvious focus states for form fields (either custom or default)</label><br/>

                <input type="checkbox" id="forms_three"/>
                <label for="forms_three">If possible, form labels are outside of forms fields and directly above.</label><br/>

            <h2>Error Messages</h2>
                <input type="checkbox" id="error_msg_one"/>
                <label for="error_msg_one">Errors messages are easy to distinguish and are associated with the form field (below is a good choice).</label>
            
        </section>
    )
  }
}