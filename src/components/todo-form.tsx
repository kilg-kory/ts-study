import React, { useState, useRef } from 'react'



interface ToDoFormProps {
	onAdd(title:string): void
}


export const ToDoForm: React.FC<ToDoFormProps> = (props) => {

	const reff = useRef<HTMLInputElement>(null);



	// const [title, setTitle] = useState<string>('');

	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value)
	// }

	const keyPressEnter = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			props.onAdd(reff.current!.value)
			reff.current!.value = '';
			// console.log(title)
		}
	}

	return (
		<div className="input-field">
			<input type="text" id="title"
				// onChange={changeHandler}  
				onKeyPress={keyPressEnter}
				ref={reff}
			/>

			<label htmlFor="title" className="active">Какое твоё дело?</label>
		</div>
	)
}