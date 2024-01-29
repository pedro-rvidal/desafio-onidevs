// Importação de ferramentas e componentes
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react'

// Definição da funcionalidade do componente Read
export default function Read() {

    // Definição de variáveis e métodos de estado
    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`http://127.0.0.1:8000/backend_api/artist/`)
                .then((response) => {
                    setAPIData(response.data);
                })
        }, [])

    // Definição de método para exclusão de dados
    const onDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/backend_api/artist/${id}`)
         .then(() => {
            getData();
        })
    }

    // Definição de método para obtenção de dados
    const getData = () => {
        axios.get(`http://127.0.0.1:8000/backend_api/artist/`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    // Definição de método para armazenamento de dados
    const setData = (data) => {
        let { id, modalidadeType, completeName, documentType, documentNumber } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Modalidade Type', modalidadeType);
        localStorage.setItem('Complete Name', completeName);
        localStorage.setItem('Documente Type', documentType);
        localStorage.setItem('Document Number', documentNumber)
    }

    // Template de apresentação da página Read
    return (
        <div>
            <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign="center">Modalidade</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Nome</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Tipo de Documento</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Número do Documento</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Opções</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.modalidadeType}</Table.Cell>
                        <Table.Cell>{data.completeName}</Table.Cell>
                        <Table.Cell>{data.documentType}</Table.Cell>
                        <Table.Cell>{data.documentNumber}</Table.Cell>
                        <Table.Cell>
                            <Link to="/update">
                                <button className="buttonUpdate button-spacing" onClick={() => setData(data)}>Editar</button>
                            </Link>
                            <button className="buttonDelete" onClick={() => onDelete(data.id)}>Excluir</button>
                        </Table.Cell>
                        
                    </Table.Row>
                )})}
                </Table.Body>

            </Table>

            <Link to="/create">
                <div className="buttons-container">
                    <Button className="buttonCreate" type='submit'>Criar</Button>
                </div>
            </Link>
        </div>
    )
}