import Layout from '../components/Layout';
import Form from '../components/Form';

export default () => {
    return (
        <Layout page_title="Contacts">
            <div>
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
            `}</style>
        </Layout>
    )
}