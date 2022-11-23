import React from 'react'
import { Link } from 'react-router-dom'
import { NotFound } from './styled'
import image from '../../image';

const Page = () => {
    return (
        <NotFoundArea>
            <div className="container">
            <h2>Página não encontrada</h2>
            <div className='botao'>
                <Link to='/'>Voltar para o Home</Link>
                <image src='./image'/>
             </div>
            </div>
        </NotFoundArea>
    )
}

export default Page