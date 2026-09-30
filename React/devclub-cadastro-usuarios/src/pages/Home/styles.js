import styled from 'styled-components';

export const Container = styled.section`
    background: linear-gradient(135deg, #181f36 50%, #0d1429 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`

export const TopBackground = styled.section`
    background: linear-gradient(135deg, #ED6E0F 0%, #a12b07 100%);
    border-radius: 45px;
    height: 30vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-width: 320px;

    img {
        max-width: 100%;
        max-height: 100%;
`

export const ImgTop = styled.img``

export const Form = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    width: 40vw;
    min-width: 320px;
`

export const Title = styled.h1`
    color: #fff;
`

export const Label = styled.p`
    color: #fff;
    font-size: 10px;
    width: 100%;
    
    span{
        color: #d6461a;
    }
`

export const Input = styled.input`
    border: none;
    border-radius: 7px;
    padding: 5px;
    width: 100%;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    -moz-appearance: textfield;
`

export const ContainerInput = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const ContainerEmail = styled.section`
  width: 100%;
  `

export const Button = styled.button`
    background: linear-gradient(135deg, #ED6E0F 0%, #a12b07 100%);
    border: none;
    border-radius: 120px;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-shadow: 1px 1px 2px #000;

    &:hover {
        cursor: pointer;
        background: linear-gradient(135deg, #ED6E0F 40%, #a12b07 100%);
    }

    &:active {
        background: linear-gradient(135deg, #ED6E0F 0%, #a12b07 100%);
        transform: scale(0.98);
    }
`

