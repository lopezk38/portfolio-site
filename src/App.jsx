import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
	return (
		<div className="app">
			<nav className="navbar">
				<Link to="/" className="nav-logo">Kenneth Lopez's Portfolio</Link>
				<div className="nav-links">
					<HashLink to="/#about">About</HashLink>
					<HashLink to="/#projects">Projects</HashLink>
					<HashLink to="/#contact">Contact</HashLink>
					<HashLink to="/blog/#blog">Blog</HashLink>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</div>
	);
}

export default App;