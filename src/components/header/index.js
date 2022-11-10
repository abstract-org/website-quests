import * as React from "react"
import * as styles from './style.module.scss'
import logo from '../../images/logo.png';
import Slide, {Fade} from "react-awesome-reveal";

export const Header = (props) => {
    const content = props.content
    return (
        <header className={styles.header}>
            <div className={"container"}>
                <Slide duration={1000} triggerOnce>
                    <img className={styles.logo} src={logo} alt="Quest"/>
                </Slide>
                <div className={styles.headerTitle}>
                    <div className={styles.title_block}>
                        <Fade triggerOnce duration={1000} direction="up">{content.metadata.headline}</Fade>
                    </div>
                </div>
            </div>
        </header>
    )
}