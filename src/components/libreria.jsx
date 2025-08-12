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
            <h2 className="text-center mb-5 display-6 fw-bold">
                Galeria Libros
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {libros.map((libro, i) => (
                    <TarjetaLibro key={i} libro={libro} />
                ))}
            </div>
        </section>

    )
}