import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx'
import { Price, Name, Footer, ProductCardContainer, Img, CartButton } from './product-card.styles.jsx'

const ProductCard = ({product})=> {
    const {name, price, imageUrl} = product; 
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = ()=> addItemToCart(product)

    return(
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <CartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</CartButton>
        </ProductCardContainer>
    )
}

export default ProductCard;