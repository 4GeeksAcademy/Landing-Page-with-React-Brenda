import React from "react";



function Navbar() {
	return (
	  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container">
		  <a className="navbar-brand" href="#">Fluffy Homeshelter</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ms-auto">
			  <li className="nav-item">
				<a className="nav-link active" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">About</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Services</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Contact</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  }
  
  // Welcome
  function Jumbotron() {
	return (
		<div className="jumbotron text-center py-5"> 
      <div className="container">
		  <h1 className="display-4"> <strong>Adopt a cat, Today!</strong></h1>
		  <p className="lead">Find your new furry friend today. Adopt a cat and give them a forever home. Our cats are ready to meet you!</p>
		  <a className="btn btn-primary btn-lg" href="#" role="button">Apply now!!</a>
		</div>
	  </div>
	);
  }
  
  // Componente para las tarjetas de contenido
  function Card(props) {
	return (
	  <div className="col-md-3">
		<div className="card mb-3 shadow-sm">
		<img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
		  </div>
		</div>
	  </div>
	);
  }
  
  // Componente principal Home
  function Home() {
	return (
	  <>
		<Navbar />
		<Jumbotron />
		<div className="container">
        <div className="row">
          <Card title="Grumpy" text="Grumpy is a 5-year-old cat with a perpetually grumpy expression but a heart of gold." image="https://preview.redd.it/angry-cats-v0-37n6eeti7j5b1.jpg?width=1080&crop=smart&auto=webp&s=36fdcf107174d5817ca36e9512c0d3cc34ae2165" />
          <Card title="Fiona" text="Fiona is a sweet 3-year-old girl who loves kids." image="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/225789600_109630754751927_2925455005162131994_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XE8R93iPNtEQ7kNvgFB51D3&_nc_ht=scontent-atl3-1.xx&oh=00_AYBFGCLQ-qP9GpG8juaJ9Yy7azFyOYLrYnD-ThTGBH1s1w&oe=66A760C9" />
          <Card title="Sokita" text="Sokita is an energetic kitten who loves to climb and explore." image="https://www.shutterstock.com/image-photo/funny-cat-flying-photo-playful-600nw-2315020963.jpg" />
          <Card title="Luna" text="Luna is a calm and affectionate cat who loves cuddles and soft blankets." image="https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=1024x1024&w=is&k=20&c=VZ0g3w9tQVgjWzPyh-1XAL_1gBElrG3O5JaSlrq8iuk=" />
        </div>
		</div>
	  </>
	);
  }
  

export default Home;
