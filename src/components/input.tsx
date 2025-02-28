import styled from 'styled-components'

const Input = styled.input`
    outline: none;
    border: none;
    padding: 15px 12px;
    font-size: 15px;
    font-family: Proxima Nova;
    color: #000000;
    width: 100%;
`
const Container = styled.div`
    border: 1px solid #E6E1E5;
    width: 320px;
    line-height: 18.27px,
    height: 24px;
    border-radius: 8px;
    margin: 20px;
    position: relative;
`
const Label = styled.label`
    position: absolute;
    background: #fff;
    top: -10px;
    left: 10px;
    padding: 0px 4px;
    color: #939094;
    font-size: 13px
`
type InputProps = {
    name: string;
    placeholder: string
}

const InputPage = (props: InputProps) => {
    return (
        <Container>
            <Label>{props.name}</Label>
            <Input type="text" placeholder={props.placeholder} />
        </Container>
    )
}


export default InputPage