import {Flex} from '@chakra-ui/react'
import backgroundSvg2 from '../assets/images/svg/background2.svg'

export const About = () => {
	return (
		<Flex backgroundImage={backgroundSvg2} flexDirection='column' height='100vh' backgroundSize='cover' width='100%' backgroundRepeat='no-repeat' id='about'>
			<h1>About</h1>
		</Flex>
	)
}