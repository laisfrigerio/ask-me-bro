import React from 'react'
import TheHeader from '../../ui/TheHeader'
import TheMainContent from '../../ui/TheMainContent'
import imgEmptyQuestions from '../../assets/images/empty-questions.svg'

export default function RoomClose () {
	return (
		<React.Fragment>
			<TheHeader></TheHeader>
			<TheMainContent className="room-is-closed">
				<h2>Sala fechada</h2>
				<img src={imgEmptyQuestions} alt="Sala fechada" />
			</TheMainContent>
		</React.Fragment>
	)
}
