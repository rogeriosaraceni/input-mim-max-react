import React, { useState } from 'react';

export default function InputNumberMinMax() {

	const [ value, setValue ] = useState('')

	const handleOnChange = (e) => {
		setValue(e.target.value)
	}

	const handleOnBlur = (e) => {
		const min = 7;
		const max = 20;

		const inputTarget = document.querySelector('#inputNumber');
		const valueDig = parseInt(e.target.value)
		const textAlert = document.querySelector("#alert-inputNumber")

		if (valueDig < min || valueDig > max) {
			textAlert.innerHTML = "Value has to be between 7 and 20";
			inputTarget.value = "";
		}
		else{
			textAlert.innerHTML = "";
			inputTarget.value = value;
		}

		console.log(value)
	}
	
	return (
   	<>
      	<input 
				id="inputNumber"
				type="text"
				name="my-inputNumber"
				className="form-control"
				value={value}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
				required
			/>
			<small className="d-block text-danger" id="alert-inputNumber" style={{height: "20px"}}></small>

			<p>
				<strong>Valor Digitado: </strong> 
				<span className="text-primary">{value}</span>
			</p>
    	</>
  	);
}
