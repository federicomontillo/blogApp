import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import PostContext from '../context/posteos/postContext';

export const EdicionScreen = ({ history }) => {

    const postContext = useContext(PostContext);
    const { agregarPost, postseleccionado, actualizarPost, limpiarPost } = postContext;

    const postInicial = {userId: 1,
    id: "",
    title: "",
    body: ""  };

    return (
        <div className="container-sm align-middle contenedor-form">
            <div className="m-2 mt-5">
                    <Formik 
                        initialValues={postseleccionado ||  postInicial}
                        enableReinitialize={true}
                        validationSchema={Yup.object({
                            title: Yup.string().trim().max(50, 'El título debe tener 50 caracteres o menos').required('El titulo es obligatorio'),
                            body: Yup.string().trim().max(500, 'El cuerpo debe tener 500 caracteres o menos').required('El cuerpo es obligatorio')
                        })}
                        onSubmit={(values) => {
                            if( postseleccionado === null ) {
                                agregarPost(values);
                                Swal.fire(
                                    '¡Muy Bien!',
                                    'Se agregó tu post.',
                                    'success'
                                );
                            } else {
                                actualizarPost(values);
                                limpiarPost();
                                Swal.fire(
                                    '¡Muy Bien!',
                                    'Se actualizo tu post.',
                                    'success'
                                );
                            }
                            history.push('/home');
                        }} 
                        >
                        <Form className="form-group text-center p-3 formulario rounded-2 form-style" noValidate>              
                            <h3>{postseleccionado ? 'Edita' : 'Agrega'} tu Post</h3>
                            <div>
                                <label className="form-label label" htmlFor="title">TITULO:</label>
                                <Field className="form-control mb-2"  name="title" type="text" />
                                <ErrorMessage component="p" className="form-error" name="title" />        
                            </div>
                            <div>
                                <label className="form-label label" htmlFor="body">CUERPO:</label>
                                <Field className="form-control mb-2" name="body" as="textarea" rows="5"/>
                                <ErrorMessage component="p" className="form-error" name="body" /> 
                            </div>
                            <button type="submit" className="btn btn-bglogin m-3 btn-lg">{postseleccionado ? 'Editar' : 'Agregar'}</button>                
                        </Form>
                    </Formik>    
            </div>
        </div>
      )  
}
