import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Blog from './Blog'
import Todo from './Todo'
import Button from './Button'
import About from './About'
import Team from './Team'
import BlogDetail from './BlogDetail'
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/button">Button</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="todo" element={<Todo />} />
            <Route path="button" element={<Button />} />
            <Route path="about" element={<About />} >
             <Route path="team" element={<Team />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
