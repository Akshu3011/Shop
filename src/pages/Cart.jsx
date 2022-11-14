import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"


const Container =styled.div`
    padding: 20px;
`

const Wrapper =styled.div``

const Title =styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts =styled.div``

const TopText =styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
`
const Info =styled.div`
    flex: 3;
`


const Product= styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail= styled.div`
    flex: 2;
    display: flex;
`

const Image= styled.img`
    width: 200PX;
    height: 150px;
`
const Details= styled.div`
    padding: 20PX;
    display: flex ;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName= styled.span`

    `
const ProductId= styled.span``
const ProductColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize= styled.div``

const PriceDetails=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    
    height: 1;
`
const Summary=styled.div`
    flex: 1;
`
const SummaryTitle=styled.h1``
const SummaryItem=styled.div``
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const SummaryButton=styled.button``

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://res.cloudinary.com/dpms34wpa/image/upload/v1668399604/Shop_App/pngfind.com-shoe-png-17080_eev5eu.png"/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>98765432167</ProductId>
                                <ProductColor color="navy"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://res.cloudinary.com/dpms34wpa/image/upload/v1668400582/Shop_App/pngfind.com-skirt-png-3205610_rqyvjb.png"/>
                            <Details>
                                <ProductName><b>Product:</b>Lilac SKIRT</ProductName>
                                <ProductId><b>ID:</b>34567892145</ProductId>
                                <ProductColor color="violet"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart