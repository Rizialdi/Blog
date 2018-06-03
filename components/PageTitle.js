import React from 'react';

var PageTitle = (props) => {
    return (
        <div>
            <div className='pageTitle'>
                <h1>{props.active_item}</h1>
            </div>
            <style jsx>{`
                .pageTitle {
                    background-color: #f3f3f3;
                    text-align: center;
                    border-bottom: 0.3rem dashed black;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
                }
            `}</style>
        </div>
    )
}

export default PageTitle;