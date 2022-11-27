import * as React from "react"
import * as styles from './style.module.scss'
import logo from '../../images/logo.png';
import {Fade} from "react-awesome-reveal";

export const Header = (props) => {
    const content = props.content
    return (
        <header className={styles.header}>
            <div className={"container"}>
                <Fade duration={500} triggerOnce>
                    <img className={styles.logo} src={logo} alt="Quest"/>
                </Fade>
                <div className={styles.headerTitle}>
                    <div className={styles.title_block}>
                        {content.metadata.headline}
                    </div>
                </div>
            </div>
        </header>
    )
}