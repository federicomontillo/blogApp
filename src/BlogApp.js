import React from 'react';
import AppRouter from './routers/AppRouter';

import AuthState from './context/autenticacion/authState';
import PostState from './context/posteos/postState';


function BlogApp() {
    return (
      <AuthState>
        <PostState>
          <AppRouter />
        </PostState>
      </AuthState>
    );
};

export default BlogApp;
