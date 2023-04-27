import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CreateCartModal } from "./components/CreateCartModal";
import { Cart } from "./components/Cart";

import { Content } from "./styles";

export function HistoryCarts() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartOpen = () => setCartOpen(!cartOpen);

  return (
    <div>
      <Header />

      <Content>
        <nav>
          <button>Menor preço</button>
          <button>Mais recente</button>
        </nav>

        <div className="carts">
          <strong className="cartQuantity">
            Carrinhos <span>2</span>
          </strong>

          <ul>
            <Cart
              title="Cebolitos e doritos"
              createdAt="20/01/2022"
              totalPrice="32,00"
            />
            <Cart
              title="Cebolitos e doritos"
              createdAt="20/01/2022"
              totalPrice="32,00"
            />
          </ul>
        </div>

        <footer>
          <Button onClick={toggleCartOpen}>
            <Plus /> Novo Carrinho
          </Button>
        </footer>
      </Content>

      <CreateCartModal openModal={cartOpen} onOpenModal={toggleCartOpen} />
    </div>
  );
}
