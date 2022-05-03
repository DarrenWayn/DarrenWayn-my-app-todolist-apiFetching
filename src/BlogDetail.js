import { useParams } from "react-router-dom";

function BlogDetail() {
    const urlParams = useParams()
    return (
        <>
            <h1>Halaman Blog Detail</h1>
            <p>Halo ini detail {urlParams.slug}</p>
        </>
    )
}

export default BlogDetail
