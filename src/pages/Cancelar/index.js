import React, { useState } from 'react';

export default function Cancel(){

    const [cancelado, setCancelado] = useState();

    function onChange(e){
        setCancelado(
             e.target.value
        )
    }

     function MotivoCancel(){
        localStorage.removeItem("dia")
        localStorage.removeItem("nome")
        localStorage.removeItem("hora")
        localStorage.setItem("menssagem", cancelado)
        window.location.href= "/tabela"
     }

    return(
        <div>
         <input type="text" onChange={onChange} value={cancelado} id="Cancelar" placeholder="Motivo da cancela"/>
         <button onClick={MotivoCancel} >Enviar</button>
        </div>
    )
}