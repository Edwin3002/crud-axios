import React, { useEffect, useState } from 'react';
import { url1 } from '../helpers/Url1';
import '../styles/List.css';
import axios from 'axios';

export const List = () => {
    const [registro, setregistro] = useState([]);

    const getData = () => {
        axios.get(url1)
            .then(response => {
                console.log(response.data);
                setregistro(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, []);

    console.log(registro)

    const deleteData = (id) =>{
        axios.delete(url1 + id)
        .then(response => {
            getData()
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
    
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Tipo Documento</th>
                        <th>Número Documento</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>


                    {
                        registro.map(person => {
                            return(
                            <tr key={person.id}>
                                <td>{person.nombre}</td>
                                <td>{person.tipo}</td>
                                <td>{person.numero}</td>
                                <td>{person.telefono}</td>
                                <td>{person.telefono}</td>
                                <td>{person.direccion}</td>
                                <td><img src={person.imagen} width='50px' alt='logo'/></td>
                                <td><button onClick={()=>deleteData(person.id) }>Eliminar</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
