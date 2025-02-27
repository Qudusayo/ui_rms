import styled from "styled-components";

const Buttons = styled.button`
    background-color: #2856c3;
    color: hsl(0, 100%, 100%);
    width: 160px;
    height: 50px;
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

const Button = () => {
    const handleClick = () => {
        console.log("Button Clicked"); 
    }
    return (
        <Buttons onClick={handleClick}>Click Me</Buttons>
    )
}

export default Button;