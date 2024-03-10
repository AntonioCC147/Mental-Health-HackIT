import { Navbar, Container, Nav } from "react-bootstrap"
import pages from "./navbar-pages.json"
import Image from 'next/image'
import navheart from '../../public/navheart.png'
import styles from './navbar.module.css'


export default function CustomNavbar() {
  let isAuth = false;
  if (typeof window !== 'undefined')
    isAuth = localStorage.getItem('uid') !== null;
  return <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><Image src={navheart} alt="hi" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {pages.map((page: any) => (
             <Nav.Link href={page.path}><div className={`${styles.a}`}><b>{page.text}</b></div></Nav.Link>
            ))}
            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}