import styled from "styled-components";

export const Input = styled.input`
    @media screen and (min-width: 280px) {
        margin: 7px;
    }
    @media screen and (min-width: 900px) {
        margin: 0px 7px;
    }
    
    padding: 3px;
    border-radius: 5px;
    background-color: whitesmoke;
`;
export const Label = styled.label`
    @media screen and (max-width: 899px) {
        align-items: center;
    }
    margin-right: 8px;
    display: flex;
    align-items: flex-end;
`;

export const Title = styled.h1`
    margin-bottom: 15px;
    
    display: flex;
    justify-content: center;
`;
export const FormButton = styled.button`
    border-radius: 5px;
    border-color: grey;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;