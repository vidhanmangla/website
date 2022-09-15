// Import Components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import University_Involvement from './components/University_Involvement';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<University_Involvement />
			<Skills />
			<Projects />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
