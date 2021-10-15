import { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ContextWrapper } from '../contexts/State';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import "typeface-roboto";

import sustentalize1 from '../images/sustentalize1.png';
import userIcon from '../images/userIcon.png';
import seta from '../images/seta.png';

import '../App.css'

type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  session_id: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const apiRequestGetUserFromSession = async () => {
    try { 
      const res = await axios.get<User>('http://localhost:8080/user/session');
      setUsername(res.data.username);
      console.log("FOI2")
      alert(username);
      return;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const apiRequestLogin = async () => {
    try { 
      await axios.post('http://localhost:8080/login', { email, password });
      console.log("FOI")
      return;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <CookiesProvider>
      <ContextWrapper>
        <div className="App">
          <div className="header">
            <img src={sustentalize1} className="App-logo" alt="logo" style={{ width: 125, height: 125, display: 'flex', marginLeft: 0 }} />
            <SearchBar />
            <div className="login-name"><a href="#">LOGIN</a></div>
            <div className="menu">
              <ul className="menu-3" style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                <li>
                  HOME
                </li>
                <li>
                  ROUPAS
                </li>
                <li>
                  CALÇAS
                </li>
                <li>
                  SAPATOS
                </li>
                <li>
                  CONTATO
                </li>
              </ul>
            </div>
          </div>
          <div className="body">
              <div className="wrapper">
                <div className="gray-box">
                    <div className="img-user">
                      <img src={userIcon} style={{ width:290, height:293 }} />  
                    </div>

                    <div className="title-2">
                      LOGIN DE USUÁRIO
                    </div>

                    <div className="container">
                      <label>Usuário</label>
                      <input type="text" onChange={event => {
                        setEmail(event.target.value);
                      }}/>
                    </div>

                    <div className="container flex-col justify-around">
                      <label>Senha</label>
                      <input type="text" onChange={event => {
                        setPassword(event.target.value);
                      }}/>
                    </div>
                    
                    <button onClick={() => {
                      console.log(email);
                      console.log(password);

                      apiRequestLogin();
                      console.log("Realizando segunda chamada")
                      apiRequestGetUserFromSession();
                    }}>Login</button>
                </div>
              </div>

              <div className="footer-1">
                <div className="footer-1-text">
                Que tal levar a sustentabilidade<br></br>pra dentro de sua casa?
                </div>
                <div className="footer-1-subtext">
                ana.111811@alunosatc.edu.br<br></br>
                (48) 99651-6580<br></br>
                Rua Marechal Floriano Peixoto, Criciúma, Santa Catarina - 88801-040<br></br>
                Atendimento Online
                </div>
              </div>
              <div className="footer-2">
                Produzido por Ana Carolina Machado e Joel F. Da Silva
                <span className="back-to-top" onClick={scrollToTop}>
                  <img src={seta} style={{width:60, height:60}} />
                </span>
              </div>
              </div>

        </div>
      </ContextWrapper>
    </CookiesProvider>
  );
}

export default Login;
