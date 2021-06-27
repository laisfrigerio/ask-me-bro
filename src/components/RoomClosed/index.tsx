import React from 'react'
import TheHeader from '../../ui/TheHeader'
import TheMainContent from '../../ui/TheMainContent'
import imgEmptyQuestions from '../../assets/images/empty-questions.svg'

export default function RoomClose ({ label = 'Sala fechada' }) {
	return (
		<React.Fragment>
			<TheHeader></TheHeader>
			<TheMainContent className="room-is-closed">
				<h2>{label}</h2>
				<img src={imgEmptyQuestions} alt="Sala fechada" />
			</TheMainContent>
		</React.Fragment>
	)
}
