import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import PostContext from '../../context/posteos/postContext';
import Swal from 'sweetalert2';

export const Post = ({ post }) => {

    const postContext = useContext(PostContext);
    const { eliminarPost, guardarPostSeleccionado } = postContext;

    const { id, title, body } = post;

    //Agrega una post actual para su edicion
    const seleccionarPost = (post) => {
        guardarPostSeleccionado(post);
    }

    const eliminarConAlerta = () => {
        Swal.fire({
            title: 'Seguro que quieres borrar el post?',
            text: "El post se perdera permanentemente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'Su post se borro correctamente.',
                'success'
              )
              eliminarPost(id)
            }
          })
    }

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        <div className="card mb-2 p-2 card-style">
            <div className="card-body">
                <h5 className="card-title text-center card-text-title">{title.toUpperCase()}</h5>
                
                <div className="collapse mb-3" id={`post${id}`}>
                    <div className="card card-body card-text">
                        {capitalize(body)}
                    </div>
                </div>
                <div className="contenedor-btn-post">
                    <p className="m-2">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#post${id}`} aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-book-open"> </i> Ver Post
                        </button>
                    </p>

                    <button 
                        type="button" 
                        className="btn btn-lg btn-danger rounded-circle m-2"
                        onClick={() => eliminarConAlerta()}
                        ><i className="far fa-trash-alt"></i>
                    </button>

                    <Link to={{
                        pathname: '/edicion',
                    }}>
                        <button 
                        type="button" 
                        className="btn btn-lg btn-warning rounded-circle m-2"
                        onClick={() => seleccionarPost(post)}
                        ><i className="far fa-edit"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
