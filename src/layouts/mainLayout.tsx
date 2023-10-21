import {Flex} from '@chakra-ui/react'
import {FC, PropsWithChildren} from 'react'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<Flex flexDirection='column'>{children}</Flex>
	)
}