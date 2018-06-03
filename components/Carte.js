import Link from 'next/link'

export default (props) => {
    return (
            <div>
                <Link href = {props.adresse}>
                    <a className = 'carte-content'>
                        <div style={{backgroundImage: `url(${props.image})`}} className = 'carte-image'>
                        </div>
                        <div className = 'carte-description'>
                            <h1>{props.titre}</h1>
                            <p>{props.description}</p>
                        </div>
                    </a>
                </Link>
                <style jsx global>{`
                    .carte-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        border-radius: 15px;
                        height: 30rem;
                        width: 17vw;
                        min-width: 20rem;
                        background-color: #d6ecff;
                        padding: 0;
                        box-shadow: 5px 5px 25px 0 rgba(28, 55, 77, 0.6);
                        cursor: pointer;
                        transition: 0.3s box-shadow ease-in-out;
                        margin: 20px 20px 0px 0px;
                        color: black
                    }
                    
                    .carte-image {
                        min-height: 10rem;
                        overflow: hidden;
                        background-size: cover;
                        background-position: 60%;
                        flex-grow: 3;
                        order: 1;
                        border-radius: 20px 20px 0 0;
                        width: 100%;
                    }
                    
                    .carte-description {
                        min-height: 10rem;
                        position: relative;
                        min-width: 0;
                        order: 2;
                        flex-grow: 3;
                        background-color: whitesmoke;
                        border-top: 0.1em solid #d6ecff;
                        border-radius: 0 0 15px 15px;
                    }
                    
                    .carte-description > p {
                        text-align: justify;
                        text-justify: inter-word;
                        padding: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    
                    .carte-description > h1 {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-weight: bold;
                        font-size: 1.7rem;
                        line-height: 0rem;
                    }
                    
                    .carte-description > p {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 1.3rem;
                    }
                    
                    a {
                        text-decoration: none;
                        color: black;
                    }
                    
                    .carte-content:hover {
                        box-shadow: 5px 5px 25px 0 rgba(46,61,73,2);
                    }            
                `}</style>
            </div>
        )
}
