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

            <div className="checklist-item">
                <input type="checkbox" id="content_five"/>
                <label for="content_five">Visualy hidden content is also hidden from screen readers</label>    
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

            <div className="checklist-item">
                <input type="checkbox" id="image_five"/>
                <label for="image_five">Icons without text have been given an aria-label</label>    
            </div>

            <h2>State Changes</h2>

            <div className="checklist-item">
                <input type="checkbox" id="state_one"/>
                <label for="state_one">Focus-able elements have visual states</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_two"/>
                <label for="state_two">Popup modals can be closed with the esc key</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="state_three"/>
                <label for="state_three">Important information that appears on hover, can also be triggered on click</label>    
            </div>
            
            <h2>CSS</h2>

            <div className="checklist-item">
                <input type="checkbox" id="css_one"/>
                <label for="css_one">Page elements do not have fixed dimensions</label>    
            </div>
            
            <div className="checklist-item">
                <input type="checkbox" id="css_two"/>
                <label for="css_two">Uppercase text has been added with CSS instead of HTML</label>    
            </div>

            <h2>Tables</h2>

            <div className="checklist-item">
                <input type="checkbox" id="table_one"/>
                <label for="table_one">All data has been associated with a table header</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="table_two"/>
                <label for="table_two">There are no empty table header cells</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="table_three"/>
                <label for="table_three">Table is used to present tabular data, or has been given the role of presentation.</label>    
            </div>

            <h2>Forms</h2>
            <div className="checklist-item">
                <input type="checkbox" id="form_one"/>
                <label for="form_one">All form input elements have an associated label, or screen reader label</label>    
            </div>

            <div className="checklist-item">
                <input type="checkbox" id="form_two"/>
                <label for="form_two">All forms are 100% navigatable by keyboard.</label>    
            </div>

        </section>
    )
  }
}