import React from 'react'

const HeroTitle = () => {
  return (
		<div class='title'>
			<h2>create new post</h2>
			<div class='button_zone'>
				<span>Is this a public post?</span>
				<label class='switch'>
					<input type='checkbox' checked />
					<span class='slider round'></span>
				</label>
				<span>Yes</span>
			</div>
		</div>
	);
}

export default HeroTitle