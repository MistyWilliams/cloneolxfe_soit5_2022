import React from 'react'
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'
import { islogged } from '../../../helpers/AuthHandler'

const Header = () => {
    let logged = islogged()

    return (
        <HeaderArea>
           <div className="container">
            <div className="logo">
                <link to="/">
                 <span className="logo-1">O</span>
                 <span className="logo-2">L</span>
                 <span className="logo-3">X</span>
                </link>
           </div>
           <nav>
            <ul>
                {logged &&
                  <>
                     <li>
                    <Link to="/my-account">Minha Conta</Link>                   
                </li>
                <li>
                    <Link to="/logout">Sair</Link>
                </li>
                <li>
                   <Link to="/post-an-ad" className="button">Postar um anúncio</Link>
               </li>
                 </>
                }
                {!logged &&
                    <>
                        </>

                }
                <li>
                    <Link to="/signin">login</Link>                   
                </li>
                <li>
                    <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                   <Link to="/signin" className="button">Postar um anúncio</Link>
               </li>
            </ul>
           </nav>
           </div>
        </HeaderArea>
    )
}
   
export default Header;