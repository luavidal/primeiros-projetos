import { Title, Container, Label, Form, ContainerInput, Button, TopBackground, ImgTop, Input, ContainerEmail } from '../Home/styles.js';
import UsersImage from '../../assets/users.png';
import { useRef } from 'react';
import api from '../../services/api.js';

function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser(e) {
    e.preventDefault();

    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    });

    console.log(data);
  }

  return (
    <Container>

      <TopBackground>
        <ImgTop src={UsersImage} alt="Usuários" />
      </TopBackground>

      <Form>
        <Title>Cadastar Usuário</Title>

        <ContainerInput>
          <div>
            <Label>
              Nome<span>*</span>
            </Label>
            <Input type="text" placeholder="Digite seu nome" ref={inputName} />
          </div>

          <div>
            <Label>
              Idade<span>*</span>
            </Label>
            <Input type="number" placeholder="Digite sua idade" ref={inputAge} />
          </div>

        </ContainerInput>

        <ContainerEmail>
          <Label>
            Email<span>*</span>
          </Label>
          <Input type="email" placeholder="Digite seu e-mail" ref={inputEmail} />
        </ContainerEmail>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>

    </Container>

  )
}

export default Home;