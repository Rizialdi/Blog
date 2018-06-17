import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import Layout from '../components/Layout';

const Template = (props) => {
    return (
    <Layout page_title = {`Posts/${props.source.data.title}`}>
        <Markdown source = {props.source.data.body} className = "markdown" />
        <style global jsx>{`
                .markdown {
                    font-family: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif';
                    font-weight: 200;
                    font-size: 1.6rem;
                    width: 100%;
                    text-align: justify;
                    color: black;
                    max-width: 950px
                }

                .markdown li {
                    color: black;
                    list-style-type: square;
                }

                .markdown pre {
                    background-color: #f5f5f5;
                    opacity: 0.7;
                    border-radius: 4px;
                    border: solid 1px black;
                    padding: 5px;
                    background-size: auto 45px;
                    width: 100%; 
                    overflow-x: auto 
                }

                img {
                    display: block;
                    max-width: 100% ; 
                    height: auto;
                    margin: 0 auto;
                }

                strong {
                    font-weight: bold;
                }
                @media (min-width:900px) {
                    .markdown pre {
                        background-color: #f5f5f5;
                        opacity: 0.7;
                        background-image: url('http://simpleicon.com/wp-content/uploads/Code-Optimization-3-128x128.png');
                        background-repeat:no-repeat;
                        background-position:right center;
                        border-radius: 4px;
                        border: solid 1px black;
                        padding: 5px;
                        background-size: auto 45px;
                        width: 100%;  
                    }
                    }
            `}</style>
    </Layout>
)}

Template.getInitialProps = async function(context) {
  const {identifiant } = context.query
  const res = await fetch(`http://localhost:9000/api/${identifiant}`.toLowerCase())
  const data = await res.json()

  return {
    source: data
  }
}

export default Template