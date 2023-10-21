import {ChakraProvider} from '@chakra-ui/react'
import {Footer} from './components/Footer.tsx'
import {MainLayout} from './layouts/mainLayout.tsx'
import {Home} from './pages/Home/Home.tsx'
import mainTheme from './themes/mainTheme.ts'

export const App = () => {
	return (
		<ChakraProvider theme={mainTheme}>
			<MainLayout>
				<Home />
				<Footer />
			</MainLayout>
		</ChakraProvider>
	)
}