import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

const Link = (props: { active: boolean, children: ReactNode, onClick: ()=> void}) => {
  if (!props.active) {
    return <span>{props.children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        props.onClick()
      }}
    >
      {props.children}
    </a>
  )
}

export default Link