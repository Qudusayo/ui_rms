import styled from "styled-components";

const Buttons = styled.button`
    background-color: #2856c3;
    color: hsl(0, 100%, 100%);
    width: 100%;
    height: 50px;
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
`;

type ButtonProps = {
    name: string;
    handleClick: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <Buttons onClick={props.handleClick}>{props.name}</Buttons>
    )
}

export default Button;