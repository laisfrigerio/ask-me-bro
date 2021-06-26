import React from 'react'
import RoomCodeWrapper from './styles'
import copyImg from '../../assets/images/copy.svg'

type ParamsType = {
	code: string
}

export default function RoomCode ({ code }: ParamsType) {
	function copyToClipboard () {
		navigator.clipboard.writeText(code)
	}

	return (
		<RoomCodeWrapper onClick={copyToClipboard}>
			<div title="Copy room code to clipboard">
				<img src={copyImg} alt="Copy room code to clipboard" />
			</div>
			<span>Sala #{code}</span>
		</RoomCodeWrapper>
	)
}
