import React, { useContext } from 'react';
import './login.css'
import { Web3Context } from "web3-hooks";


const Login = () => {
   const [web3State, login] = useContext(Web3Context);

   const handleClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };

  return (
    <>
    <button
            className="login"
            onClick={() => (handleClickLogin())}
          >
            {!web3State.isLogged ? "Log in" : web3State.chainId === 4 ?
                                              web3State.account.split("").splice(0, 6).join("") + "..." +
                                              web3State.account.split("").splice(-4).join("") : (<p style={{color: "red"}}>WRONG NETWORK</p>)}
          </button>
      
    </>
  )
};

export default Login;