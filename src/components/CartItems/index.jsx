import { Table } from "../index"
import { useCart } from "../../hooks/CartContext"
import { ButtonGroup, EmptyCart, ProductImage } from "./styles"
import { FormatPrice } from "../../Utils/FormatPrice"

export function CartItems() {
    const { cartProducts, inCreaseProduct, deCreaseProduct } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts && cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>
                            <Table.Td>
                                {product.name}
                            </Table.Td>
                            <Table.Td>
                                {product.currencyValeu}
                            </Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => deCreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => inCreaseProduct(product.id)}>+</button>
                                </ButtonGroup>

                            </Table.Td>
                            <Table.Td>
                                {FormatPrice(product.quantity * product.price)}
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <EmptyCart>

                    </EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    )
}