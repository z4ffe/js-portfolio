import {Icon} from '@chakra-ui/react'
import {FC} from 'react'

interface Props {
	color: 'purple' | 'darkblue'
}

export const ScrollIcon: FC<Props> = ({color}) => {
	return (
		<Icon viewBox='0 0 24 27' boxSize={7} color={color}>
			<path
				fill='currentColor'
				d='M12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5C21.9939 18.0203 17.5203 22.4939 12 22.5ZM12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C19.995 8.08378 16.4162 4.50496 12 4.5ZM12 17.5L7 12.5L8.41 11.09L11 13.67V7.5H13V13.67L15.59 11.09L17 12.5L12 17.5Z' />
		</Icon>
	)
}