import ContainerInputs from '../components/functionals/ContainerInputs'
import Button from '../components/basics/Button'
import Modal from '../components/functionals/Modal'
import Layout from '../components/functionals/Layout'

import { useState, useEffect } from 'react';

import './new.css'

export default function New({addCharacter}) {

//Estados para los datos de los inputs
const [nombre, setName] = useState("")
const [imageUrl, setImage] = useState("")
const [estado, setState] = useState("")
const [especie, setSpace] = useState("")
const [genero, setGender] = useState("")

//estado para el renderizado condicional del modal
const [showModal, setShowModal] = useState(false)

//estado para el texto del modal
const [textModal, setTextModal] = useState('')

//estado para el id
const [idState, setIdState] = useState(827)

//estado para el objeto personaje
const [personaje, setPersonaje] = useState({id:null, image: null, name: null, status: null, species: null, gender: null })

useEffect(() =>{
  //válida que se agregué el personaje cuando hayan cambios y no este en null
  if (personaje !== null && Object.values(personaje).some(val => val !== null)) {
     addCharacter(personaje)
  }
},[personaje, idState])

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
  const spice = event.target.value;
  setSpace(primeraMayuscula(spice)) 
};
//función para obtener el dato del input genero
const handlerGender = (event) => {
  const gender = event.target.value;
  setGender(primeraMayuscula(gender)) 
};

//función cuándo se hace el envío del formulario
const handlerSubmit = (event) => {
  event.preventDefault();

  if (nombre === "" || nombre === null || !validationText(nombre)) {
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
  if (genero === "" || genero === null || !validationText(genero)) {
    setTextModal("El género es inválido");
    setShowModal(true)
    return;
  }
 

  //texto que aparecera el el modal cuando se agregue un personaje
  setTextModal('Personaje agregado')

  //cambiar estado del modal
  setShowModal(true)

  //incrementar el id
  const nuevoId = idState + 1
  setIdState(nuevoId)

  //creación del objeto personaje con los datos del form
  setPersonaje({
    id: nuevoId,
    image: imageUrl,
    name: nombre,
    status: estado,
    species: especie,
    gender: genero
  })
  
  //limpiar form
  event.target.reset()

}

//Constante que contiene los datos de los inputs
const inputs = {imagen: {label:"Imagen:", type:"text", name:"image", placeholder:'Ingrese la URL', onChange: handlerImg},
                nombre: {label:"Nombre:", type:"text", name:"name", onChange:handlerName},
                estado: {label:"Estado:", type:"text", name:"state", placeholder:'Ej: Vivo', onChange:handlerState},
                especie: {label:"Especie:", type:"text", name:"spice", placeholder:'Ej: Humano', onChange:handlerSpace},
                genero: {label:"Género:", type:"text", name:"gender", placeholder:'Sexo con el cual se identifique', onChange:handlerGender},
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