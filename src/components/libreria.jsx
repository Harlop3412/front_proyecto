import { useEffect, useState } from "react";
import TarjetaLibro from "./libro";
import { getLibros } from "../services/fetch";

export default function Libreria() {
    const [libros, setLibros] = useState([]);

    const loadLibros = async () => {
        const data = await getLibros();
        setLibros(data);
    }

    useEffect(() => {
        loadLibros()
    }, []);


    return (


        <section className="py-5 bg-primary text-white">
            {/* Contenedor flex para alinear título y buscador horizontalmente */}
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                <h2 className="display-6 fw-bold mb-3 mb-md-0">
                    Galería Libros
                </h2>
                {/* Input group de Bootstrap para el buscador */}
                <div className="input-group w-100 w-md-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar libro..."
                        aria-label="Buscar libro"
                    />
                    <button className="btn btn-info" type="button">
                        Buscar
                    </button>
                </div>
            </div>

            {/* Grid responsivo para las tarjetas */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {libros.map((libro, i) => (
                    <TarjetaLibro key={i} libro={libro} />
                ))}
            </div>
        </section>


    )
}