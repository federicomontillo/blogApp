import React, { useReducer, useContext } from 'react';

import { 
    OBTENER_POSTS,
    AGREGAR_POST,
    ELIMINAR_POST,
    POST_SELECCIONADO,
    ACTUALIZAR_POST,
    LIMPIAR_POST,
    LIMPIAR_POSTS
} from '../../types';

import postReducer from './postReducer';
import postContext from './postContext';
import AuthContext from '../../context/autenticacion/authContext';

import clienteAxiosPosts from '../../config/axiosPosts';


export const PostState = props => {

    const initialState = {
        posts: [],
        postseleccionado: null,
    }

    const authContext = useContext(AuthContext);
    const { userId } = authContext;

    const [state, dispatch] = useReducer(postReducer, initialState);

    //Obtener Posts
    const obtenerPosts = async () => {
        const resultado = await clienteAxiosPosts.get('/posts');
        try {
            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data.filter(post => post.userId === userId)
            }) 
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar Post
    const agregarPost = async post => {
        try {
            const resultado = await clienteAxiosPosts.post('/posts', post);
            dispatch({
                type: AGREGAR_POST,
                payload: resultado.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Extrae un post para la edición
    const guardarPostSeleccionado = post => {
        dispatch({
            type: POST_SELECCIONADO,
            payload: post
        })
    }

    //Edita o modifica un post
    const actualizarPost = async post => {
        try {
            const resultado = await clienteAxiosPosts.put(`/posts/${post.id}`, post);
            dispatch({
                type: ACTUALIZAR_POST,
                payload: resultado.data.post
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    //Limpiar la selección de post
    const limpiarPost = () => {
        dispatch({
            type: LIMPIAR_POST
        })
    }

    //Eliminar Post
    const eliminarPost = async id => {
         try {
            await clienteAxiosPosts.delete(`/posts/${id}`);
            dispatch({
                type: ELIMINAR_POST,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Limpiar Posts del State
    const limpiarPosts = () => {
        dispatch({
            type: LIMPIAR_POSTS,
        });
    };

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                errorpost: state.errorpost,
                postseleccionado: state.postseleccionado,
                obtenerPosts,
                agregarPost,
                guardarPostSeleccionado,
                actualizarPost,
                limpiarPost,
                limpiarPosts,
                eliminarPost
            }}
        >
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;
