import React from 'react';

const Problem = () => {
	return (
		<div class='problem_section'>
			<div class='right_section'>
				<div class='problem_statement'>
					<span>Problem Statement</span>
					<input type='text' name='problem' id='problem' />
				</div>
				<div class='description'>
					<span>description</span>
					<textarea name='description'></textarea>
				</div>
			</div>
			<div class='left_section'>
				<div class='contributors'>
					<span>contributors</span>
					<input type='text' name='problem' id='problem' />
				</div>
				<div class='tags'>
					<span>Tags</span>
					<textarea name='tags'></textarea>
				</div>
				<div class='severity contributors'>
					<span>severity</span>
					<input type='text' name='problem' id='problem' />
				</div>
				<div class='button_zone'>
					<button>save</button>
					<button>Publish</button>
				</div>
			</div>
		</div>
	);
};

export default Problem;
