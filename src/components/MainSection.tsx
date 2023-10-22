import {Flex, Heading} from '@chakra-ui/react'
import backgroundSvg from '../assets/images/svg/background.svg'
import {CONSTANTS} from '../contants/CONSTANTS.ts'
import {ScrollButton} from '../shared/ScrollButton.tsx'
import {SocialPanel} from '../shared/SocialPanel.tsx'

export const MainSection = () => {
	return (
		<Flex backgroundImage={backgroundSvg} flexDirection='column' height='100vh' backgroundSize='cover' width='100%' backgroundRepeat='no-repeat'>
			<Flex margin='335px 0 0 150px' id='main' flexDirection='column' color='#c2c2c2' gap='18px'>
				<Heading as='h1' fontSize='38px' fontWeight='800' letterSpacing='5px'>{CONSTANTS.TITLE.toUpperCase()}</Heading>
				<Heading as='h2' fontSize='28px' fontWeight='600'>{CONSTANTS.TITLE_DESC}</Heading>
			</Flex>
			<Flex margin='32px 0 0 150px'>
				<SocialPanel />
			</Flex>
			<Flex margin='auto 0 100px 150px'>
				<ScrollButton color='purple' linkTo='#about' />
			</Flex>
		</Flex>
	)
}