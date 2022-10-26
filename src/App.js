// Import Components
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
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
			<Services />
			<Projects />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
