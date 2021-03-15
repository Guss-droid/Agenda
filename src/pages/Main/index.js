import React, { useState } from 'react';

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

    function toTable(){
        localStorage.setItem("nome", agendar.user);
        localStorage.setItem("dia", agendar.dia);
        localStorage.setItem("hora", hora)
        // window.location.href="/Tabela"
    }

    return (
        <div>
            <h2>Agendar consulta</h2>
            <form>
                <label>Nome :</label>
                <input type="text" id="user" onChange={onClick} value={agendar.user} placeholder="Nome..." required />
                <br />
                <label>Horario :</label>
                <input id="hora" type="time" name="hora" onChange={onChange} value={hora}
                    min="09:00" max="18:00" required />
                <br />
                <label>Dia :</label>
                <input type="date" id="dia" min="2021-03-15" onChange={onClick} value={agendar.dia} required />
                <br />
                <input type="submit" onClick={toTable} value="Enviar formulário" />
            </form>
        </div>
    )
}