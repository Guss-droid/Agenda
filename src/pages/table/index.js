import React, { useEffect, useState } from 'react';

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
    }

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Dia</th>
                        <th>Hora</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pegaNome}</td>
                        <td>{pegaDia}</td>
                        <td>{pegaHora}</td>
                        <td>{pegaCancelado}</td>
                        <td><button onClick={Cancelar}>Cancelar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}