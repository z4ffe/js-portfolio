import {Flex, Img, Text} from '@chakra-ui/react'
import {FC} from 'react'
import arrow from '../assets/images/svg/scroll.svg'
import {CONSTANTS} from '../contants/CONSTANTS.ts'

interface Props {
	color: 'purple' | 'darkblue'
	linkTo: string
}

export const ScrollButton: FC<Props> = ({linkTo, color}) => {
	return (
		<Flex as='a' href={linkTo} alignItems='center' gap='8px'>
			<Img src={arrow} />
			<Text color={color} fontSize='20px' fontWeight='500'>{CONSTANTS.SCROLL_BTN}</Text>
		</Flex>
	)
}