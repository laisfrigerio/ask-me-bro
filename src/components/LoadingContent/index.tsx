import React from 'react'
import TheHeader from '../../ui/TheHeader'
import TheMainContent from '../../ui/TheMainContent'
import TheSpinner from '../../ui/TheSpinner'

export default function LoadingContent () {
	return (
		<React.Fragment>
			<TheHeader></TheHeader>
			<TheMainContent className="is-loading">
				<TheSpinner />
			</TheMainContent>
		</React.Fragment>
	)
}
