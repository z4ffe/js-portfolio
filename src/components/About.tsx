import {Flex, Img} from '@chakra-ui/react'
import backgroundSvg2 from '../assets/images/svg/background2.svg'
import dotsBg from '../assets/images/svg/dots_bg.svg'

export const About = () => {
	return (
		<Flex backgroundImage={backgroundSvg2} flexDirection='column' height='100vh' backgroundSize='cover' width='100%' backgroundRepeat='no-repeat' id='about' backgroundPosition='0 -950px'
				position='relative'>
			<Img src={dotsBg} width='200px' position='absolute' top='182px' left='105px' />
			<h1>About</h1>
		</Flex>
	)
}