import React, { useEffect, useContext } from 'react';
import { Post } from '../blog/Post';

import PostContext from '../../context/posteos/postContext';

export const Posts = () => {

    const postContext = useContext(PostContext);
    const { obtenerPosts, posts } = postContext;

    useEffect(() => {
        obtenerPosts();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <h2 className="text-center mb-4">Tus posts:</h2>
            {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
            ))}
        </>
    )
}
