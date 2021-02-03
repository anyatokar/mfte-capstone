import { Navbar, Nav, NavLink, Form, FormControl, Button, Image, Table } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export const Header = () => {
  return (
    <div className="navbar">
      <Navbar variant="light">
        <Nav className="mr-auto">
          <LinkContainer to='/'>
            <Nav.Link><strong>MFTE Simple</strong></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/buildings'>
            <Nav.Link>All Buildings</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about-mfte'>
            <Nav.Link>About MFTE</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about-mfte-simple'>
            <Nav.Link>About this app</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to='./pages/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='./pages/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer> */}
        </Nav>
        <Button>Saved Homes</Button>
        <Button>Saved Searches</Button>
        <Button>Sign up or Log in</Button>
      </Navbar>
    </div>
  )
}