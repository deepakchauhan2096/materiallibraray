import React, { useState } from 'react'


const [state , setState] = useState();

const onChange = (event)=>{
    setState(event.target.value)
}

const BranchComponents = () => {
  return (
    <input conChange={onChange} value={state}  /> 
    
  )
}

export default BranchComponents