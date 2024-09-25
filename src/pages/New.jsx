<<<<<<< HEAD
import ContainerInputs from '../components/functionals/ContainerInputs'
import Button from '../components/basics/Button'
import Modal from '../components/functionals/Modal'
import Layout from '../components/functionals/Layout'

import { useState } from 'react';

import './new.css'

export default function New() {

//Estados para los datos de los inputs
const [name, setName] = useState("")
const [imageUrl, setImage] = useState("")
const [estado, setState] = useState("")
const [especie, setSpace] = useState("")

//estado para el renderizado condicional del modal
const [showModal, setShowModal] = useState(false)

//estado para el texto del modal
const [textModal, setTextModal] = useState('')

//estado para el objeto personaje
const [personaje, setPersonaje] = useState({ img: null, nombre: null, state: null, space: null })

//función para cerrar el modal
const handlerButton = () =>{
  setShowModal(false)
}

//función para poner la primera letra en mayúscula
const primeraMayuscula = (text) =>{
    return text[0].toUpperCase() + text.slice(1).toLowerCase()
}

//función que valida si es solo texto
const validationText = (text) => {
  const regex = /^[a-zA-Z\s]*$/; 
  return regex.test(text);
};


//función para obtener el dato del input name
const handlerName = (event) => {
  const name = event.target.value;
  setName(primeraMayuscula(name)) 
};

//función para obtener el dato del input image
const handlerImg = (event) =>{
  const image = event.target.value;
  setImage(image)
}

//función para obtener el dato del input state
const handlerState = (event) => {
  const state = event.target.value;
    setState(primeraMayuscula(state)) 
};

//función para obtener el dato del input space
const handlerSpace = (event) => {
  const space = event.target.value;
  setSpace(primeraMayuscula(space)) 
};

//función cuándo se hace el envío del formulario
const handlerSubmit = (event) => {
  event.preventDefault();

  if (name === "" || name === null || !validationText(name)) {
      setTextModal("El nombre es inválido");
      setShowModal(true)
      return;
  }

  if (estado === "" || estado === null || !validationText(estado)) {
      setTextModal("El estado es inválido");
      setShowModal(true)
      return;
  }

  if (especie === "" || especie === null || !validationText(especie)) {
      setTextModal("La especie es inválida");
      setShowModal(true)
      return;
  }
  
  setTextModal('Personaje agregado')
  setShowModal(true)
    
  setPersonaje({
    nombre: name,
    img: imageUrl,
    state: estado,
    space: especie
  })
  event.target.reset()
  
  console.log(personaje)
}

//Constante que contiene los datos de los inputs
const inputs = {imagen: {label:"Imagen:", type:"text", name:"image", placeholder:'Ingrese la URL', onChange: handlerImg},
                nombre: {label:"Nombre:", type:"text", name:"nombre", onChange:handlerName},
                estado: {label:"Estado:", type:"text", name:"state", placeholder:'Ej: Vivo', onChange:handlerState},
                especie: {label:"Especie:", type:"text", name:"spice", placeholder:'Ej: Humano', onChange:handlerSpace}
}
  return (
    <Layout>
      <form onSubmit={handlerSubmit}>
          <h2>Agregar Personaje</h2>
          <ContainerInputs inputs={inputs}></ContainerInputs>
          <Button type='Submit' text='Agregar'></Button>
          {showModal? <Modal handlerButton={handlerButton} text={textModal} /> : null}
      </form>
    </Layout>
  )
}
=======
import Layout from "../components/basics/Layout";
import PropTypes from "prop-types";

const New = ({ setRoute }) => {
    return (
        <Layout setRoute={setRoute}>
            <div>
                <h1>Agregar Nuevo Personaje</h1>

            </div>
        </Layout>
    );
};

New.propTypes = {
    setRoute: PropTypes.func,
};

export default New;
>>>>>>> development
