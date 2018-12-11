import Head from 'next/head';
import Header from './Header'
import PageTitle from './PageTitle'

export default (props) => {

    return (
        <div className="App">
            <Head>
                <title>{props.page_title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="../static/images/simple_rn.png" />
            </Head>
            <Header className="header" />
            <PageTitle active_item={props.page_title} />
            <div className='corps-page'>
                {props.children}
            </div>
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
                    z-index: 99;
                    right: 0;
                    
                }
                
                .App .corps-page {
                    font-family: 'Ubuntu';
                    font-weight: 200;
                    grid-column: 2 / 3;
                    grid-row: 2 / 3;
                    padding: 10px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                    justify-items: center;margin: auto;
                }
                li {
                    color: white;
                }

                .menu_icon, .menu_icon_close {
                        visibility: hidden
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
                    .App > .pageTitle {
                        height: 3.5em;
                        align-items: center;
                        display: flex;
                        align-items: center;

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
            `}</style>
        </div>
    )
}