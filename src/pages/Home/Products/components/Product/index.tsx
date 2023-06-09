import { Trash } from "@phosphor-icons/react";

import { useProductsStorage } from "../../../../../store/productStorage";

import { Container } from "./styles";

interface CartProps {
  product: {
    id: string;
    productName: string;
  };
}

export function ProductName({ product }: CartProps) {
  const removeProduct = useProductsStorage((state) => state.removeProduct);

  return (
    <Container>
      <div>
        <strong>{product.productName}</strong>
      </div>

      <button onClick={() => removeProduct(product.id)}>
        <Trash />
      </button>
    </Container>
  );
}
