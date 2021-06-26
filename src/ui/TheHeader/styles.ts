
import styled from 'styled-components'

const TheHeaderWrapper = styled.header`
	border-bottom: 1px solid #e2e2e2;
	padding: 24px;

	.content {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1120px;

		> div {
			display: flex;
			gap: 16px;

			button {
				height: 40px;
			}
		}

		> img {
			max-height: 45px;
		}
	}
`

export default TheHeaderWrapper
