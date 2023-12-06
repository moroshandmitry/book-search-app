import React from 'react'

import { isEmpty } from '../../../lib/helpers'

import { Typography } from '../../core'

import './styles/Empty.scss'

interface EmptyProps {
  data: unknown[]
  title?: string
  loading: boolean
}

const Empty: React.FC<React.PropsWithChildren<EmptyProps>> = (props) => {
  const { title, children, data, loading } = props

  if (isEmpty(data) && !loading) {
    return (
      <Typography variant="p" fontSize={24} flexGrow={1} alignItems="center" justifyContent="center">
        {title ?? children}
      </Typography>
    )
  }

  return null
}

export default Empty
