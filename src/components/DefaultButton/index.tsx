import type React from "react";
import style from './style.module.css'
import type { ReactNode } from "react";

type DefaultButtonProps = {
   icon: ReactNode
   color?: 'red' | 'green'
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, color='green',...props}: DefaultButtonProps){

    return (
        <>
            <button className={`${style.button} ${style[color]}`} {...props}> 
                {icon}
            </button>
            
        </>
        
    )

    
}