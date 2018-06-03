import Layout from '../components/Layout';
import Carte from '../components/Carte';
import preload from '../static/dummy.json';

export default () => {

    let cartes = preload.cartes.map((carte) => <Carte titre = {carte.titre} 
                                                        key = {carte.titre}
                                                        description = {carte.description}
                                                        image = {carte.image}
                                                        adresse = {`/Posts/${carte.titre}`.replace(' ', '_')}   />)


    return (
        <Layout page_title = "Posts">
            {cartes}
        </Layout>
)
}