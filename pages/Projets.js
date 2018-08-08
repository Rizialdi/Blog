import Layout from '../components/Layout';
import Project from '../components/Project';
import preload from '../static/dummy.json';

export default () => {

    let projets = preload
        .projets.map((projet) => <Project titre={projet.titre}
            key={projet.titre}
            description={projet.description}
            image_url={projet.image_url}
            adresse={`https://github.com/Rizialdi/${projet.titre}`.replace(' ', '_')} />)

    return (
        <Layout page_title="Projets">
            <div>
                <p>I've worked a lot !!!</p>
                {projets}
            </div>
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