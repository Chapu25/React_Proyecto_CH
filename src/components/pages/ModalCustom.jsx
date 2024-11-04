import React from 'react'


const ModalCustom = ({title, children}) => {
  return (

    <div style={{border:"2px solid black", marginTop:"100px", width:"300px"}} >
        <h2>{title}</h2>
        <h3>Algo mas</h3>
        {children}
    </div>

  )
}

export default ModalCustom