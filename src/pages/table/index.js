import React, { useEffect, useState } from 'react';
import "../Layouts/Table.css"

export default function Table() {

    const [pegaHora, setHora] = useState();

    const [pegaDia, setDia] = useState();

    const [pegaNome, setNome] = useState();

    const [pegaCancelado, setCancelado] = useState();

    useEffect(() => {
        setDia(
            localStorage.getItem("dia")
        )
        setHora(
            localStorage.getItem("hora")
        )
        setNome(
            localStorage.getItem("nome")
        )
        setCancelado(
            localStorage.getItem("menssagem")
        )
    }, [])

    function Cancelar() {
        window.location.href = "/Cancelar"
        localStorage.removeItem("menssagem")
    }

    function Voltar() {
        window.location.href = "/"
    }

    return (
        <div className="App">
            <div className="App-Table">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Dia</th>
                            <th>Hora</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pegaNome}</td>
                            <td>{pegaDia}</td>
                            <td>{pegaHora}</td>
                            <td>{pegaCancelado}</td>
                            <td><button className="btn-Tabela" onClick={Cancelar}>Cancelar ou alterar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <button className="btn-Agenda" onClick={Voltar}>Voltar</button>
        </div>
    )
}