import {Flex} from '@chakra-ui/react'
import {FC, PropsWithChildren} from 'react'
import {Header} from '../components/Header.tsx'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<Flex flexDirection='column' position='relative' maxWidth='1440px'>
			<Header />
			{children}
		</Flex>
	)
}