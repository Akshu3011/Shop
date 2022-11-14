import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"


const Container =styled.div``
const Wrapper =styled.div``
const Title =styled.div``

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart