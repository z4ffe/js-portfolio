import {Flex} from '@chakra-ui/react'
import {About} from '../../components/About.tsx'
import {Contact} from '../../components/Contact.tsx'
import {MainSection} from '../../components/MainSection.tsx'
import {NavBar} from '../../components/NavBar.tsx'
import {Skills} from '../../components/Skills.tsx'

export const Home = () => {
	return (
		<Flex minHeight='100vh' width='100%' flexDirection='column' position='relative'>
			<NavBar />
			<MainSection />
			<About />
			<Skills />
			<Contact />
		</Flex>
	)
}