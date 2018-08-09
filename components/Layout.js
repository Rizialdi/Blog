import Header from './Header'
import PageTitle from './PageTitle'

export default (props) => {

    return (
        <div className="App">
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
                    justify-items: center;
                }
                li {
                    color: white;
                }
                @media (min-width:958px) {
                    .overlay-content {
                        visibility: hidden;
                    }
                }
                @media (max-width:960px) {
                    .header {
                        visibility:hidden;
                        width: 0px
                    }
                    .App {
                        display:block
                    }
                    .App > .pageTitle {
                        height: 4em;
                        align-items: center;
                        display: flex;
                        position: relative;
                        align-items: center;

                    }
                    .menu_icon, .menu_icon_close {
                        color: black !important;
                        line-height: 2rem;
                        background-color: white;
                    }
                    }
            `}</style>
        </div>
    )
}