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
        this.setState({ filterTerm }); 
        this.props.b(e)
    }

    render() {
        return (
            <div className='search_component'>
                <div>
                    {this.state.search_click ? <input type="text"
                        name="filter_search" value={this.state.filterTerm} placeholder="tag or subjects" 
                        maxLength="10" onChange={this._handleChange} /> : ''}
                    {this.state.search_click?
                            <img src="../static/images/cancel.svg"
                             alt="close_icon" className="close_icon"
                              onClick={() => { this.setState({ search_click: !this.state.search_click}) }} /> :
                            <img src="../static/images/search.svg"
                             alt="search_icon" className="search_icon"
                             onClick={() => { this.setState({search_click: !this.state.search_click }) }} /> 
                }
                    
                       </div>
                <style jsx>{`
                    input {
                        width: 7em;
                        height: 3em;
                        position: relative;
                        top: -15px;
                        font-size: 1.4em;
                        font-family: Rancho, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        text-transform: capitalize;
                        padding: 0px;
                        border: solid #f7f7f7;
                        border-bottom: solid black 0.1em;
                        background-color: #f7f7f7;
                        border-radius: 0.5em 0.5em 0 0;
                        transition-duration: 0.7s;
                        margin-right: 1em;

                    }
                    @keyframes blink { 
                        50% { border-bottom: solid #000000 0.1em; } 
                    }
                    input:focus {
                        background-color: #f7f7f7;
                        animation: blink 0.5s step-end infinite alternate;
                        border-bottom: dashed #f5f5f5;
                        width: 10em;
                        transition-duration: 0.7s;
                    }
    
                    img {
                        cursor:pointer;
                    }
                    .search_component {
                        background-color: #f7f7f7;
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
                        position: relative;
                        top: 1.0em;
                        height: 2em;
                        width: auto;
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

                    @media (max-width:980px) {
                        .search_component {
                            display: none
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Search;