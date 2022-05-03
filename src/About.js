import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <>
            <h1>Ini Halaman about</h1>
            <p>halo ini adalah halaman Team, untuk di bawah:</p>
            <ul>
                <li>
                    <Link to="/about/team">Team</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default About