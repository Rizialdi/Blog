import Layout from '../components/Layout';
import Form from '../components/Form';


// <!--{"success? (<p>Messaje envoye</p>):(<p></p>)"}// -->
const Contacts = ({success = false}) => {
    return (
        <Layout page_title="Contacts">
            <div>                
            <div className="modal-container">
                <div className="modal-background">
                    <div className="modal">
                    <h2>Votre message a été envoyé</h2>
                    <p>Je fais tout pour vous repondre au plus vite</p>
                </div> 
                </div>
            </div>
            <p>
                Je reste disponible pour toute informations complementaires
                sur <a href="mailto:rasselio.diack@gmail.com">Gmail</a>.
                <br />
                Je suis aussi très actif sur <a target="_blank" href="https://www.linkedin.com/in/rasselio-diack/">Linkedin</a> pour toute opportunité d'emploi de votre part.
                <br />
                En fin de journée ou pendant le week-end, je fais souvent un tour sur mon <a target="new" href="https://github.com/Rizialdi">Github</a>. N'hesitez pas à y faire un tour pour d'eventuelles collaborations ou juste y jeter un coup d'oeuil.
            </p>
            <Form />
            </div>
            <style jsx>{`
                * {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-weight: 400;
                    font-size: 1.5rem;
                }
                a {
                    color: gray;
                }
                p {
                    max-width: 920px;
                    text-align: justify center;
                    padding-top: 2em;
                    margin: 0 auto;
                }

                html.modal-active, body.modal-active {
                    overflow: hidden;
                }
                
                .modal-container {
                    position: fixed;
                    display: table;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    transform: scale(0);
                    z-index: 1;
                }
                .one {
                    transform: scaleY(0.01) scaleX(0);
                    animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .one .modal-background .modal {
                    transform: scale(0);
                    animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .out {
                    transform: scale(1);
                    animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .out .modal-background .modal {
                    animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .modal-container .modal-background {
                    display: table-cell;
                    background: rgba(0, 0, 0, 0.8);
                    text-align: center;
                    vertical-align: middle;
                }
                .modal-container .modal-background .modal {
                    background: white;
                    padding: 50px;
                    display: inline-block;
                    border-radius: 3px;
                    font-weight: 300;
                    position: relative;
                }
                .modal-container .modal-background .modal h2 {
                    font-size: 25px;
                    line-height: 25px;
                    margin-bottom: 15px;
                }
                .modal-container .modal-background .modal p {
                    font-size: 18px;
                    line-height: 22px;
                }
                .modal-container .modal-background .modal .modal-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border-radius: 3px;
                }
                .modal-container .modal-background .modal .modal-svg rect {
                    stroke: #fff;
                    stroke-width: 2px;
                    stroke-dasharray: 778;
                    stroke-dashoffset: 778;
                }
                
                @keyframes unfoldIn {
                    0% {
                    transform: scaleY(0.005) scaleX(0);
                    }
                    50% {
                    transform: scaleY(0.005) scaleX(1);
                    }
                    100% {
                    transform: scaleY(1) scaleX(1);
                    }
                }
                @keyframes unfoldOut {
                    0% {
                    transform: scaleY(1) scaleX(1);
                    }
                    50% {
                    transform: scaleY(0.005) scaleX(1);
                    }
                    100% {
                    transform: scaleY(0.005) scaleX(0);
                    }
                }
                @keyframes zoomIn {
                    0% {
                    transform: scale(0);
                    }
                    100% {
                    transform: scale(1);
                    }
                }
                @keyframes zoomOut {
                    0% {
                    transform: scale(1);
                    } 
                    100% {
                    transform: scale(0);
                    }
                }
            `}</style>
        </Layout>
    )
}

Contacts.getInitialProps = function (context) {
    const { req } = context;
    let success_message = false
    //const  success_message = req.headers.cookie
    if(req.headers.cookie) { 
        success_message = req.headers.cookie.split('=')[1]
    } else {}


    return {
      success: success_message
    }
  }

export default  Contacts