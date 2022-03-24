import React, { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url1 } from '../helpers/Url1';
import '../styles/Form.css';
import axios from 'axios';

// import { List } from './List';

export const Form = () => {

    const [student, setstudent] = useState({
        nombre: '',
        tipo: '',
        numero: '',
        telefono: '',
        celular: '',
        direccion: '',
        imagen: ''
    })

    const { nombre, tipo, numero, telefono, celular, direccion, imagen } =
        student

    const handleChange = ({ target }) => {
        setstudent({
            ...student,
            [target.name]: target.value
        })
    }

    const handleFileChanged = e => {
        console.log(e.target);
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp => {
                student.imagen = resp
            }).catch(error => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post(url1, student)
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(student)
        postData()
        setstudent({
            nombre: '',
            tipo: '',
            numero: '',
            telefono: '',
            celular: '',
            direccion: '',
            imagen: ''
        })
    }

    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit}>
                <h2>Registro de Estudiantes</h2>
                <hr />
                <div>
                    <label>Nombre Completo</label>
                    <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange} />
                </div>
                <div>
                    <label>Tipo Documento</label>
                    <select id="selectTipo" name="tipo" value={tipo} onChange={handleChange}>
                        <option name="Seleccionar" value="Seleccionar" >Seleccionar</option>
                        <option name="C.C" value="C.C">C.C</option>
                        <option name="T.I" value="T.I">T.I</option>
                        <option name="C.E" value="C.E">C.E</option>
                    </select>
                </div>
                <div>
                    <label>Número Documento</label>
                    <input id="inputNumero" type="number" name="numero" value={numero} onChange={handleChange} />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input id="inputTelefono" type="number" name="telefono" value={telefono} onChange={handleChange} />
                </div>
                <div>
                    <label>Celular</label>
                    <input id="inputCelular" type="number" name="celular" value={celular} onChange={handleChange} />
                </div>
                <div>
                    <label>Dirección</label>
                    <input id="inputDireccion" name="direccion" value={direccion} onChange={handleChange} />
                </div>
                <div>
                    <label>Imagen</label>
                    <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFileChanged} />

                </div>
                <div>
                    <button id="btnRegistro" type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
