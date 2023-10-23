import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {MainLayout} from './layouts/mainLayout.tsx'
import {Router} from './routes/Router.tsx'
import mainTheme from './themes/mainTheme.ts'

export const App = () => {
	return (
		<BrowserRouter>
			<ChakraProvider theme={mainTheme}>
				<MainLayout>
					<Router />
				</MainLayout>
			</ChakraProvider>
		</BrowserRouter>
	)
}