// Import Components
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Blog from './pages/blog'


function App() {

	return (
		<div className="App">
			<Router>
				<Navbar />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/blog' element={<Blog/>} />
					</Routes>
			</Router>
		</div>
	)

}

export default App