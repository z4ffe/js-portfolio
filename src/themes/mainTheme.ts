import {ChakraTheme, extendTheme} from '@chakra-ui/react'

const mainTheme = extendTheme({
	styles: {
		global: {
			'*': {
				boxSizing: 'border-box',
				margin: 0,
				padding: 0,
			},
			'html': {
				scrollBehavior: 'smooth',
				overflow: 'scroll',
				scroll: 'no',
			},
			'body': {
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'transparent',
			},
			'#root': {
				maxWidth: '1440px',
				width: '100%',
				boxShadow: '2px 2px 40px lightgrey',
			},
			a: {
				textDecoration: 'none',
			},
		},
	},
	fonts: {
		heading: 'League Spartan, sans-serif',
		body: 'League Spartan, sans-serif',
	},
	colors: {
		darkblue: '#000C24',
		white: '#FBFBFB',
		red: '#F44336',
		purple: '#928A97',
	},
	components: {
		Link: {
			baseStyle: {
				'&:hover': {
					textDecoration: 'none',
				},
			},
		},
	},
	breakpoints: {
		md: '31.5em', // 504px
		lg: '90.5em', // 1440px
		xl: '120em', // 1920px
	},
}) as ChakraTheme

export default mainTheme
