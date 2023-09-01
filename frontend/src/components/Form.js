import React, {useRef} from "react";
import styled from"styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;
const InputArea = styled.div`
    display:flex;
    flex-direction: column;
`;
const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 35px;
`
const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;
`;

const Form = ({ onEdit }) =>{
    const ref = useRef();
    return(
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Bau</Label>
                <Input name="bau"/>
            </InputArea>
            <InputArea>
                <Label>Dimensão</Label>
                <Input name="dim" type="number"/>
            </InputArea>
            <InputArea>
                <Label>Quadra</Label>
                <Input name="quadra"/>
            </InputArea>
            <InputArea>
                <Label>Lote</Label>
                <Input name="lote" type="number"/>
            </InputArea>
            <InputArea>
                <Label>Importador</Label>
                <Input name="importador"/>
            </InputArea>
            <InputArea>
                <Label>Locador</Label>
                <Input name="locador"/>
            </InputArea>
            <Button type="submit">BUSCAR</Button>
        </FormContainer>
    );
};

export default Form