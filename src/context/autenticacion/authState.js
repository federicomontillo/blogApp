import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types/index';

import AuthContext from './authContext';
import AuthReducer from './authReducer';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        usuarioAutenticado: localStorage.getItem('usuarioAutenticado'),
        mensaje: null,
        userId: 1
    }


    const [ state, dispatch ] = useReducer( AuthReducer, initialState );

    //Cuando el usuario inicia sesión

    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post(' ', datos);
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.error
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }     
    }

    //Cerrar sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    }

    return(
        <AuthContext.Provider 
            value={{
                token: state.token,
                mensaje: state.mensaje,
                usuarioAutenticado: state.usuarioAutenticado,
                userId: state.userId,
                iniciarSesion,
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;