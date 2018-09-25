import React, { Component } from 'react';
import Design from './Design.js';

export default class Tabs extends Component {
    constructor(props) {
    super(props);
  
    this.state = {
     isActive: false
   };
 }

    render(){

        return(
            <div>
                <div className="content_tabs">
                    <div className="content_tab block_link">Design</div>
                    <div className="content_tab block_link">Development</div>
                </div>
                <div className="content_area">
                    <Design/>
                </div>
            </div>
            
        )
    }
}