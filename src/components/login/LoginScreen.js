import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../context/autenticacion/authContext';
import PostContext from '../../context/posteos/postContext';



export const LoginScreen = ( props ) => {

    const authContext = useContext(AuthContext);
    const { iniciarSesion, token, mensaje } = authContext;

    const postContext = useContext(PostContext);
    const { limpiarPosts } = postContext;

    //Limpiar State de Post
    useEffect(() => {
        limpiarPosts();
        //eslint-disable-next-line
    }, [])

    //Autenticación de usuario
    useEffect(() => {   
        if( token ) {
            props.history.replace('/');
        }
    }, [ token, props.history ]);


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Ingrese un email valido").required("El email es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        }),
        onSubmit: ( usuario ) => {
            const { email, password } = usuario;
            iniciarSesion({ email, password });
        }
    });

    
    return (
            <div className="container-sm">
                <div className="row justify-content-center m-2">
                    <form 
                        className="form-group text-center p-3 formulario rounded-2 form-style" style={{maxWidth: 500, margin: 200}}
                        onSubmit={formik.handleSubmit} 
                    >
                        <h3 className="mb-3">INICIAR SESIÓN:</h3>
                        {mensaje ? <p className="form-error">{mensaje.mensaje}</p> : null}
                        <div className="mb-4">
                            <input 
                                className="form-control" 
                                type="text"
                                name="email" 
                                placeholder="Ingrese su email"
                                onChange={formik.handleChange}
                            />
                            <p className="form-error m-2">{formik.errors.email}</p>
                        </div>
                        <div className="mb-4">
                            <input 
                                className="form-control" 
                                type="password" 
                                name="password"
                                id="password"
                                placeholder="Ingrese su contraseña"
                                onChange={formik.handleChange}
                            />
                            <p className="form-error m-2">{formik.errors.password}</p>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-bglogin btn-lg"
                        >Ingresar</button>
                    </form>
                </div>
            </div>
    );
};
