import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="container_projet">
                <div className="container_projet_image"><img src="http://via.placeholder.com/350x350" alt="project_view" /></div>
                <div className="container_projet_description">
                    <h2>{props.titre}</h2>
                    <p>{props.description}</p>
                    <a href={props.adresse} target="_blank"><button>... plus</button></a>
                </div>
            </div>
            <style jsx>{`
                .container_projet {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: start;
                    margin-bottom: 6vh
                }
                .container_projet img{
                    height: 100%;
                    border-radius: 5%;
                }

                .container_projet_image {
                    order: 1;
                    flex-grow: 2;
                    height: 13rem;
                    padding: 0.1rem;
                    max-width: 40vw;
                    margin-right: 0.4rem;


                }

                .container_projet_description {
                    order: 2;
                    flex-grow: 3;
                    border-left: 0.1rem solid white;
                    padding-left: 0.4rem;
                    font-size: 1.4rem;
                    text-align: justify;
                    max-width: 50vw;
                    min-width: 8px;
                    position: relative;
                    text-justify: inter-word;
                }
                .container_projet_description button {
                    position: absolute;
                    right: 0rem;
                    cursor: pointer;
                }
                .container_projet_description h2 {
                    margin-top: 10px;
                }
                
            `}</style>
        </div>
    )
}
