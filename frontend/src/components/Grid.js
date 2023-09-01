import React from "react";
import axios from "axios";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";
import { toast} from "react-toastify";
import "./style/azul.css"


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1100px;
    margin: 20px auto;
    word-break: break-all;
`

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    text-align: center;
`;

export const Th = styled.th`
    text-align: center;
    border-bottom: inset;
    padding-bottom: 5px;
    
    @media(max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
    `;
export const Td = styled.td`
    padding top: 15px;
    text-aling: ${(props) => (props.alingCenter ? "center":"start")};
    width: ${(props) => (props.width ? props.width: "auto")};
    
    @media(max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;




const Grid = ({users}) =>{
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Bau</Th>
                    <Th>Tamanho</Th>
                    <Th>Quadra</Th>
                    <Th onlyWeb>Lote</Th>
                    <Th onlyWeb>Importador</Th>
                    <Th onlyWeb>Locador</Th>

                </Tr>
            </Thead>
            <Tbody >
                {users.map((item, i) =>(
                    <Tr  key={i}>
                        <Td className="azul" width ="20%">{item.bau}</Td>
                        <Td  width ="10%">{item.dim}</Td>
                        <Td  width ="10%">{item.quadra}</Td>
                        <Td  width ="10%" onlyWeb>{item.lote}</Td>
                        <Td  width ="20%" onlyWeb>{item.importador}</Td>
                        <Td  width ="20%" onlyWeb>{item.locador}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default Grid;


 // FaTrash   onClick ={() => handleDelete(item.id)}