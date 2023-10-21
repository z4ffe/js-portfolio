import {Flex, Img, Link} from '@chakra-ui/react'
import github from '../assets/images/svg/socials/github.svg'
import instagram from '../assets/images/svg/socials/instagram.svg'
import linkedin from '../assets/images/svg/socials/linkedin.svg'
import twitter from '../assets/images/svg/socials/twitter.svg'
import {CONSTANTS} from '../contants/CONSTANTS.ts'

export const SocialPanel = () => {
	return (
		<Flex gap='18px'>
			<Link cursor='pointer' href={CONSTANTS.TWITTER_LINK}><Img src={twitter} /></Link>
			<Link cursor='pointer' href={CONSTANTS.GITHUB_LINK}><Img src={github} /></Link>
			<Link cursor='pointer' href={CONSTANTS.LINKEDIN_LINK}><Img src={linkedin} /></Link>
			<Link cursor='pointer' href={CONSTANTS.INSTAGRAM_LINK}><Img src={instagram} /></Link>
		</Flex>
	)
}