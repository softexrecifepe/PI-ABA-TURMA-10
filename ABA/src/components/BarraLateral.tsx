import React, { useState } from 'react';
import Profile from '../imagem/profile.png';

const BarraLateral: React.FC = () => {
    const [opcaoSelecionada1, setOpcaoSelecionada1] = useState<string>('');
    const [opcaoSelecionada2, setOpcaoSelecionada2] = useState<string>('');
    const [opcaoSelecionada3, setOpcaoSelecionada3] = useState<string>('');
    const [opcaoSelecionada4, setOpcaoSelecionada4] = useState<string>('');

    const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada1(event.target.value);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada2(event.target.value);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada3(event.target.value);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcaoSelecionada4(event.target.value);
    };

    return (
        <div className="barra-lateral">
            <div className="selecionar">
                <div className="bttsel">
                    <div className='icon-text'>
                    <img className='icon-profile' src={Profile} alt="" /><p className="filtrousuario">Filtros de Usuários</p>
                    </div>
                    <label className="text" htmlFor="select1">Ano:</label>
                    <select
                        className="select"
                        id="select1"
                        value={opcaoSelecionada1}
                        onChange={handleChange1}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    <label className="text" htmlFor="select2">Mês:</label>
                    <select
                        className="select"
                        id="select2"
                        value={opcaoSelecionada2}
                        onChange={handleChange2}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="todos">Todos</option>
                        <option value="6meses">6 meses</option>
                        <option value="3meses">3 meses</option>
                    </select>
                </div>
            </div>
             <div className='text-icon'>
             <img className='profile-icon' src={Profile} alt="" /><p className="filtro">Filtros de Projetos</p>
             </div>
            <div className="container2">
            </div>
            <div className="opcao">
                <label className="text" htmlFor="select3">Ano:</label>
                <select
                    className="select"
                    id="select3"
                    value={opcaoSelecionada3}
                    onChange={handleChange3}
                >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
                <label className="text" htmlFor="select4">Mês:</label>
                <select
                    className="select"
                    id="select4"
                    value={opcaoSelecionada4}
                    onChange={handleChange4}
                >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="todos">Todos</option>
                    <option value="6meses">6 meses</option>
                    <option value="3meses">3 meses</option>
                </select>
            </div>
        </div>
    );
};

export default BarraLateral;