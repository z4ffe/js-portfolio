import {Flex, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {CONSTANTS} from '../contants/CONSTANTS.ts'
import {ScrollIcon} from './ScrollIcon.tsx'

interface Props {
	color: 'purple' | 'darkblue'
	linkTo: string
}

export const ScrollButton: FC<Props> = ({linkTo, color}) => {
	return (
		<Flex position='absolute' bottom='100px' left='150px'>
			<Flex as={NavLink} to={linkTo} alignItems='center' gap='8px'>
				<ScrollIcon color={color} />
				<Text color={color} fontSize='20px' fontWeight='500'>{CONSTANTS.SCROLL_BTN}</Text>
			</Flex>
		</Flex>
	)
}