// const { isLogged } = require('../middlewares/login');

// Credenciales de usuario para administración
const userCredentials = {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
}

// Controladores relacionados con la autenticación (utilizada escritura alternativa)
module.exports = {
    // Muestra vista de login
    loginView: (req, res) => res.render('./auth/login', {
        view: {
            title: 'Login | Funkoshop'
        }
    }),

    loginUser: (req, res) => {
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;

        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin');
        }

        return res.status(401).send('Credenciales inválidas');
    },

    // Muestra vista de registro de usuarios
    registerView: (req, res) => res.render('./auth/register', {
        view: {
            title: 'Registro | Funkoshop'
        }
    }),

    registerUser: (req, res) => res.send('Route que recibe la data de registro de un usuario al clicar botón'),

    // Cierra sesión del usuario y redirige a la página principal
    logoutUser: (req, res) => {
        req.session.isLogged = false;
        res.redirect('/home');
    },
}
