import React, { useState } from 'react';
import "../Layouts/Main.css"

export default function Main() {

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

    function toTable() {
        localStorage.setItem("nome", agendar.user);
        localStorage.setItem("dia", agendar.dia);
        localStorage.setItem("hora", hora)
        localStorage.removeItem("menssagem")
        window.location.href = "/Tabela"
    }

    return (
        <div className="App">
            <h2>Agendar consulta</h2>
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
            <button className="btn-Marcador" onClick={toTable}>Enviar</button>
        </div>
    )
}