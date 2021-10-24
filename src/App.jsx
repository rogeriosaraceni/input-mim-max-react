import InputNumberMinMax from './components/InputNumberMinMax'

function App() {
	return (
   	<>
			<section className="container m-4">
				<form>
      			<InputNumberMinMax />

					<p>
						<button type="submit" className='btn btn-primary'>Save</button>
					</p>
				</form>
			</section>
    	</>
  	);
}

export default App;
