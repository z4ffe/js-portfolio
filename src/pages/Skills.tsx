import {CircularProgress, CircularProgressLabel, Flex, Heading, Img, Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import skillsPic from '../assets/images/skills_pic.webp'
import dotsBg from '../assets/images/svg/dots_bg.svg'
import skillsBg from '../assets/images/svg/skills_bg.svg'
import {CONSTANTS} from '../contants/CONSTANTS.ts'
import {skillsData} from '../data/skillsData.ts'
import {ScrollButton} from '../shared/ScrollButton.tsx'
import {pagesAnimation} from '../utils/pagesAnimation.ts'


export const Skills = () => {
	return (
		<Flex Flex as={motion.div}
				flexDirection='column'
				width='100%'
				height='100vh'
				backgroundRepeat='no-repeat'
				backgroundImage={skillsBg}
				backgroundSize='cover'
				backgroundPosition='0 -1250px'
				position='relative' {...pagesAnimation}>
			<Img src={dotsBg} width='200px' position='absolute' top='182px' right='105px' />
			<Flex margin='220px 0 0 160px'>
				<Flex flexDirection='column'>
					<Heading as='h2' color='red' fontSize='38px' fontWeight='700'>Skills</Heading>
					<Text maxWidth='650px' fontSize='24px' fontWeight='400' lineHeight='170%' marginTop='30px'>{CONSTANTS.SKILLS_DESC}</Text>
					<Flex marginTop='30px' gap='52px' flexWrap='wrap' width='600px'>
						{skillsData.map((skill) => (
								<Flex flexDirection='column' alignItems='center' width='70px'>
									<CircularProgress value={skill.value} color='black' thickness='10px' size='14'>
										<CircularProgressLabel color='#928A97' fontSize='13px' fontWeight='600'>{skill.value}%</CircularProgressLabel>
									</CircularProgress>
									<Text marginTop='2px' fontWeight='600' fontSize='14px' color='darkblue'>{skill.title}</Text>
								</Flex>
							),
						)}
					</Flex>
				</Flex>
				<Img marginLeft='59px' src={skillsPic} maxWidth='355px' objectFit='cover' zIndex='999' clipPath='polygon(0 0, 100% 0, 100% 100%, 0 85%)' />
			</Flex>
			<ScrollButton color='darkblue' linkTo='/contact' />
		</Flex>
	)
}