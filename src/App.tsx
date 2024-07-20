import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Redirect from './pages/Redirect'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/:id' element={<Redirect />} />
		</Routes>
	)
}
