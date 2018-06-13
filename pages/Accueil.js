import Layout from '../components/Layout';

export default () => {
    return (
        <Layout page_title = "Acceuil">
            <p>
                Je suis un enfant de la rue, je dessine et passe du 
                temps avec les enfants; Je possède une moto et je vis
                au gré des vagues d'air -- King
                <br />
            </p>
            <style jsx>{`
                * {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-weight: 400;
                    font-size: 1.5rem;
                }
                a {
                    color: darkblue;
                }
            `}</style>
        </Layout>
)
}