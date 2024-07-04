import { Router } from 'express'
import passport from 'passport'
//import { login, register, sessionGithub, current, logout, testJWT, sendEmailPassword, changePassword } from '../controllers/sessionController.js'
import * as sessionController from "../controllers/sessionController.js"
const sessionRouter = Router()

sessionRouter.get('/', (req, res) => {
    res.render("templates/login", {
        css: 'loginRegistro.css'
    })
})

sessionRouter.get('/registroForm', (req, res) => {
    res.render("templates/register", {
        css: 'loginRegistro.css'
    })
})

sessionRouter.get('/login', passport.authenticate('login'), sessionController.login)

sessionRouter.post('/register', passport.authenticate('register'), sessionController.register)

sessionRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => { })

sessionRouter.get('/githubSession', passport.authenticate('github'), sessionGithub)

sessionRouter.get('/current', passport.authenticate('jwt'), sessionController.current)

sessionRouter.get('/logout', sessionController.logout)

sessionRouter.get('/testJWT', passport.authenticate('jwt', { session: false }), sessionController.testJWT)

sessionRouter.post('/sendEmailPassword', sendEmailPassword )

sessionRouter.post('/reset-password/:token', sessionController.changePassword)

export default sessionRouter