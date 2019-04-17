import React, { Component } from 'react';

class Search extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            filterTerm: '',
    };
      this._handleChange = this._handleChange.bind(this);
};

    _handleChange(e){
        const filterTerm = e.target.value;
        this.setState({filterTerm})
    }
    
    render() {
        return (
            <div className='search_component'>
                <div className="search">
                    <input type = "text" name = "filter_search" value = {this.state.filterTerm} maxLength = "100" onChange={this._handleChange}/>
                    <img src="../static/images/search.svg" alt="search_icon" height="42" width="42" /> 
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
                    }
                    @keyframes blink { 
                        50% { border-bottom: solid #000000 0.1em; } 
                    }
                    input:focus {
                        background-color: #dadada;
                        animation: blink 0.5s step-end infinite alternate;
                        border: solid #dadada;
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
                `}</style>
            </div>
        )
    }
}

export default Search;