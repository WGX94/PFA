import React, { useState } from 'react'
import "./register.scss"
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../components/contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div id='registerContainer'>
            {userLoggedIn && (<Navigate to={'/Dashboard'} replace={true} />)}

            
                <div id='content'>
                    <div id='title'>
                        
                            <span className="text-gray-800 text-xl font-semibold sm:text-2xl">Créer un compte</span>
                        

                    </div>
                    <form
                        onSubmit={onSubmit}
                        id="form"
                    >
                        <div className="input">
                            <label className="nameInput">
                                Email
                            </label>
                            <input className="text"
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                
                            />
                        </div>

                        <div className="input">
                            <label className="nameInput">
                                Mot de passe
                            </label>
                            <input className="text"
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                
                            />
                        </div>

                        <div className="input">
                            <label className="nameInput">
                                Confirmer mot de passe
                            </label>
                            <input className="text"
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            id="submit"
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Vous avez déjà un compte ? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continuer</Link>
                        </div>
                    </form>
                </div>
            </div>
            
        
    )
}

export default Register