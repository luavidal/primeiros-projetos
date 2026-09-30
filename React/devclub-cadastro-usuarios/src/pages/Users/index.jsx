import { Title, Container, Button2, TopBackground, ImgTop, Label } from './styles';
import UsersImage from '../../assets/users.png';

function Users() {

  return (
    <Container>

      <TopBackground>
        <ImgTop src={UsersImage} alt="Usuários" />
      </TopBackground>

      <Title>Listar Usuários</Title>

      <Container>
        <SectionUser>
          <img />
          <Container>
            <Title>Rodolfo</Title>
            <Label>rodrigo@example.com</Label>
            <Label>31 anos</Label>
          </Container>
        </SectionUser>

      </Container>

      <Button2>Cadastrar novo usuário</Button2>

    </Container>

  )
}

export default Users;