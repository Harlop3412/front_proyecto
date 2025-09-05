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
        <>
            <header className="bg-secondary text-white py-3 mb-4">
                <div className="container">
                    <h1 className="display-5 fw-bold text-center">Mi Biblioteca</h1>
                </div>
            </header>
            <section className="py-5 bg-primary text-white">

                {/* Contenedor flex para alinear título y buscador horizontalmente */}
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                    <h2 className="display-6 fw-bold mb-3 mb-md-0">
                        Galería Libros
                    </h2>

                    {/* Contenedor que agrupa buscador y botones */}
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2 w-100 w-md-auto me-2">
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

                        {/* Botones de acción */}
                        <div className="d-flex gap-2">
                            {/* Botón que abre la modal de crear */}
                            <button
                                className="btn btn-success"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#crearLibroModal"
                            >
                                Crear
                            </button>

                            {/* Botón que abre la modal de eliminar */}
                            <button
                                className="btn btn-danger"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#eliminarLibroModal"
                            >
                                Eliminar
                            </button>
                        </div>

                        {/* Modal Crear Libro */}
                        <div
                            className="modal fade"
                            id="crearLibroModal"
                            tabIndex="-1"
                            aria-labelledby="crearLibroModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="crearLibroModalLabel">
                                            Crear Libro
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Nombre:</label>
                                                <input type="text" className="form-control" name="nombre" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Imagen:</label>
                                                <input type="text" className="form-control" name="imagen" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Autor:</label>
                                                <input type="text" className="form-control" name="autor" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Género:</label>
                                                <input type="text" className="form-control" name="genero" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Descripción:</label>
                                                <textarea className="form-control" name="descripcion"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">
                                                Guardar
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Eliminar Libro */}
                        <div
                            className="modal fade"
                            id="eliminarLibroModal"
                            tabIndex="-1"
                            aria-labelledby="eliminarLibroModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="eliminarLibroModalLabel">
                                            Eliminar Libro
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Ingresa nombre o ID del libro:</label>
                                                <input type="text" className="form-control" name="eliminar" />
                                            </div>
                                            <button type="submit" className="btn btn-danger w-100">
                                                Eliminar
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                {/* Grid responsivo para las tarjetas */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-2">
                    {libros.map((libro, i) => (
                        <TarjetaLibro key={i} libro={libro} />
                    ))}
                </div>
            </section>

            <footer className="bg-secondary text-white py-4 mt-5">
                <div className="container text-center">
                    <p className="mb-2">© {new Date().getFullYear()} Mi Biblioteca. Todos los derechos reservados.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>

    )
}