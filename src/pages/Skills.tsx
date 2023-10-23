import {Flex} from '@chakra-ui/react'
import {ScrollButton} from '../shared/ScrollButton.tsx'
import {pagesAnimation} from '../utils/pagesAnimation.ts'

export const Skills = () => {
	return (
		<Flex height='100vh' {...pagesAnimation}>
			<h1>Skills</h1>
			<ScrollButton color='purple' linkTo='/contact' />
		</Flex>
	)
}