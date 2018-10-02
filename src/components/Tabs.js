import React, { Component } from 'react';
import Design from './Design.js';
import Dev from './Dev.js';


export default class Tabs extends Component {
    constructor(props) {
       super(props);
       this.handleDesignClick = this.handleDesignClick.bind(this);
       this.handleDevClick = this.handleDevClick.bind(this);
       this.state = {
            isDesign: true,
            isActive: true,
        };
     }

     handleDesignClick() {
         this.setState({
            isDesign: false,
            isActive: true
        });
     }

     handleDevClick() {
         this.setState({
            isDesign: true,
            isActive: true
        });
     }

    render(){
        const isDesign = this.state.isDesign;
          
        let content;

          if (isDesign) {
            content = <Design />;
          } else {
            content = <Dev />
          }

        return(
            <div className="content_tabs_wrapper">
                <div className="content_tabs">
                    <button className="content_tab block_link active" onClick={this.handleDevClick}>Design</button>
                    <button className="content_tab block_link" onClick={this.handleDesignClick}>Development</button>
                </div>
                <div className="content_area">
                    {content}
                </div>
            </div>
            
        )
    }
}