
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

	.header-shut-down-ico {
		display: none;
	}

	.header-shut-down-text {
		display: block;
	}

	@media screen and (max-width: 654px) {
		.btn-shut-down {
			padding: 0 16px;
		}

		.header-shut-down-ico {
			display: block;
		}

		.header-shut-down-text {
			display: none;
		}
	}
`

export default TheHeaderWrapper
