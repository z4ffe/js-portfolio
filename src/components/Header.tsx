import {Flex, Link} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

export const Header = () => {
	return (
		<Flex position='absolute' top='0' left='0' zIndex='9999'>
			<Flex position='fixed' margin='45px 0 0 150px' color='#928A97' fontSize='22px' fontWeight='500' gap='64px'>
				<Link to='/' as={NavLink}>Home</Link>
				<Link to='/about' as={NavLink}>About</Link>
				<Link to='/skills' as={NavLink}>Skills</Link>
				<Link to='/contact' as={NavLink}>Contact</Link>
			</Flex>
		</Flex>
	)
}