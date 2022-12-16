import favicon from './media/favicon.png';
import './styles/App.css';
import ferrari from './media/ferrari.jpg';
import lamborguini from './media/lamborguini.jpg';
import mazda from './media/mazda azul.jpg';

function App() {
  return (
    <div className="App">
       <header>
		<ul className="navbar">
			<li>
				<img src={favicon} alt="imagen"/>

			</li>
			<li><button className="button mainButton">Nuevo post</button> </li>
			<li>
					<div className="buscar">
						<input placeholder="Buscar un carro"/>
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
				 <CardMarcaCarros marcaCarro='Ferrari rojo' imagen={ferrari}/>
				 <CardMarcaCarros marcaCarro='Lamborguini amarillo' imagen= {lamborguini}/>
				 <CardMarcaCarros marcaCarro='Mazda azul' imagen={mazda}/>
			 </ul>
		 </section>
		 <section></section>
	 </main>

	<footer>
	</footer>
    </div>
  );
}

function CardMarcaCarros(props){
	return(
		<li className="breedCard">
					<div className="contenedorImagen">
						<img src={props.imagen} alt={props.marcaCarro}/>						
					</div>
					<span className="breedTitle">{props.marcaCarro}</span>
				</li>
	);
}

export default App;
