
import React from 'react';
import { Navbar,FormControl,Container,Nav,Badge,Dropdown} from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' style={{height: 80 }}>
        <Container>
            <Navbar.Brand>
          <Link to='/'>Shopping cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}} placeholder="search a prosuct" className='m-auto'/>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignright>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontsize="20px" />
                            <Badge>{10}</Badge>
                           </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth:370}}>
                            <span style={{padding:10}}>cart is empty</span>
                            </Dropdown.Menu>
                    </Dropdown>
                </Nav>
         </Container>
</Navbar>
  );
}

export default Header;
