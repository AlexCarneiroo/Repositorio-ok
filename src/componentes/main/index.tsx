import * as C from '../main/style'
import { useRef } from 'react'
import { FaChevronUp, FaShare, FaAngleDown } from 'react-icons/fa'
// Carrosel
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';




// Tecnologia
import nodejs from '../../logos e imgs/tecnologias/nodejs.jpg'
import uselogo from '../../logos e imgs/Designer _Flatline.png'
import useimg from '../../logos e imgs/Sending emails_Monochromatic.png'
import git from '../../logos e imgs/tecnologias/git.jpg'
import javaScript from '../../logos e imgs/tecnologias/javascript.jpg'
import react from '../../logos e imgs/tecnologias/reactjs.jpg'
import ty from '../../logos e imgs/tecnologias/typescript.jpg'
import do1 from '../../logos e imgs/tecnologias/powered-by-mysql-167x86.png'
import do2 from '../../logos e imgs/tecnologias/download.png'
import html from '../../logos e imgs/tecnologias/html5-e-css3.jpg'
import gitHub from '../../logos e imgs/tecnologias/download (1).png'
import taiw from '../../logos e imgs/tecnologias/tailwindcss.jpg'
import rails from '../../logos e imgs/tecnologias/pngwing.com.png'
import ruby from '../../logos e imgs/tecnologias/pngwing.com (6).png'



//Certificados
import cert1 from '../../logos e imgs/certificados/certificado_1828079.jpg'
import cert2 from '../../logos e imgs/certificados/certificado_4351583.jpg'
import cert3 from '../../logos e imgs/certificados/certificado_6328407.jpg'
import cert4 from '../../logos e imgs/certificados/typeScript.jpg'
import cert5 from '../../logos e imgs/certificados/certificado_4778195 (1).jpg'
import cert6 from '../../logos e imgs/certificados/certificado_5163342.jpg'
import cert7 from '../../logos e imgs/certificados/Certificado JavaScript DC_page-0001.jpg'
//Portifolios img
import img1 from '../../logos e imgs/imgs de projetos/JogodaCoba.png'
import img2Imc from '../../logos e imgs/imgs de projetos/CalculadoraIMC.png'
import imageProgetojogo from '../../logos e imgs/imgs de projetos/JogoPPT.png'
import cronometro from '../../logos e imgs/imgs de projetos/cronometro.png'
import catalogo from '../../logos e imgs/imgs de projetos/catalogo.png'
import pomodoro from '../../logos e imgs/imgs de projetos/imgPomodoro.png'
import playerMusic from '../../logos e imgs/imgs de projetos/screencapture-reprodutor-music-vercel-app-2023-10-23-07_03_54.png'


import { useEffect, useState } from 'react';

interface Types {
    prop?: any,
    sobree?: any,
    portifolio?: any
}

