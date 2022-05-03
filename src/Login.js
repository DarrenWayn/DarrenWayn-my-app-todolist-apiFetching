import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();

        const checkLogin = true
        if (checkLogin) {
            navigate('/dashboard')
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input type="text" name="username"></input>
                <input type="password" name="password"></input>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login