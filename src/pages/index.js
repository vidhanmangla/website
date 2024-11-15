import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Certifications from '../components/Certifications'
import University from '../components/University'
import Projects from '../components/Projects'
import Social from '../components/Social'
import Referral from '../components/Referrals'
import Footer from '../components/Footer'


const Home = () => {

	return (
		<div>
			<Header />
			<About />
			<Certifications />
			<University />
			<Projects />
			<Social />
			<Referral />
			<Footer />
		</div>
	)

}

export default Home
