import React, { useState } from 'react';

const BarraLateral: React.FC = () => {
    const [opcaoSelecionada1, setOpcaoSelecionada1] = useState<string>('');
    const [opcaoSelecionada2, setOpcaoSelecionada2] = useState<string>('');

    const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada1(event.target.value);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada2(event.target.value);
    };

    return (
        <>
        <div className='barra-lateral'>
            
        <div className='selecionar'>
            <div className='bttsel'>
            <p className='filtrousuario'>Filtros de Usuarios</p>
                <label className='text' htmlFor="select1">Ano:</label>
                <select className="select" value={opcaoSelecionada1} onChange={handleChange1}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="opcao1">2024</option>
                    <option value="opcao2">2023</option>
                    <option value="opcao3">2022</option>
                </select>
                <label className='text' htmlFor="select2">Mes:</label>
                <select className="select" value={opcaoSelecionada2} onChange={handleChange2}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="opcaoA">Todos</option>
                    <option value="opcaoB">6 meses</option>
                    <option value="opcaoC">3 meses</option>
                </select>
            </div>
        </div>
        <div className="container2">
    <p className="filtro">Filtros de projetos</p>
        </div>
    </div>
    </>
    );
};

export default BarraLateral;
