import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ItemNav({route, text}) {
  return (
    <li className='styleNone'>
        <Link  to={route}>{text}</Link>
    </li>
  )
}

ItemNav.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ItemNav
