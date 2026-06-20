import { HistoryIcon, House, MoonIcon, SettingsIcon } from 'lucide-react'
import style from './styles.module.css'
export function Menu() {

    return(
            <nav className={style.menu}>
                <a href="#" className={style.menuOption}>
                    <House />
                </a>
                <a href="#" className={style.menuOption}>
                    <HistoryIcon />
                </a>
                <a href="#" className={style.menuOption}>
                    <SettingsIcon />
                </a>
                <a href="#" className={style.menuOption}>
                    <MoonIcon />
                </a>
            </nav>
            
    )

}