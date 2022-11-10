import * as React from "react"
import {Divider} from "../Divider"
import * as styles from "./style.module.scss"
import {SignUp} from "../SignUp"
import {Fade} from "react-awesome-reveal";

export const Footer = (props) => {
    const content = props.content
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.divider}>
                    <Fade direction="down" triggerOnce>
                        <Divider size="big"/>
                    </Fade>
                </div>
                <div className={styles.mob_divider}>
                    <Fade direction="down" triggerOnce>
                        <Divider size="mob-middle"/>
                    </Fade>
                </div>
                <div className={styles.footer_block}>
                    <Fade direction="up" triggerOnce>
                        <div className={styles.smallTitle}>{content.metadata.block_4__sub_header}</div>
                        <div className={"title_4 white_text " + styles.footer_title}>
                        {content.metadata.block_4__header}
                        </div>
                    </Fade>
                    <div className={"small_text white_text " + styles.footer_text}>
                        <Fade triggerOnce>{content.metadata.block_4__description}</Fade>
                    </div>
                    <SignUp/>
                </div>
            </div>
        </footer>
    )
}