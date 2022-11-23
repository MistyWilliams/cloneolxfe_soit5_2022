import React, { useState } from 'react'
import { PageArea } from './styled'
import { PageContainer, PageTitle } from '../../components/MainComponents'
import useApi from '../..helpers/OlxAPI'
import { dologin } from "../../helpers/AuthHandler"

const Page = () => {
    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remenberPassword, setRemenberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)

    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const json = await api.login(email, password)
        if(jason.error) {
            setError(json.error)
        } else {
            dologin(json.token, remenberPassword)
            Window.location.href = '/'
        }
    }

    return (
        <PageContainer>
            <PageTitle>
                Login
            </PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">
                        E-mail
                        </div>
                        <div className="area--input">
                         <imput type="email" disabled={disabled} />
                         </div>
                        </label>
                        <label className="area">
                          <div className="area--title">
                         Senha
                        </div>
                        <div className="area--input">
                            <input type="password" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                         Lembrar Senha
                        </div>
                        <div className="area--input">
                            <imput type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                         <button disabled={disabled}>Fazer Login</button>
                        </div>
                        <div className="area--input">
                            <imput type="password" />
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}
export default Page