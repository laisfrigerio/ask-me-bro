import React from 'react'

export default function QuestionCounter ({ likeCount = 0 }) {
	if (!likeCount || likeCount <= 0) {
		return null
	}

	return (
		<span className="counter">{likeCount}</span>
	)
}
