import {AnimatePresence} from 'framer-motion'
import {Route, Routes, useLocation} from 'react-router-dom'
import {About} from '../pages/About.tsx'
import {Contact} from '../pages/Contact.tsx'
import {Home} from '../pages/Home.tsx'
import {Skills} from '../pages/Skills.tsx'

export const Router = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait' initial={false} presenceAffectsLayout>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} index />
				<Route path='/about' element={<About />} index />
				<Route path='/skills' element={<Skills />} index />
				<Route path='/contact' element={<Contact />} index />
				<Route path='*' element={<p>NOT FOUND</p>} index />
			</Routes>
		</AnimatePresence>
	)
}