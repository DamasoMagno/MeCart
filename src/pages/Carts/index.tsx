import { useEffect, useState } from 'react'
import {
  Bag,
  Basket,
  MagnifyingGlass,
  Plus,
  WarningCircle,
} from '@phosphor-icons/react'
import { toast } from 'react-hot-toast'
import { ICart } from 'src/types'

import { useCartsStorage } from '@store/cartsStorage'

import { Button } from '@components/Button'
import { Input } from '@components/Inputs/Input'
import { Header } from '@components/Header'
import { Cart } from './components/Cart'
import { CreateCartModal } from './components/CreateCartModal'

import { Content, Logo, Actions } from './styles'

export function Home() {
  const { carts, loadCarts, toggleNewCartModal } = useCartsStorage((state) => ({
    carts: state.carts,
    loadCarts: state.loadCarts,
    toggleNewCartModal: state.toggleNewCartModal,
  }))

  const [cartsFiltered, setCartsFiltered] = useState<ICart[]>(carts)
  const [filter, setFilter] = useState<string>('')

  function handleFilterItems() {
    const productsFiltered = carts.filter((cart) =>
      cart.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    )

    if (!productsFiltered.length) {
      toast.error('Carrinhos não encontrados', {
        icon: <WarningCircle />,
        className: 'alertError',
      })

      return
    }

    setCartsFiltered(productsFiltered)
    setFilter('')
  }

  useEffect(() => loadCarts(), [])

  useEffect(() => {
    setCartsFiltered(carts)
  }, [carts])

  return (
    <>
      <Header>
        <Logo>
          <Basket weight="bold" />
          <strong>
            Me<span>Cart</span>
          </strong>
        </Logo>

        <Actions>
          <Button onClick={toggleNewCartModal}>
            <Plus />
            <span>Novo carrinho</span>
          </Button>
        </Actions>
      </Header>

      <Content>
        <strong>Carrinhos</strong>

        <div className="filter">
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar carrinho"
          />
          <Button variant={{ outline: true }} onClick={handleFilterItems}>
            <MagnifyingGlass />
          </Button>
        </div>

        <ul>
          {cartsFiltered.length > 0 ? (
            cartsFiltered.map((cart) => <Cart key={cart.id} cart={cart} />)
          ) : (
            <div className="no-content">
              <Bag weight="bold" size={50} />
              <p>Você não possui carrinhos cadastrados</p>
            </div>
          )}
        </ul>
      </Content>

      <CreateCartModal />
    </>
  )
}
