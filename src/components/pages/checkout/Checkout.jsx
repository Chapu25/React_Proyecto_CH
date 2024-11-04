import { useState } from "react";

 

export const Checkout = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });


    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log('Formulario enviado');
        console.log(userInfo)
    }

    
    const capturarInfo = (evento) =>{
        setUserInfo({ ...userInfo,[evento.target.name]: evento.target.value })
    }



    /* const capturarNombre = (evento) =>{
        setUserInfo( {...userInfo, name: evento.target.value} )
    }

    const capturarEmail = (evento) =>{
        setUserInfo( {...userInfo, email: evento.target.value} )
    }

    const  capturarTelefono = (evento) =>{
        setUserInfo( {...userInfo, phoneNumber: evento.target.value} )
    } */



  return (

    <div>
        <form onSubmit={funcionDelFormulario}>
            <input type="text" placeholder="Nicolas" name="name" onChange={capturarInfo}/>
            <input type="email" placeholder="nicosanchez@gmail.com" name="email" onChange={capturarInfo}/>
            <input type="text" placeholder="1130079402" name="phoneNumber" onChange={capturarInfo}/>

            <button type="submit">Comprar</button>
            <button type="button">Cancelar</button>
        </form>
        
    </div>
  )
}
