import { Timer } from 'lucide-react'
import style from './styles.module.css'
export function Logo() {

    return(
        <div className={style.logo}>
            <a href="#" className={style.logoLink}>
                <Timer/>
                <span>Chronos</span>
           </a>
        </div>
    )

}