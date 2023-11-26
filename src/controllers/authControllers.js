// const { isLogged } = require('../middlewares/login');

const userCredentials = {
    email: 'admin@email.com',
    password: 'pass1234'
}

module.exports = {
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

    registerView: (req, res) => res.render('./auth/register', {
        view: {
            title: 'Registro | Funkoshop'
        }
    }),

    registerUser: (req, res) => res.send('Route que recibe la data de registro de un usuario al clicar botón'),

    logoutUser: (req, res) => {
        req.session.isLogged = false;
        res.redirect('/home');
    },
}
