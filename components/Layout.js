import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header'
import PageTitle from './PageTitle'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extends: true
        };
    }

    extends_corps_page = () =>{
        this.setState({
            extends: !this.state.extends
        })
    }

    render(){
        const {props} = this;

        return (
            <div className="App">
                <Head>
                    <title>{props.meta_title == null ? props.page_title : props.meta_title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" type="image/png" href="../static/images/cercle.ico" />
                    <link href="https://fonts.googleapis.com/css?family=Rancho&display=swap" rel="stylesheet"/> 
                </Head>
                <Header a = {this.extends_corps_page} className={this.state.extends? "header":""} />
                <PageTitle active_item={props.page_title} extends={this.state.extends} /> 
                <div className={this.state.extends? 'corps-page':'corps-page-extends'}>
                    {props.children}
                </div>
                <script src="../static/js/nanobar.min.js"></script>
                <script src="../static/js/custom.js"></script>
                <script src="../static/js/movement.js"></script>
                <script src="../static/js/modal.js"></script>
                <style global jsx>{`
                    .App {
                        background-color: white;
                        min-height: 100% !important;
                        display: grid;
                        grid-template-columns: [col-start] 250px [col-header-fin]  auto;
                        grid-template-rows: [row-start] 6rem [col-pageTitle-fin] auto;
                    }
                    
                    .header {
                        position: fixed;
                        width: 250px;
                        height: 100%;
                        top: 0;
                        left: 0;
                    }
                    
                    .App > .pageTitle {
                        grid-column: col-header-fin / 3;
                        grid-row: row-start / 2;
                        left: 250px;
                        right: 0;
                        
                    }

                    .App > .pageTitle-extends {
                        grid-column: col-start / 3;
                        grid-row: row-start / 2;
                        left: 20px;
                        right: 0;
                        
                    }
                    
                    .App .corps-page {
                        font-family: 'Ubuntu';
                        font-weight: 200;
                        grid-column: 2 / 3;
                        grid-row: 2 / 3;
                        padding: 10px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
                        justify-items: center;
                        transition: 1.5s;
                    }

                    li {
                        color: white;
                    }
    
                    .menu_icon, .menu_icon_close {
                            visibility: hidden
                        }

                    .App .corps-page-extends {
                        margin-left: 3em;
                        margin-right: 3em;
                        transition-duration: 1.5s;
                        font-family: 'Ubuntu';
                        font-weight: 200;
                        grid-column: 1 / 3;
                        grid-row: 2 / 3;
                        padding: 10px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
                        justify-items: center;
                        transition: 1.5s;
                    }
    
                    @media (min-width:985px) {
                        .overlay-content {
                            visibility: hidden;
                        }
                    }
                    @media (max-width:980px) {
                        .header {
                            visibility:hidden;
                            width: 0px
                        }
                        .App {
                            display:block
                        }
                        .App > .pageTitle, .App > .pageTitle-extends {
                            height: 3.5em;
                            align-items: center;
                            display: flex;
                            align-items: center;
                            left:0px;
                            right:0px
                        }
                        .App .corps-page {
                            margin-top: 5em
                        }
                        .menu_icon, .menu_icon_close {
                            color: black !important;
                            line-height: 2rem;
                            visibility: visible
                        }
                        }

                        .progress-bar {
                            background: linear-gradient(to right, green var(--scroll), transparent 0);
                            background-repeat: no-repeat;
                            width: 100%;
                            position: fixed;
                            top: 0;
                            left: 0px;
                            height: 4px;
                            z-index: 1;
                        }
      
                        .my-class .bar {
                          background: black;
                        }
                `}</style>
            </div>
        )
    }
}