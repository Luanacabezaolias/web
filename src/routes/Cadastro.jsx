import { useState } from 'react'


function Cadastro(){

    const [dados, setdados]=useState({
        nome:'',
        email:'',
    });

    const dadosInput = (e)=>{
        setdados({...dados,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(

        <>
        <form onClick={handleSubmit}>
        <fieldset>
            <legend>Cadastro</legend>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name='nome' placeholder='digite seu nome' onChange={dadosInput}/>

            <label htmlFor="email">Email:</label>
            <input type="text" name='email' placeholder='digite seu email' onChange={dadosInput}/>

            <button type='submit'>Cadastrar</button>
        </fieldset>
        </form>

        </>

 

    )

}

export default Cadastro