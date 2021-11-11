import React from 'react';
import '../styles/Form.css';

export const Form = () => {

    

    return (
        <div>
           <form id="formulario">
           <h2>Registro de Estudiantes</h2>
           <hr/>
               <div>
                   <label>Nombre Completo</label>
                   <input id="inputNombre" name="nombre"/>
               </div>
               <div>
                   <label>Tipo Documento</label>
                   <select id="selectTipo" name="tipo">
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">C.C</option>
                       <option name="T.I" value="T.I">T.I</option>
                       <option name="C.E" value="C.E">C.E</option>
                   </select>
               </div>
               <div>
                   <label>Número Documento</label>
                   <input id="inputNumero" type="number" name="numero"/>
               </div>
               <div>
                   <label>Teléfono</label>
                   <input id="inputTelefono" type="number" name="telefono"/>
               </div>
               <div>
                   <label>Celular</label>
                   <input id="inputCelular" type="number" name="celular"/>
               </div>
               <div>
                   <label>Dirección</label>
                   <input id="inputDireccion" name="direccion"/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen"/>
                    
               </div>
               <div>
                   <button id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
