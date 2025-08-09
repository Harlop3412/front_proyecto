export default function TarjetaLibro({ libro }) {
  console.log("tarjeta libro")
  console.log(libro.nombre)
  return (
    <div className="col-md-4 mb-4">
      <img
        src={`./src/assets/${libro.imagen}`}
        className="card-img-top"
        alt={libro.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{libro.nombre}</h5>
        <p className="card-text">{libro.genero}</p>
      </div>
    </div>

  );
}
