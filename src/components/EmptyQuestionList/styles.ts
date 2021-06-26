import styled from 'styled-components'

const EmptyQuestionListWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 100px;

	img {
		margin-bottom: 16px;
	}

	h2 {
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 600;
	}

	small {
		color: #C4C4C4;
		font-size: 14px;
		line-height: 21px;
		margin-top: 5px;
		max-width: 288px;
		text-align: center;
	}
`

export default EmptyQuestionListWrapper
