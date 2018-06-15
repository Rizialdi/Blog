import React from 'react';

var PageTitle = (props) => {
    return (
        <div className='pageTitle'>
            <h1>{props.active_item}</h1>
            <style jsx>{`
                .pageTitle {
                    background-color: #f3f3f3;
                    text-align: center;
                    border-bottom: 2px solid black;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-top: 0px
                }
            `}</style>
        </div>
    )
}

export default PageTitle;