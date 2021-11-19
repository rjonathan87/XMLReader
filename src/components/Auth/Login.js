import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  const navigate = useNavigate();

  useEffect(() => {
    if(isLogged) { navigate("/")  }
    // console.log(isLogged)
  }, [isLogged, navigate])

  const handleSubmit = e => {
    e.preventDefault();
    // alert(`${username} ${password}`)
    login({username, password})
  }

  return (
    <>
      {
        isLoginLoading && <strong>Verificando credenciales...</strong>
      }

      {
        !isLoginLoading && 
          <form onSubmit={ handleSubmit } >
            <div className="card mb-3">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Usuario"
                    onChange={ e => setUsername(e.target.value) }
                    value={ username }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    onChange={ e => setPassword(e.target.value) }
                    value={ password }
                  />
                </div>
                <button className="btn btn-success" >Entrar</button>
              </div>
            </div>
          </form>
      }

      {
        hasLoginError && 
        <div className="alert alert-danger" role="alert">
          <strong>Credenciales no válidas!!!</strong>
        </div>
      }
    </>
  );
};
