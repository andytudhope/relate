import { ZupassLoginButton, useZupass } from 'zukit'
import Main from '../layouts/Main'

const Home = () => {
    const [zupass] = useZupass();
    return (
        <Main>
            <div>
                <ZupassLoginButton anonymous namedGroup="residents" />
            </div>
            {zupass.status === "logged-in" && zupass.anonymous && (
                <h2>Welcome, anon</h2>
            )}
        </Main>
    )
}

export default Home
