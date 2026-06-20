import { PlayCircleIcon } from 'lucide-react'
import './App.css'
import { Container } from './components/Container'
import { CountDown } from './components/CountDonw'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import'./styles/theme.css'
import { Footer } from './components/Footer'

export function App(){

    return (
        <>  
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form action="#" className='form'>
                    <div className="formRow">
                        <DefaultInput id='input'  type='text' labelText='task' placeholder='Digite aqui' />
                    </div>
                    <div className="formRow">
                       <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="formRow">
                       <Cycles />
                    </div>
                    <div className="formRow">
                       <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
                    </div>

                </form>
            </Container>
            <Container>
                <Footer />
            </Container>

        </>
        
    )
}