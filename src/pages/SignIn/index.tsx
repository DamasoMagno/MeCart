import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Content } from './styles'

export function SignIn() {
  return (
    <Container>
      <Content>
        <strong>
          Me<span>Cart</span>
        </strong>

        <form>
          <Input label="Email" />
          <Input label="Senha" />
          <Button>Entrar</Button>
        </form>
      </Content>
    </Container>
  )
}
