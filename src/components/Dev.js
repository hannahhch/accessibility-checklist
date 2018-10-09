import React, { Component } from 'react';

export default class Dev extends Component {
  render(){
    return(
        <section>
            <h2>Content</h2>
            <div className="checklist-item">
                <input type="checkbox" id="content_one"/>
                <label for="content_one">All content is grouped in an HTML5 region (main, section, etc.) </label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_two"/>
                <label for="content_two">There is only one H1 per page (unless there is an exception), and it closely matches the page title</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_three"/>
                <label for="content_three">No heading levels are skipped (can go backwards)</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="content_four"/>
                <label for="content_four">The body lang attribute has been set</label>    
            </div>

            <h2>Images</h2>

            <div className="checklist-item">
                <input type="checkbox" id="image_one"/>
                <label for="image_one">Images have alt text, or an empty string if content is described in the context of its surroundings</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="image_two"/>
                <label for="image_two">All alt text is accurate and brief</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="image_three"/>
                <label for="image_three">If background images contain necessary content, a screen reader only text element is aria label has been provided</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="image_four"/>
                <label for="image_four">If background images contain necessary content, a screen reader only text element is aria label has been provided</label>    
            </div>

            <h2>State Changes</h2>
            
            <h2>Color</h2>
            

            

            <h2>Links</h2>

            
            <h2>Forms</h2>

            
            <h2>Error Messages</h2>

            <h2>Animation</h2>
            

        </section>
    )
  }
}