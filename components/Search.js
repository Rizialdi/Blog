import React, { Component } from 'react';

class Search extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            filterTerm: '',
            search_click: false
        };
        this._handleChange = this._handleChange.bind(this);
    };

    _handleChange(e) {
        const filterTerm = e.target.value;
        this.setState({ filterTerm })
    }

    render() {
        return (
            <div className='search_component'>
                <div className="search">
                    {this.state.search_click ? <input type="text"
                        name="filter_search" value={this.state.filterTerm} placeholder="tag or sujects" 
                        maxLength="10" onChange={this._handleChange} /> : ''}
                    {this.state.search_click?
                            <img src="../static/images/cancel.svg"
                             alt="search_icon" className="close_icon"
                              onClick={() => { this.setState({ search_click: !this.state.search_click }) }} /> :
                            <img src="../static/images/search.svg"
                             alt="close_icon" className="search_icon"
                             onClick={() => { this.setState({ search_click: !this.state.search_click }) }} /> 
                }
                    
                       </div>
                <style jsx>{`
                    input {
                        width: 10em;
                        height: 3em;
                        position: relative;
                        top: -15px;
                        font-size: 1em;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        padding: 0px;
                        border: solid #dadada;
                        border-bottom: solid black 0.1em;
                        background-color: #dadada;
                        border-radius: 0.5em 0.5em 0 0;
                        transition-duration: 0.7s;
                    }
                    @keyframes blink { 
                        50% { border-bottom: solid #000000 0.1em; } 
                    }
                    input:focus {
                        background-color: #dadada;
                        animation: blink 0.5s step-end infinite alternate;
                        border: solid #dadada;
                        width: 15em;
                        transition-duration: 0.7s;
                    }
    
                    img {
                        cursor:pointer;
                    }
                    .search_component {
                        background-color: #dadada;
                        position: fixed;
                        display: inline-block
                        padding: 0px
                        width: 3em;
                        height: 3em;
                        overflow:hidden;
                        right: 3em;
                        top: 2em;

                    }
                    .search_icon {
                        height: 2em;
                        width: auto
                    }
                    .close_icon {
                        height: 1.4em;
                        width: auto
                    }
                    .close_icon:hover {
                        transform: rotate(360deg);
                        transition-duration: 0.7s;
                        width: auto
                    }
                `}</style>
            </div>
        )
    }
}

export default Search;