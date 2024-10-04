"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fontsource/ibm-plex-sans/600.css';
import {IBM_Plex_Sans} from 'next/font/google'

const ibmfont = IBM_Plex_Sans({
    weight: '600',
    subsets: ['latin'],
  })

import { Button } from "@/components/ui/button"

import React from "react";
import Image from 'next/image'
import mainImage from '../assets/clubhouse-nav-logo.png'

function Navbartop(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                <Navbar.Brand href="#home">
                    <Image src={mainImage} alt='ClubHouse' width={50} height={55}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="#pricing" className={ibmfont.className + " text-white"}>Invite</Nav.Link>
                        <Nav.Link href="#pricing" className={ibmfont.className + " text-white"}>Discover</Nav.Link>
                        <Nav.Link href="#features" className={ibmfont.className + " text-white"}>Support</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#join">
                        <Button variant={"clubhouse"} className={ibmfont.className + " text-white"}>Join</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Navbartop;