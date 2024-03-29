import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CaretLeft, List, Package, Plus } from '@phosphor-icons/react'

import { useCartsStorage } from '@store/cartsStorage'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Product } from './components/Product'
import { Resumes } from './components/Resumes'
import { EditCartModal } from './components/EditCartModal'
import { ProductModal } from './components/ProductModal'

import { Actions, Container, Navigation } from './styles'

import 'swiper/css'
import { useTotalCart } from '../../hooks/useTotalCart'
import { useProductStorage } from '@store/productsStorage'

type ParamsProps = {
  cartId: string
}

export function Cart() {
  const { cartId } = useParams<ParamsProps>()

  const { setCart, toggleCartModal } = useCartsStorage((state) => ({
    toggleCartModal: state.toggleCartModal,
    setCart: state.setCart,
  }))

  const { products, toggleProductModal } = useProductStorage((state) => ({
    products: state.products,
    toggleProductModal: state.toggleProductModal,
  }))

  const totalPrice = useTotalCart(String(cartId))

  useEffect(() => {
    setCart(cartId as string)
  }, [])

  return (
    <>
      <Header>
        <Navigation to="/">
          <CaretLeft />
          <strong>Carrinho</strong>
        </Navigation>

        <Actions>
          <Button onClick={toggleProductModal}>
            <Plus />
            <span>Inserir item</span>
          </Button>

          <button className="logout" onClick={toggleCartModal}>
            <List />
          </button>
        </Actions>
      </Header>

      <Container>
        <Resumes totalPrice={totalPrice} />

        <section className="products">
          <strong className="quantityProducts">Items</strong>

          <ul>
            {products.length > 0 ? (
              products.map((product) => {
                return <Product key={product.id} product={product} />
              })
            ) : (
              <div className="no-content">
                <Package weight="bold" size={50} />
                <p>Nenhum item inserido ao carrinho</p>
              </div>
            )}
          </ul>
        </section>
      </Container>

      <EditCartModal />
      <ProductModal />
    </>
  )
}
