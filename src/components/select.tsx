
import styled from "styled-components"


const Select = styled.select`
    height: 3.5em;
    border: 1px solid blue;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
    background :transparent;
    margin: 0.3em auto 2em;
    padding: .6rem;
`


const SelectPage = () => {
    return (
        <Select>
            <option value="">My matric number</option>
            <option value="option1">2010</option>
            <option value="option2">2020</option>
            <option value="option3">2020</option>
        </Select>
    )
}

// cd ui_rms-main
// npm run dev

export default SelectPage