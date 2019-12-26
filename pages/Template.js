import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAltSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Template = (props) => {
  return (
    <Layout page_title={`${props.source.data.title}`} meta_title={`Posts:${props.source.data.title}`}>
      <div> 
        <Markdown source={props.source.data.body} className="markdown" />
        <div className="nanobar my-class">
            <div className="bar"></div>
        </div>
        <div className="progress-bar"></div>
        <div className="btn-multi">
          <input type="checkbox" id="multi-btn" name="multi-btn" />
          <label htmlFor="multi-btn">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.source.data.url}`} className="btn btn-circle" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></a>
            <a href={`https://twitter.com/intent/tweet?url=${props.source.data.url}&text=${props.source.data.summary}`} className="btn btn-circle" target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter} size="2x" /></a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${props.source.data.url}&title=${props.source.data.title}&summary=${props.source.data.summary}`} className="btn btn-circle" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" /></a>
            <span className="btn btn-circle"><FontAwesomeIcon className="icon" icon={faTimesCircle} size="2x" /></span>
            <FontAwesomeIcon className="icon" icon={faShareAltSquare} size="2x" color="white" />
          </label>
        </div>
      </div>

      <style global jsx>{`
                .markdown {
                    font-family: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif';
                    font-weight: 200;
                    font-size: 1.1rem;
                    width: 100%;
                    text-align: justify;
                    color: black;
                    max-width: 920px;
                    z-index: 1000;
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

                .markdown img {
                    display: block;
                    max-width: 100% ; 
                    height: auto;
                    margin: 3em auto;
                }
                
                strong {
                    font-weight: bold;
                }
                
                .markdown a {
                    color: gray;
                }

                .markdown a:hover {
                  text-decoration: underline;
                }

                .markdown a:visited {
                  color: gray;
                }

                /* Style for floatting action button*/

                .img_floatting_button {
                  transform: rotate(-45deg)
                }
                .btn {
                  display: inline-flex;
                  font-family: 'Roboto', sans-serif;
                  text-decoration: none;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  cursor: pointer;
                  white-space: nowrap;
                  padding: 8px 20px;
                  font-size: 14px;
                  background-color: black;
                  border-radius: 2px;
                  color: white;
                  text-transform: uppercase;
                  border: none;
                  overflow: hidden;
                  transition: all 0.2s ease-in;
                  background-position: 50%;
                  outline: none !important;
                }
                .btn.btn-circle {
                  height: 50px;
                  width: 50px;
                  border-radius: 50%;
                  padding: 0 !important;
                  font-size: 18px;
                }             
                
                .btn-multi input {
                  display: none;
                }
                .btn-multi input:not(:checked) ~ label {
                  transform: rotate(0);
                }
                .btn-multi input:not(:checked) ~ label .btn {
                  border-radius: 0;
                  height: 30px;
                  width: 30px;
                  box-shadow: none;
                }
                .btn-multi input:not(:checked) ~ label .btn:first-child {
                  border-top-left-radius: 100%;
                  transform: translate(25px, 25px);
                }
                .btn-multi input:not(:checked) ~ label .btn:nth-child(2) {
                  border-top-right-radius: 100%;
                  transform: translate(55px, 25px);
                }
                .btn-multi input:not(:checked) ~ label .btn:nth-child(3) {
                  border-bottom-left-radius: 100%;
                  transform: translate(25px, 55px);
                }
                .btn-multi input:not(:checked) ~ label .btn:nth-child(4) {
                  border-bottom-right-radius: 100%;
                  transform: translate(55px, 55px);
                }
                .btn-multi input:not(:checked) ~ label .btn .icon {
                  opacity: 0;
                }
                .btn-multi input:not(:checked) ~ label > .icon {
                  opacity: 1;
                  cursor: pointer;
                }
                .btn-multi label {
                  position: fixed;
                  bottom: 5%;
                  right: 5%;
                  height: 110px;
                  width: 110px;
                  display: block;
                  transform: rotate(45deg);
                  transition: all 0.2s ease-in;
                  cursor: default;
                  border-radius: 30px;
                  z-index: 2000
                }
                .btn-multi label .btn {
                  position: absolute;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                }
                .btn-multi label .btn:nth-child(2) {
                  transform: translate(60px, 0);
                }
                .btn-multi label .btn:nth-child(3) {
                  transform: translate(0, 60px);
                }
                .btn-multi label .btn:nth-child(4) {
                  transform: translate(60px, 60px);
                }
                .btn-multi label .btn .icon {
                  opacity: 1;
                  transition: all 0.15s ease-in-out;
                  transform: rotate(-45deg);
                }
                .btn-multi label > .icon {
                  position: absolute;
                  border-radius: 50%;
                  display: flex;
                  font-size: 30px;
                  align-items: center;
                  justify-content: center;
                  height: 60px;
                  width: 60px;
                  top: 25px;
                  left: 25px;
                  opacity: 0;
                  transition: all 0.25s ease-in-out;
                }
                .btn-multi label .icon {
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                }

                /*Media-queries for screen settings */
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
    </Layout >
  )
}

Template.getInitialProps = async function (context) {
  const { identifiant } = context.query
  const res = await fetch(`http://localhost:3000/api/${identifiant}`.toLowerCase())
  let data = await res.json()

  return {
    source: data
  }
}

export default Template