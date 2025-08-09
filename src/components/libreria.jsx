import { useEffect, useState } from "react";
import TarjetaLibro from "./libro";
import { getLibros } from "../services/fetch";

export default function Libreria() {
    const [libros, setLibros] = useState([]);

    const loadLibros = async ()=>{
        const data = await getLibros();
        setLibros(data);
    }

    useEffect(() => {
        loadLibros()
    }, []);

    console.log(libros)
    libros.map((libro, i)=>{
        console.log(libro, i)
    })
    return (
        <section>
            <h2 className="text-center mb-4">texto de prueba</h2>
            <div className="row">
                {libros.map((libro, i) => (
                    
                    <TarjetaLibro
                        key={i}
                        libro={libro}
                    />
                ))}
            </div>
        </section>
    )
}