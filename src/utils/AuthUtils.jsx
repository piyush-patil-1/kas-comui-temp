const TOKEN_KEY = 'kas_commerce';

export const login = authresponse => {
    localStorage.setItem(TOKEN_KEY, authresponse.users.accessToken);
    localStorage.setItem('isAuthenticated', true);
};

export const logout = () => {
    localStorage.clear();
    localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
};

export const getLoginToken = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return localStorage.getItem(TOKEN_KEY);
    }
    return '';
};
