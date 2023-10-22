import {Flex, Link} from '@chakra-ui/react'

export const NavBar = () => {
	return (
		<Flex position='absolute' top='0' left='0' zIndex='9999'>
			<Flex position='fixed' margin='45px 0 0 150px' color='#928A97' fontSize='22px' fontWeight='500' gap='64px'>
				<Link href='#'>Home</Link>
				<Link href='#about'>About</Link>
				<Link href='#skills'>Skills</Link>
				<Link href='#contact'>Contact</Link>
			</Flex>
		</Flex>
	)
}