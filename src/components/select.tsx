
import styled from "styled-components"


const Select = styled.select`
    padding: 9px;
    width: 100%;
    border: 1px solid #2856C3;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    background :transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
     background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjI5Mjg5MyAwLjI5Mjg5M0MwLjY4MzQxNyAtMC4wOTc2MzExIDEuMzE2NTggLTAuMDk3NjMxMSAxLjcwNzExIDAuMjkyODkzTDggNi41ODU3OUwxNC4yOTI5IDAuMjkyODkzQzE0LjY4MzQgLTAuMDk3NjMxMSAxNS4zMTY2IC0wLjA5NzYzMTEgMTUuNzA3MSAwLjI5Mjg5M0MxNi4wOTc2IDAuNjgzNDE3IDE2LjA5NzYgMS4zMTY1OCAxNS43MDcxIDEuNzA3MTFMOC43MDcxMSA4LjcwNzExQzguMzE2NTggOS4wOTc2MyA3LjY4MzQyIDkuMDk3NjMgNy4yOTI4OSA4LjcwNzExTDAuMjkyODkzIDEuNzA3MTFDLTAuMDk3NjMxMSAxLjMxNjU4IC0wLjA5NzYzMTEgMC42ODM0MTcgMC4yOTI4OTMgMC4yOTI4OTNaIiBmaWxsPSIjOTM5MDk0Ii8+Cjwvc3ZnPgo=");
     background-repeat: no-repeat;
     background-position-x: 97.9%;
     background-position-y: 50%;
     background-size: 2%;
     margin: 0.3em auto 2em;
     outline: none;
     padding-left : 10px;
     font-size: 13px;
`

const Label = styled.label`
     position:relative;
     left: 10px;
     top: 15px;
     color: #2856C3;
     background: #fff;
     padding: 0px 1px;
     font-size: 12px;
`
const SelectComponent = () => {
    return (
        <>
        <Label>No of units</Label>
        <Select>
            <option value="">My matric number</option>
            <option value="option1">2010</option>
            <option value="option2">2020</option>
            <option value="option3">2020</option>
        </Select>
        </>
       
       
       
    )
}

export default SelectComponent