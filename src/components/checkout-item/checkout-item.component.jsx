import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, ImageContainer, Img, Name, Quantity, Price, RemoveButton, Arrow, Value } from './checkout-item.styles.jsx'

const CheckoutItem = ({cartItem})=>{
    const { name, imageUrl, quantity, price} = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const clearItemHandler = ()=>clearItemFromCart(cartItem);
    const decrementHandler = ()=>removeItemFromCart(cartItem);
    const incrementHandler = ()=>addItemToCart(cartItem);


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name> {name} </Name>
            <Quantity> 
                <Arrow onClick={decrementHandler}>&#10094;</Arrow> 
                    <Value>{quantity}</Value>
                <Arrow onClick={incrementHandler}>&#10095;</Arrow> 
            </Quantity>
            <Price> {price} </Price>
            <RemoveButton onClick={clearItemHandler}>
                    &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;