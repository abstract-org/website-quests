import * as React from "react"
import * as styles from './style.module.scss'

export const Divider = ({size}) => {
    let type = styles.small_line;

    switch (size){
        case 'mob-small':
            type = styles.mob_small_line
        break;
        case 'mob-middle':
            type = styles.mob_middle_line
        break;
        case 'middle':
            type = styles.middle_line
        break;
        case 'middle-plus':
            type = styles.middle_plus_line
        break;
        case 'big':
            type = styles.big_line
        break;
    }

    return (
        <div className={styles.block + " " + type}> </div>
    )
}