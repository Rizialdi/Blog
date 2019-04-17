import React from 'react';
import Search from './Search'
var PageTitle = (props) => {
    return (
        <div className={props.extends? "pageTitle":"pageTitle-extends"}>
            <h1>{props.active_item}</h1>
            <Search/>
            <div className="floating_menu">
                <input type="checkbox" id="menu_dir" name="multi-btn" />
                <label htmlFor="menu_dir">
                    <span className="menu_icon_close">&#10006;</span>
                    <span className="menu_icon">&#9776;</span>
                    <div className="overlay-content">
                        <a href="/Accueil">Accueil</a>
                        <a href="/Posts">Posts</a>
                        <a href="/Contacts">Contacts</a>
                    </div>
                </label>
            </div>
            <style jsx>{`
                .pageTitle {
                    background-color: #dadada;
                    text-align: center;
                    border-bottom: 2px solid black;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-top: 0px;
                    position: fixed;
                    top: 0px;
                    left: 250px;
                }

                .pageTitle-extends {
                    background-color: #f3f3f3;
                    text-align: center;
                    border-bottom: 2px solid black;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-top: 0px;
                    top: 0px;
                    width:60%;
                    margin:0 auto;
                    position: fixed;
                    transition: 1.5s;
                }

                @media (max-width:980px) {
                    .pageTitle, .pageTitle-extends {
                        left: 0px;
                        margin:0px;
                    }

                    .pageTitle h1, .pageTitle-extends h1 {
                        margin-left: 0.3em
                    }
                }
                .menu_icon, .menu_icon_close{
                        height: 0px;
                        cursor: pointer;
                        font-size: 2.5rem;
                        color: black;
                        transition: 0.7s;
                        position: absolute;
                        top: 1rem;
                        right: 0rem;
                        z-index: 100;
                        margin-right: 0.2em;
                    }
                    
                    .floating_menu label .overlay-content {
                        text-align: center;
                        padding-top: 10px;
                        margin-top: 30px;
                        background-color: #333;
                        overflow-x: hidden;
                        z-index: 10;
                        position: absolute;
                        right: 0;
                        top: 2rem;
                        width: 100%;
                        opacity: 0.7
                    }
                    
                    .overlay-content a {
                        font-size: 2rem;
                        color:#fff;
                        display: block;
                        padding:10px;
                        margin-bottom: 4px;
                        text-decoration: none;
                        transition: .3s;
                        position: relative;
                    
                    }
                    .overlay-content a:after{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 0%;
                        transform: translateX(-50%);
                        height: 3px;
                        background:#fff;
                        transition: .3s;
                        display: block;
                    
                    }
                    .overlay-content a:hover{
                        color: gray;
                    }
                    
                    .overlay-content a:hover:after{
                        width: 25%;
                    }

                    .floating_menu input:not(:checked) ~ label .overlay-content {
                      display:none
                    }
                    
                    .floating_menu input:not(:checked) ~ label .menu_icon {
                      opacity: 1
                    }
                    
                    .floating_menu label .menu_icon {
                      opacity: 0
                    }
                    
                    .floating_menu input:not(:checked) ~ label .menu_icon_close {
                      opacity: 0
                    }
                    
                    .floating_menu label .menu_icon_close {
                      opacity: 1
                    }
                    
                    .floating_menu input {
                      display:none
                    }
            `}</style>
        </div>
    )
}

export default PageTitle;