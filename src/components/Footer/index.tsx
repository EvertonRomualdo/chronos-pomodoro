import style from './styles.module.css'

export function Footer() {

    return (

        <footer className={style.footer}>
            <a href="#" className={style.footerLink}>Entenda como funciona a técnica pomodoro</a>
            <a href="#" className={style.footerLink}>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>
    )

}