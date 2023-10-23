import {Flex, Img} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import backgroundSvg2 from '../assets/images/svg/background2.svg'
import dotsBg from '../assets/images/svg/dots_bg.svg'
import {pagesAnimation} from '../utils/pagesAnimation.ts'

export const About = () => {
	return (
		<Flex as={motion.div} flexDirection='column' height='100vh' backgroundImage={backgroundSvg2} backgroundSize='cover' width='100%' backgroundRepeat='no-repeat' id='about'
				backgroundPosition='0 -550px'
				position='relative' {...pagesAnimation}>
			<Img src={dotsBg} width='200px' position='absolute' top='182px' left='105px' />
			<h1>About</h1>
		</Flex>
	)
}