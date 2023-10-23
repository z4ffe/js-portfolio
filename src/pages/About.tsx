import {Button, Flex, Heading, Img, Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import cv from '../assets/files/CV-DOC-RU-PDF.pdf'
import portrait from '../assets/images/portrait_photo.webp'
import backgroundSvg2 from '../assets/images/svg/background2.svg'
import dotsBg from '../assets/images/svg/dots_bg.svg'
import {CONSTANTS} from '../contants/CONSTANTS.ts'
import {ScrollButton} from '../shared/ScrollButton.tsx'
import {pagesAnimation} from '../utils/pagesAnimation.ts'

export const About = () => {
	return (
		<Flex as={motion.div}
				flexDirection='column'
				width='100%'
				height='100vh'
				backgroundRepeat='no-repeat'
				backgroundImage={backgroundSvg2}
				backgroundSize='cover'
				backgroundPosition='0 -1050px'
				position='relative' {...pagesAnimation}>
			<Img src={dotsBg} width='200px' position='absolute' top='182px' left='105px' />
			<Flex margin='220px 0 0 160px'>
				<Img src={portrait} maxWidth='315px' objectFit='cover' zIndex='999' clipPath='polygon(0 0, 100% 0, 100% 85%, 0% 100%)' />
				<Flex flexDirection='column' marginLeft='59px'>
					<Heading as='h2' color='red' fontSize='38px' fontWeight='700'>About me</Heading>
					<Text maxWidth='650px' fontSize='24px' fontWeight='400' lineHeight='170%' marginTop='35px'>{CONSTANTS.ABOUT_ME_DESC}</Text>
					<Button as='a' href={cv} target='_blank' marginTop='50px' color='#fff' backgroundColor='darkblue' width='170px' height='53px'>Download CV</Button>
				</Flex>
			</Flex>
			<ScrollButton color='darkblue' linkTo='/skills' />
		</Flex>
	)
}