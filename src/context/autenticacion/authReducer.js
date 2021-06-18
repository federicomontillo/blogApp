import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types';

const authReducer = (state, action) => {
    switch (action.type) {

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('usuarioAutenticado', true);
            localStorage.setItem('userId', 1);
            return {
                ...state,
                token: action.payload.token,
                usuarioAutenticado: true,
                mensaje: null,
                userId: 1
            }

        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        case CERRAR_SESION:
            localStorage.removeItem('token');
            localStorage.removeItem('usuarioAutenticado', true);
            localStorage.removeItem('userId', ' ');
            return {
                ...state,
                token: null,
                usuarioAutenticado: null,
                userId: null
            }
            
        default:
            return state;
    }
}

export default authReducer;