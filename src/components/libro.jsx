
export default function TarjetaLibro({ libro }) {
  // 1: Verificar si 'libro.imagen' es una URL externa (empieza con "http")
  // Si es externa, la usamos tal cual para 'src'
  const imagenSrc = libro.imagen.startsWith("http")
    ? libro.imagen
    // 2: Si NO es URL externa, verificamos si ya empieza con "/"
    // Esto significa que ya es una ruta absoluta desde la carpeta 'public'
    : libro.imagen.startsWith("/")
      ? libro.imagen
      //  3: Si no empieza con "/", entonces agregamos un "/" adelante
      // para que sea ruta absoluta desde 'public', evitando el doble slash
      : `/${libro.imagen}`;

  return (
  
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 border-0">
        <img
          src={imagenSrc}
          className="card-img-top img-fluid"
          alt={libro.nombre}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-primary">{libro.nombre}</h5>
          <p className="card-text text-muted">{libro.genero}</p>
          <a href="#" className="btn btn-outline-primary mt-auto">
            Ver más
          </a>
        </div>
      </div>
    </div>

  );
}
