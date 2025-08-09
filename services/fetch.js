const API_URL = "http://localhost:3006/api/proyectos/"

export async function getLibros() {
    const res = await fetch(`${API_URL}/ `);
    const data = await res.json();
    return data
}

export async function getLibrosPorNombre(nombre) {
    const res = await fetch(`${API_URL}/${nombre} `)
    const data = await res.json();
    return data;
}

export async function updateLibro(nombre, libro) {
    const res = await fetch(`${API_URL}/${nombre} `, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(libro),
    })
    return res.json();
}

export async function deleteLibro(libro) {
    const res = await fetch(`${API_URL}/${libro} `, {
        method: 'DELETE',

    });
    return res.ok;
}