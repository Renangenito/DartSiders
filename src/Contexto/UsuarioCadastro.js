import { createContext, useContext, useState } from "react"


const usuarioInicial = {
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: ''
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null
})

export const useCadastroUsuarioContext = () =>{
    return useContext(CadastroUsuarioContext)
}

export const CadastroUsuarioProvider = ({children}) => {
    
    const [usuario, setUsuario] = useState(usuarioInicial);

    const setNomeCompleto = (nomeCompleto) => {
        console.log("TESTE TESTE TESTE")
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }

    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                uf
            }
        })
        // console.log(uf);
        
    }

    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                cidade
            }
        })
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                email
            }
        })
    }

    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                senha
            }
        })
    }

    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    function submeterUsuario(){
        console.log(usuario)
    }

    const contexto = {
        usuario,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario
    }

    return (
    <CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>)
}