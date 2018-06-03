import React from 'react';

var ListMenuItem = (props) => {
    return (
        <div>
            <div className = 'list_menu_item'>
                <div><img src={props.item.lien} alt={props.item.description}/></div>
                <li>{props.item.nom}</li>
            </div>
            <style jsx>{`
                .list_menu_item {
                    margin-top: 10px;
                    font-weight: bold;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 1.2rem;
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    cursor: pointer;
                }
                
                .list_menu_item img {
                    background: white;
                    border-radius: 0px;
                    order: 1;
                    flex-grow: 1;
                    height: 2rem;
                    border-radius: 20%;
                    padding: 0.1rem;
                    max-width: 100%;
                    margin-right: 0.4rem
                }
                
                .list_menu_item > li {
                    order: 2;
                    flex-grow: 3;
                    border-left: 0.1rem solid white;
                    padding-left: 0.4rem; 
                    line-height: 0.1rem;
                    font-size: 1.4rem
                }        
            `}</style>
        </div>
    )
}

export default ListMenuItem;