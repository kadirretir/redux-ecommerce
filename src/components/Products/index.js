import React, { useEffect } from 'react'
import {
    ProductSection,
    ProductContainer,
    Cards,
    Card,
    ImgWrapper,
    CardImg,
    CardContent,
    H2,
    H3,
    MiddleGrid,
    MiddleLeft,
    Span,
    Button
} from './ProductsElements';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from '../../actions';

const Products = () => {
    const filteredItems = useSelector(state => state.filteredItems);
    const dispatch = useDispatch();

    // SCROLL TO TOP WHEN ADDING AN ITEM TO THE CART
    useEffect(() => {
        document.querySelectorAll("#toTop").forEach(singleButton =>
            singleButton.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }))
    }, [])

    return (
        <ProductSection>
            <ProductContainer>
                <Cards>
                    {filteredItems.map(product => {

                        return (
                            <Card key={product.id}>
                                <ImgWrapper>
                                    <CardImg src={product.poster_image} alt={product.title} />
                                </ImgWrapper>

                                <CardContent>
                                    <H2>{product.title}</H2>
                                    <MiddleGrid>
                                        <MiddleLeft>
                                            {product.properties.map(property => {
                                                return (
                                                    <React.Fragment key={property.prop_id}>
                                                        <Span><b>Bellek Tipi:</b> {property.memorytype}  </Span>
                                                        <Span><b>Bellek Hızı:</b> {property.memoryspeed} </Span>
                                                        <Span><b>Grafik Belleği:</b> {property.graphicmemory} </Span>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </MiddleLeft>
                                        <H3>{`₺${product.price}`}</H3>
                                    </MiddleGrid>
                                    <Button
                                        id="toTop"
                                        className="btn btn-default waves-effect waves-light"
                                        onClick={() => dispatch(addcart(product))}>Sepete Ekle</Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Cards>
            </ProductContainer>
        </ProductSection>
    )
}

export default Products
