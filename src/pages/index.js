import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import University from '../components/University'
import Projects from '../components/Projects'
import Social from '../components/Social'
import Footer from '../components/Footer'


const Home = () => {

	return (
		<div>
				<Header />
				<About />
				<Services />
				<Certifications />
				<University />
				<Projects />
				<Social />
				<Footer />
		</div>
	)

}

export default Home