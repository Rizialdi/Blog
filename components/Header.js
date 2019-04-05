import React, { Component } from 'react';
import ListMenuItem from './List_menu_item'
import { Link } from '../routes'

class Header extends Component {
    constructor(props) {
        super(props);
        this.close_header = this.close_header.bind(this);
        this.show_header = this.show_header.bind(this);
        this.state = {
            hide: true
        };
    }

    close_header() {
        this.setState({
            hide: !this.state.hide
        })
        this.props.a()
    }

    show_header() {
        this.setState({
            hide: !this.state.hide
        })
        this.props.a()
    }

    render() {
        let avatar = '../static/images/me.jpeg';

        let menu = [
        {
            nom: 'Posts',
            lien: "../static/images/post_icon.png",
            description: "icone_posts"
        },/*
        {
            nom: 'Projets',
            lien: "https://cdn0.iconfinder.com/data/icons/teamwork-9/64/x-23-256.png",
            description: "icone_curriculum"
        },*/
        {
            nom: 'About',
            lien: "../static/images/home_icon.png",
            description: "icone_acceuil"
        },
        {
            nom: 'Contacts',
            lien: "../static/images/mail_icon.png",
            description: "icone_conctacts"
        }]

        let list_menu = menu.map((item) => {
            return (
                <Link route={`/${item.nom}`} key={item.nom} >
                    <a>
                        <ListMenuItem
                            className='list_menu_item'
                            item={item} />
                    </a>
                </Link>
            )
        })

        return (
            <div>
                <div>
                    { !this.state.hide ?
                    (<img src='../static/images/show_header.svg' id="show_header" onClick={this.show_header} />) :
                    (<div className='header'>
                        <img src={avatar} alt="avatar" />
                        <ul>
                            {list_menu}
                        </ul>
                        <img src='../static/images/close_header.svg' id="close_header" onClick={this.close_header}/>
                    </div>)}
                </div>
                <style jsx global>{`
                    .header {
                        display: flex;
                        flex-direction: column;
                        min-width: 250px;
                        background-color: black;
                        align-items: center;
                        transition: 2.5s;
                    }
                    
                    .header > img {
                        margin-top: 3rem;
                        border-radius: 50%;
                        width: 8em;
                    }
                    
                    ul {
                        list-style: none;
                        display: flex;
                        flex-flow: column wrap;
                        justify-content: flex-start;
                        color: white;
                    }
                    
                    a {
                        text-decoration: none;
                        color: white
                    }
                    
                    a:visited {
                        color: white;
                    }
                    
                    .active {
                        color: red;
                        text-decoration: underline
                    } 
                    
                    #close_header {
                        background: white;
                        width: 2em;
                        height: 2em;
                        position: absolute;
                        bottom: 3em;
                        cursor: pointer;
                        transition-duration: 0.7s 
                    }

                    #close_header:focus {
                        background: blue;
                        display:none
                    }

                    #close_header:hover {
                        transform: rotate(360deg);
                        background: grey;
                    }

                    #show_header {
                        background: white;
                        border-radius: 50%;
                        width: 1.8em;
                        height: 1.8em;
                        position: fixed;
                        bottom: 3em;
                        cursor: pointer;
                        transition-duration: 0.7s
                    }

                    #show_header:hover {
                        transform: rotate(360deg);
                        background: grey
                    }
                `}</style>
            </div>
        )
    }
}

export default Header;