import { 
    OBTENER_POSTS,
    AGREGAR_POST,
    POST_SELECCIONADO,
    ELIMINAR_POST,
    ACTUALIZAR_POST,
    LIMPIAR_POST,
    LIMPIAR_POSTS 
} from '../../types';

const postReducer = (state, action) => {
    switch (action.type) {

        case OBTENER_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        
        case AGREGAR_POST:
            return {
                ...state,
                posts: [ action.payload, ...state.posts ],
            }    
            
        case POST_SELECCIONADO: 
            return {
                ...state,
                postseleccionado: action.payload
            }       

        case ACTUALIZAR_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload ? action.payload : post),
            }        
            
        case LIMPIAR_POST:
            return {
                ...state,
                postseleccionado: null
            }               

        case ELIMINAR_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }  

        case LIMPIAR_POSTS:
            return {
                ...state,
                posts: []
            }          

        default:
            return state;
    }
};

export default postReducer;