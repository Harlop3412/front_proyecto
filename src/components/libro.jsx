
export default function TarjetaLibro({ libro }) {
  // Paso 1: Verificar si 'libro.imagen' es una URL externa (empieza con "http")
  // Si es externa, la usamos tal cual para 'src'
  const imagenSrc = libro.imagen.startsWith("http")
    ? libro.imagen
    // Paso 2: Si NO es URL externa, verificamos si ya empieza con "/"
    // Esto significa que ya es una ruta absoluta desde la carpeta 'public'
    : libro.imagen.startsWith("/")
      ? libro.imagen
      // Paso 3: Si no empieza con "/", entonces agregamos un "/" adelante
      // para que sea ruta absoluta desde 'public', evitando el doble slash
      : `/${libro.imagen}`;

  return (
    <div className="col-md-4 mb-4">
      <img
        // Usamos la ruta calculada que puede ser externa o local
        src={imagenSrc}
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
