import Layout from '../components/Layout';

export default () => {
    return (
        <Layout page_title="About">
            <p>
                Je suis titulaire d'un Master en <a href="http://master-spim.formation.univ-lorraine.fr/pcm-2/" target="_blank">Physique et Chimie des Matériaux </a>
                à l'<a href="https://fr.wikipedia.org/wiki/Universit%C3%A9_de_Lorraine" target="_blank">Université de Lorraine</a>.
                <br /><br />
                L'objectif de ce blog est de presenter certains concept d'apprentissage automatique et leur utilité.
            </p>
            <style jsx>{`
                * {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-weight: 400;
                    font-size: 1.5rem;
                    max-width: 920px;
                }
                a {
                    color: gray;
                }
                strong {
                    font-weight: 600;
                    font-family: BlinkMacSystemFont
                }
                em {
                    font-style: italic;
                }
            `}</style>
        </Layout>
    )
}