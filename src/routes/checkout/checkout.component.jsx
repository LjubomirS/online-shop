import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx'
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

import { CheckoutContainer, CheackoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'

const Checkout = ()=> {
const { cartItems, cartTotal } = useContext(CartContext)

    return(
        <CheckoutContainer>
            <CheackoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheackoutHeader>
                {
                    cartItems.map((cartItem)=> (<CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
                <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;