import logo from './logo.svg';
import './styles/App.css';
import ferrari from './media/ferrari.jpg'
import lamborguini from './media/lamborguini.jpg'

function App() {
  return (
    <div className="App">
       <header>
		<ul className="navbar">
			<li>
				<img src="favicon.png" alt="imagen"/>
			</li>
			<li><button className="button mainButton">Nuevo post</button> </li>
			<li>
					<div className="buscar">
						<input placeholder="Buscar un producto"/>
						<i className="fas fa-search button iconoBusqueda"></i>
					</div>
			</li>
			
			<li><button className="button secondaryButton">Iniciar sesión</button></li>
			<li><button className="button mainButton">Registrarme</button></li>
	    </ul>
	</header>
	 <main>
		 <section>
			 <h2 className="titulo">Marca de vehículos</h2>
			 <ul className="breedCardContainer">
				 <li className="breedCard">
					<div className="contenedorImagen">
						<img src={lamborguini} alt="lamborguini"/>						
					</div>
					<span className="breedTitle">
						Lamborghini amarillo
					</span>
				</li>

				 <li className="breedCard">
					<div className="contenedorImagen">
						<img src={ferrari} alt="ferrari"/>						
					</div>
					<span className="breedTitle">
						Ferrari rojo
					</span>
				</li>
			 </ul>
		 </section>
		 <section></section>
	 </main>
	<footer></footer>
    </div>
  );
}

export default App;
