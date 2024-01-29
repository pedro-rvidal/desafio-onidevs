// Importação de ferramentas e componentes
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// Definição da funcionalidade do componente Update
export default function Update() {
    // Definição de variáveis e métodos de estado
    let navigation = useNavigate();
    const [modalidadeType, setModalidadeType] = useState('');
    const [completeName, setCompleteName] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [id, setID] = useState(null);

    // Definição de método para obtenção de dados para que possa ser feita a atualização
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setModalidadeType(localStorage.getItem('Modalidade Type'));
        setCompleteName(localStorage.getItem('Complete Name'));
        setDocumentType(localStorage.getItem('Documente Type'));
        setDocumentNumber(localStorage.getItem('Document Number'));
    }, []);

    // Definição de método para envio dos dados alterados para o backend
    const updateAPIData = () => {
        axios.put(`http://127.0.0.1:8000/backend_api/artist/${id}/`, {
            modalidadeType,
            completeName,
            documentType,
            documentNumber
        }).then(() => {
            navigation('/read');
        })
    }

    // Template de apresentação da página Update
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <label>Modalidade</label>
                        <div class="field">
                            <select class="ui fluid search dropdown boxSelect" value={modalidadeType} onChange={(e) => setModalidadeType(e.target.value)}>
                                <option value="Não selecionado">Selecione</option>
                                <option value="Solo">Solo</option>
                                <option value="Banda">Banda</option>
                            </select>
                        </div>
                </Form.Field>
                <Form.Field>
                    <label>Nome Completo</label>
                    <input placeholder='Banda ou Solo' value={completeName} onChange={(e) => setCompleteName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Documento</label>
                        <div class="field">
                            <select class="ui fluid search dropdown boxSelect" value={documentType} onChange={(e) => setDocumentType(e.target.value)} >
                                <option value="Não selecionado">Selecione</option>
                                <option value="CPF">CPF</option>
                                <option value="RG">RG</option>
                            </select>
                        </div>
                </Form.Field>
                <Form.Field>
                    <label>Número do Documento</label>
                    <input type="number" placeholder='Apenas Números' value={documentNumber} onChange={(e) => setDocumentNumber(e.target.value)}/>
                </Form.Field>
                <div className="button-group">
                    <Link to="/read">
                        <Button className='buttonCancel'>Cancelar</Button>
                    </Link>
                    <Button className='buttonCreate' onClick={updateAPIData} type='submit'>Editar</Button>
                </div>
            </Form>
        </div>
    )
}