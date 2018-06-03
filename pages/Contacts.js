import Layout from '../components/Layout';

export default () => {
    return (
        <Layout page_title = "Contacts">
            <p>
                Je reste disponible pour toute informations complementaires
                    sur <a href = "mailto:rasselio.diack@gmail.com">Gmail</a>
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