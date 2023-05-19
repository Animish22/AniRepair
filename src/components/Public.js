import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ani Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in New Delhi, AniRepairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    AniRepairs<br />
                    A-15 E<br />
                    Vatika Apartments<br />
                </address>
                <br />
                <p>Owner: Animish Sharma</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public