import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import Layout from '../components/Layout';

const Template = (props) => {
    return (
    <Layout page_title = {`Posts/${props.source.data.title}`}>
        <Markdown source = {props.source.data.body} className = "markdown" />
        <style global jsx>{`
                .markdown {
                    font-family: 'Ubuntu';
                    font-weight: 200;
                    font-size: 1.6rem;
                    width:50rem;
                    text-align: justify;
                    color: black
                }
                .markdown li {
                    color: black;
                    list-style-type: hiragana
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