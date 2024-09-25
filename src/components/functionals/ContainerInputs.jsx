import PropTypes from 'prop-types'

import Input from '../basics/Input'

function ContainerInputs({inputs}) {
  return (
    <div>
      <Input 
      label={inputs.imagen.label} type={inputs.imagen.type} name={inputs.imagen.name} placeholder={inputs.imagen.placeholder} onChange={inputs.imagen.onChange}>
      </Input>
      <Input 
      label={inputs.nombre.label} type={inputs.nombre.type} name={inputs.nombre.name} onChange={inputs.nombre.onChange}>
      </Input>
      <Input 
      label={inputs.estado.label} type={inputs.estado.type} name={inputs.estado.name} placeholder={inputs.estado.placeholder} onChange={inputs.estado.onChange}>
      </Input>
      <Input 
      label={inputs.especie.label} type={inputs.especie.type} name={inputs.especie.name} placeholder={inputs.especie.placeholder} onChange={inputs.especie.onChange}>
      </Input>
    </div>
  )
}

ContainerInputs.propTypes = {
  inputs: PropTypes.object.isRequired
}

export default ContainerInputs
