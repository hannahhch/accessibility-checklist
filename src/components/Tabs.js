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

     handleDesignClick(event) {
        event.currentTarget.blur();
        this.setState({
            isDesign: false,
            isActive: true
        });
     }

     handleDevClick(event) {
        event.currentTarget.blur();
        this.setState({
            isDesign: true,
            isActive: true
        });
     }

    render(){
        const isDesign = this.state.isDesign;
        let designClasses = 'content_tab block_link';
        let devClasses = 'content_tab block_link';
          
        let content;

        if (isDesign) {
            content = <Design />;
            designClasses += ' active';
        } else {
            content = <Dev />;
            devClasses += ' active';
        }

        return(
            <div className="content_tabs_wrapper">
                <div className="content_tabs">
                    <button className={designClasses} onClick={this.handleDevClick}>Design</button>
                    <button className={devClasses} onClick={this.handleDesignClick}>Development</button>
                </div>
                <div className="content_area">
                    {content}
                </div>
            </div>
            
        )
    }
}