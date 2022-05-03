import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <h1>Halaman Blog</h1>
            <ul> 
                <li><Link to="artikel-1">Artikel 1</Link></li>
                <li><Link to="artikel-2">Artikel 1</Link></li>
                <li><Link to="artikel-3">Artikel 3</Link></li>
                <li><Link to="artikel-4">Artikel 4</Link></li>
            </ul>
        </>
    )
}

export default Blog