export const Main: React.FC<Types> = ({ prop, sobree, portifolio }) => {



    const [verMais, setVermais] = useState(false)

    const handlClick = () => {
        setVermais(true)
    }


    const [isScrrol, setScrool] = useState(false)

    useEffect(() => {
        const handlScrool = () => {
            setScrool(window.scrollY >= 80)
        }

        window.addEventListener('scroll', handlScrool)

        return () => {
            window.removeEventListener('scroll', handlScrool)
        }



    }, [])

    const handlVoltarTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }




    const certiEvent = useRef<HTMLDivElement>(null)
    const elemento = useRef<HTMLDivElement>(null)
    const portifo = useRef<HTMLDivElement>(null)

    useEffect(() => {
        prop(certiEvent)
        sobree(elemento)
        portifolio(portifo)
    }, [])
    const handlSobreMin = () => {
        if (elemento.current) {
            const offsetTop = elemento.current.offsetTop;
            window.scroll({
                top: offsetTop - 30,
                behavior: 'smooth'
            });
        }
    }




    return (
        <C.main>
            {isScrrol &&
                <C.BtnVoltar onClick={handlVoltarTop}>
                    <FaChevronUp />
                </C.BtnVoltar>
            }

            <C.Container>
                <C.HomeLeft>
                    <C.title>Desenvolvedor Front-End...</C.title>
                    <C.span>Olá eu Sou O <C.bold>Alex Dos Santos Carneiro</C.bold> e Esse é o meu Portfolio Seja Muito Bem Vindo...</C.span>
                    <br />
                    <C.span>Sou Desenvolvedor Front-End A 1 Ano e Meio E Tenho Conhecimentos em <C.bold>JavaScript , ReactJs , TypeScript e NodeJs</C.bold> e Algumas Bibliotecas...</C.span>
                    <C.p>Venha Conhecer Mais <C.link onClick={handlSobreMin}>Sobre Min...</C.link></C.p>
                </C.HomeLeft>
                <C.HomeRight>
                    <C.img src={uselogo} alt="" width={400} />
                </C.HomeRight>
            </C.Container>


            <C.redes>
                <C.tecConte>
                    <C.tecImg src={javaScript} alt="" width={55} />
                    <C.nameTec>JavaScript</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={nodejs} alt='image' width={55} />
                    <C.nameTec>NodeJs</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={git} alt="" width={55} />
                    <C.nameTec>Git</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={ty} alt="" width={55} />
                    <C.nameTec>TypeScript</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={html} alt="" width={55} />
                    <C.nameTec>HTML-CSS</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={do1} alt="" width={70} />
                    <C.nameTec>MySQL</C.nameTec>
                </C.tecConte>
                <C.tecConte>

                    <C.tecImg src={do2} alt="" width={55} />
                    <C.nameTec>Styled-Componets</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={react} alt="" width={55} />
                    <C.nameTec>React</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={gitHub} alt="" width={55} />
                    <C.nameTec>gitHub</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={taiw} alt="" width={55} />
                    <C.nameTec>Tailwind CSS</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={rails} alt="" width={55} />
                    <C.nameTec>Rails</C.nameTec>
                </C.tecConte>
                <C.tecConte>
                    <C.tecImg src={ruby} alt="" width={55} />
                    <C.nameTec>Ruby</C.nameTec>
                </C.tecConte>

            </C.redes>

            <C.Container>

                <C.contraContainer ref={elemento} id='sobremin'>
                    <C.h1>Sobre mim</C.h1>
                    <hr />
                    <C.divisao>
                        <C.sobreLeft>
                            <C.img src={useimg} alt='' width={350} />
                        </C.sobreLeft>
                        <C.sobreRight>
                            <C.h2>Pessoal</C.h2>
                            <C.detalhes>Sou uma Pessoa muito Dedicada No que Faço ,  Tenho o Habito de Ter uma Rotina Fazer sempre Em ordem, Gosto muito de Ler Livros E Estudar , passo a metade do meu tempo Estudando!!!</C.detalhes>
                            <br />
                            <br />
                            <C.h2>Profissional</C.h2>
                            <C.detalhes>Tenho Conhecimento Avançado na Lingua JavaScript e Ruby, e em liguagem de leituras HTML5 e CSS , alguns framework como ReactJs e Rail , Tenho conhecimento em TypeScript e outras Bibliotecas , Cursei na empresa B7web e na Danki Code...</C.detalhes>
                        </C.sobreRight>
                    </C.divisao>
                </C.contraContainer>
            </C.Container>



            <C.certificados ref={certiEvent}>
                <C.h1>Certificações</C.h1>
                <hr />
                <C.carrosel>
                    <Swiper
                        grabCursor
                        slidesPerView={1}
                        pagination={{ dynamicBullets: true, }}
                        navigation
                        modules={[Pagination, Navigation]}
                        className='swiper-styles'
                    >
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert1} alt="" width={350} className='imagi' />
                                <C.ss>B7web</C.ss>
                                <C.detalh>
                                    <C.h3 className='git'>Git/GitHub</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert2} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='html'>HTML</C.h3>
                                    <C.h3 className='css'>CSS</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert3} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='java'>JavaScript</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert4} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='type'>TypeScript</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert5} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='react'>ReactJs</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert6} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='taiCSS'>TailwindCSS</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert7} alt="" width={350} className='imagi' />
                                <C.detalh>
                                    <C.ss>Danki Code</C.ss>
                                    <C.h3 className='java'>JavaScript</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                    </Swiper>
                </C.carrosel>
            </C.certificados>

            <C.Container>

                <C.subiContainer>
                    <C.h1>Portfolio</C.h1>
                    <hr />

                    <C.portifolios ref={portifo}>
                        <C.porti>
                            <img src={img1} className='img1' alt="" />
                            <C.optios>
                                <C.titulo>Jogo da Cobra</C.titulo>
                                <C.spp>
                                    Projeto Muito legal e divertido com muita logica usando o Canvas muito bom!!!
                                    Com a opção de escolher a dificudade e armazenar seu record.
                                </C.spp>

                                <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={html} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>

                                <C.linkProjeto href='https://jogo1-0-alexcarneiroo.vercel.app/' target='_blank'>
                                    <C.irProject className='btnEfeito'>
                                        Ver Projeto
                                        <FaShare className='incone' />
                                    </C.irProject>
                                </C.linkProjeto>

                            </C.optios>
                        </C.porti>
                    </C.portifolios>

                    <hr />
                    <C.portifolios>
                        <C.porti>

                            <C.optios>
                                <C.titulo>Player de Musica</C.titulo>
                                <C.spp>
                                    Criei Esse Projetinho de Player de musica para praticar meus conhecimento em JavaScrip , Esse Projeto tem a Funcionalidade Adicionar musica , Pausar , Aumentar e Abaixar Volume e Escutar a musica Claro kkk
                                </C.spp>

                                <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={html} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>


                                <C.linkProjeto href='https://reprodutor-music.vercel.app/' target='_blank'>
                                    <C.irProject className='btnEfeito'>
                                        Ver Projeto
                                        <FaShare className='incone' />
                                    </C.irProject>
                                </C.linkProjeto>

                            </C.optios>
                            <img src={playerMusic} className='img1' alt="" />
                        </C.porti>
                    </C.portifolios>

                    <hr />
                    <C.portifolios>
                        <C.porti>
                            <img src={pomodoro} className='img1' alt="" />

                            <C.optios>
                                <C.titulo>Pomodoro Timer</C.titulo>
                                <C.spp>
                                    Um pomodoro super intuitivo com metodo de configuraçãoes com metodo de pausa super facil de usar!!!
                                    <br />
                                    Feito com HTML e CSS E JAVASCRIPT!!!
                                </C.spp>

                                <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={html} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>

                                <C.linkProjeto href='https://pomodoro-js-opal.vercel.app/' target='_blank'>
                                    <C.irProject className='btnEfeito'>
                                        Ver Projeto

                                        <FaShare className='incone' />
                                    </C.irProject>
                                </C.linkProjeto>

                            </C.optios>
                        </C.porti>
                    </C.portifolios>

                    {!verMais &&

                        <C.vermais onClick={handlClick}>Ver Mais  <FaAngleDown /></C.vermais>
                    }


                    {verMais &&
                        <>
                            <hr />
                            <C.portifolios>
                                <C.porti>
                                    <C.optios>
                                        <C.titulo>Cronometro Moderno</C.titulo>
                                        <C.spp>
                                            Esse é um projeto de cronometro moderno e simples de usar bom para fazer um Pomodoro ou algo do tipo
                                            <br />
                                            Feito com HTML e CSS E JAVASCRIPT!!!
                                        </C.spp>
                                        <C.titulo>Tecnologias Utilizadas</C.titulo>
                                        <C.texUse>
                                            <img src={html} alt="" width={50} />
                                            <img src={javaScript} alt="" width={50} />
                                        </C.texUse>

                                        <C.linkProjeto href="https://cronometroomoderno.netlify.app/" target='_black'>
                                            <C.irProject className='btnEfeito'>
                                                Ver Projeto
                                                <FaShare className='incone' />
                                            </C.irProject>
                                        </C.linkProjeto>

                                    </C.optios>
                                    <img src={cronometro} className='img1' alt="" />
                                </C.porti>
                            </C.portifolios>
                            <hr />
                            <C.portifolios>
                                <C.porti>
                                    <C.optios>
                                        <C.titulo>Catalogo de Filmes Lançamentos</C.titulo>
                                        <C.spp>
                                            Um Projeto que Pega Todos Filmes Lançado Atualmente utilizando uma API Desenvolvido com ReactJs e TypeScript
                                        </C.spp>
                                        <C.titulo>Tecnologias Utilizadas</C.titulo>
                                        <C.texUse>
                                            <img src={react} alt="" width={50} />
                                            <img src={ty} alt="" width={50} />

                                        </C.texUse>

                                        <C.linkProjeto href="https://catalogo-filmes-react-js-api.vercel.app/" target='_black'>
                                            <C.irProject className='btnEfeito'>
                                                Ver Projeto
                                                <FaShare className='incone' />
                                            </C.irProject>
                                        </C.linkProjeto>

                                    </C.optios>
                                    <img src={catalogo} className='imgCatalogo' alt="" />
                                </C.porti>
                            </C.portifolios>

                            <hr />
                            <C.portifolios>
                                <C.porti>
                                    <img src={imageProgetojogo} className='img1' alt="" />

                                    <C.optios>
                                        <C.titulo>Pedra Papel Tesoura JS</C.titulo>
                                        <C.spp>
                                            Um Joguinho Classico De Pedra Papel e Tesoura Simples Mais Com Muita Logica!!!
                                            <br />
                                            Feito com HTML e CSS E JAVASCRIPT!!!
                                        </C.spp>

                                        <C.titulo>Tecnologias Utilizadas</C.titulo>
                                        <C.texUse>
                                            <img src={html} alt="" width={50} />
                                            <img src={javaScript} alt="" width={50} />
                                        </C.texUse>

                                        <C.linkProjeto href='https://pedra-papel-tesoura-seven.vercel.app/' target='_blank'>
                                            <C.irProject className='btnEfeito'>
                                                Ver Projeto

                                                <FaShare className='incone' />
                                            </C.irProject>
                                        </C.linkProjeto>

                                    </C.optios>
                                </C.porti>
                            </C.portifolios>
                            <hr />
                            <C.portifolios>
                                <C.porti>

                                    <C.optios>
                                        <C.titulo>Calculadora de IMC</C.titulo>
                                        <C.spp>

                                            Por favor, insira seu peso em quilogramas: 70
                                            Agora, insira sua altura em metros: 1.75
                                            Calculando...

                                            Seu IMC é: 22.86

                                            De acordo com o IMC, você está na faixa de peso considerada saudável.

                                            Lembrando que o IMC é uma medida simples, mas não leva em consideração outros fatores como a composição corporal e a distribuição de gordura. Consulte um profissional de saúde para uma avaliação mais completa.

                                        </C.spp>

                                        <C.titulo>Tecnologias Utilizadas</C.titulo>
                                        <C.texUse>
                                            <img src={react} alt="" width={50} />
                                            <img src={ty} alt="" width={50} />
                                            <img src={javaScript} alt="" width={50} />
                                        </C.texUse>


                                        <C.linkProjeto href='https://calculadoradeimc-gamma.vercel.app/' target='_blank'>
                                            <C.irProject className='btnEfeito'>
                                                Ver Projeto
                                                <FaShare className='incone' />
                                            </C.irProject>
                                        </C.linkProjeto>

                                    </C.optios>
                                    <img src={img2Imc} className='img1' alt="" />
                                </C.porti>
                            </C.portifolios>
                        </>

                    }
                </C.subiContainer>
            </C.Container>
        </C.main>
    )
}