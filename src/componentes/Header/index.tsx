import * as C from './styled'
import logMenu from '../../logos e imgs/cardapio.png'
import  { useEffect, useState } from 'react';
import {FaLinkedinIn , FaGithub,FaWhatsapp } from "react-icons/fa";
import './navbar.css';

interface Types {
    teste?:any,
    sob?: any,
    port?:any
}

export const Headers:React.FC<Types> =({teste , sob , port})=>{


    const [menu,setMenu] = useState(false)
    const [isnavBar, setNavBar] = useState(false)

    useEffect(()=>{
        const handlScrool = ()=>{
            setNavBar(window.scrollY >= 80)
            setMenu(false)
        }
        
        window.addEventListener('scroll' , handlScrool)

        handlClickMenu()
    },[])


    const handlClickMenu = ()=>{
        if(menu){
            setMenu(false)

        }else{
            setMenu(true)
        }

    }

    return(
        
        <C.container className={`navbar ${isnavBar ? 'hidden' : ''}`}>

            <C.name>
                <C.span>A</C.span>lex <C.span>C</C.span>arneiro
            </C.name>
            <C.menu>
                <C.a>Home</C.a>
                <C.a onClick={sob}>Sobre Min</C.a>
                <C.a onClick={teste}>Certificaçoes</C.a>
                <C.a onClick={port}>Portifolios</C.a>
            </C.menu>

            <C.redes>
                <C.Link href={'https://www.linkedin.com/in/alex-carneiro-731238241/'} target='_blank'>
                    <C.incon><FaLinkedinIn/></C.incon>
                </C.Link>
                <C.Link href={"https://github.com/AlexCarneiroo"} target='_blank'>
                    <C.incon><FaGithub/></C.incon>
                </C.Link>
                <C.Link href={'https://contate.me/desenvovedor-alex'} target='_blank'>
                    <C.incon><FaWhatsapp/></C.incon>
                </C.Link>
            </C.redes>

            <C.menuRespom onClick={handlClickMenu}>
                <C.imgMenu src={logMenu} alt="" width={25}/>
            </C.menuRespom>
                <C.menuRespomRedes $respom={menu}>
                    <C.b>Home</C.b>
                    <br />
                    <C.b onClick={sob}>Sobre Min</C.b>
                    <br />
                    <C.b onClick={teste}>Certificaçoes</C.b>
                    <br />
                    <C.b onClick={port}>Portifolios</C.b>
                </C.menuRespomRedes>
        </C.container>

    )
}