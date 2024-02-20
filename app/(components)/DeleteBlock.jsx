import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-rose-600 hover:cursor-pointer hover:text-rose-400"
    />
  )
}

export default DeleteBlock
