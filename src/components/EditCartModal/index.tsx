import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CurrencyDollar, Package, X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";

import { ICart } from "../../interfaces";
import { useModalStorage } from "../../store/modalStorage";
import { useCartsStorage } from "../../store/cartsStorage";

import { Input } from "../Input";
import { Button } from "../Button";

import { Overlay, Content } from "./styles";

export function EditCartModal() {
  const { openCartModal, modalCartIsOpen, cart } = useModalStorage((state) => ({
    modalCartIsOpen: state.modalCartIsOpen,
    openCartModal: state.openCartModal,
    cart: state.cart,
  }));
  const { addCart, updateCart } = useCartsStorage((state) => ({
    addCart: state.addCart,
    updateCart: state.updateCart,
  }));
  const { register, handleSubmit, setValue } = useForm<ICart>();

  const handleCreateCart = (data: ICart) => {
    if (cart?.id) {
      updateCart({ ...cart, ...data });
    } else {
      addCart(data);
    }

    openCartModal(false);
  };

  useEffect(() => {
    if (cart?.id) {
      setValue("cartName", cart.cartName);
      setValue("totalPrice", cart.totalPrice);
    }
  }, [cart]);

  const showTitleExists = cart?.id ? "Editar carrinho" : "Novo carrinho";
  const cartStatusExisting = cart?.id ? "Salvar alterações" : "Criar carrinho";

  return (
    <Modal.Root open={modalCartIsOpen} onOpenChange={openCartModal}>
      <Overlay />

      <Modal.Portal>
        <Content>
          <header>
            <Modal.Title>{showTitleExists}</Modal.Title>
            <Modal.Close asChild>
              <button>
                <X />
              </button>
            </Modal.Close>
          </header>

          <form onSubmit={handleSubmit(handleCreateCart)}>
            <Input
              label="Nome do carrinho"
              icon={Package}
              register={{
                ...register("cartName", {
                  required: true,
                }),
              }}
            />
            <Input
              type="number"
              label="Limite sacola"
              step={"0.01"}
              icon={CurrencyDollar}
              register={{
                ...register("totalPrice", {
                  required: true,
                }),
              }}
            />
            <Button type="submit">{cartStatusExisting}</Button>
          </form>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
