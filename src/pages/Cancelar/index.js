import React, { useState } from 'react';
import "../Layouts/Cancel.css"

export default function Cancel() {

    const [cancelado, setCancelado] = useState();

    const [agendar, setAgendar] = useState({
        user: '',
        dia: ''
    })

    const [hora, setHora] = useState()

    function onClick(e) {
        setAgendar({
            ...agendar,
            [e.target.id]: e.target.value
        })
    }

    function onChange(e) {
        setHora(
            e.target.value
        )
    }

    function onCancel(e) {
        setCancelado(
            e.target.value
        )
    }

    function toTable() {
        localStorage.setItem("nome", agendar.user);
        localStorage.setItem("dia", agendar.dia);
        localStorage.setItem("hora", hora)
        localStorage.removeItem("menssagem")
        window.location.href = "/Tabela"
    }

    function MotivoCancel() {
        localStorage.removeItem("dia")
        localStorage.removeItem("nome")
        localStorage.removeItem("hora")
        localStorage.setItem("menssagem", cancelado)
        window.location.href = "/Tabela"
    }

    return (
        <div className="App-Cancel">
            <h2>Alterar</h2>
            <label>Nome :</label>
            <input type="text" id="user" onChange={onClick} value={agendar.user} placeholder="Nome..." required />
            <br />
            <label>Dia :</label>
            <input type="date" id="dia" min="2021-03-18" onChange={onClick} value={agendar.dia} required />
            <br />
            <label>Horario :</label>
            <input id="hora" type="time" name="hora" onChange={onChange} value={hora}
                min="09:00" max="18:00" required />
            <br />
            <br />
            <button className="btn-ToTable" onClick={toTable}>Enviar</button>
            <hr />
            <h2>Cancelar</h2>
            <input type="text" onChange={onCancel} value={cancelado} id="Cancelar" placeholder="Motivo da cancela" />
            <br />
            <button className="btn-Cancelado" onClick={MotivoCancel}>Enviar</button>
        </div>
    )
}