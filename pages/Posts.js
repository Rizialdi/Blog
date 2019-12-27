import React, { Component } from 'react';
import Layout from '../components/Layout';
import Carte from '../components/Carte';
import preload from '../static/dummy.json';
import Search from '../components/Search';

export default class Posts extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            filterTerm: '',
        }
    }
    filter = (e) => {
        this.setState({filterTerm: e.target.value});
    }
    render() {
        let cartes = preload
            .cartes
            .filter(blog_article => `${blog_article.titre} ${blog_article.tags}`.toUpperCase().indexOf(this.state.filterTerm.toUpperCase()) >= 0)
            .map((carte) => <Carte titre={carte.titre}
                key={carte.titre}
                description={carte.description}
                image={carte.image}
                adresse={`/Posts/${carte.titre}`.replace(' ', '_')} />)

        return (
            <Layout page_title="Posts">
                <Search b={this.filter.bind(this)} />
                {cartes}
                <script src="../static/js/movement.js"></script>
            </Layout>
        )
    }
}
