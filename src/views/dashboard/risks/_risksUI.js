import React from 'react'
import { Can, Risks } from '../../../components/custom'

const RiskUI = (props) => {
  const { performance: { data } } = props
  return (
    <>
      <Can rule="dashboard:manager">
        {
          data && (
            <Risks performance={data} />
          )
        }
      </Can>
    </>
  )
}

export default RiskUI
