import * as React from "react"
import * as styles from './style.module.scss'
import {Divider} from "../../components/Divider";
import { Fade } from "react-awesome-reveal";

export const Screen_1 = (props) => {
    const content = props.content
    return (
        <div className={"container " + styles.screen}>
            <div className={styles.divider_1}>
                <Fade direction="down" triggerOnce><Divider size="small"/></Fade>
            </div>
            <div className={styles.mob_divider_1}>
                <Fade direction="down" triggerOnce><Divider size="mob-small"/></Fade>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className={"big_text blue_text " + styles.top_text}>
                        <Fade direction="up" triggerOnce>{content.metadata.block_1__heading}</Fade>
                    </div>
                </div>
                    <div className={"col-12 " + styles.onlyDesktopBlock}>
                        <div className={styles.divider_2}>
                            <Divider size="small"/>
                        </div>
                    </div>
                    <div className={"col-6 " + styles.onlyDesktopBlock}>
                        <div className={"title_1 blue_text"}>
                            <Fade triggerOnce direction="up">{content.metadata.block_1__scroller_fragment_1}</Fade>
                            <Fade triggerOnce direction="up">{content.metadata.block_1__scroller_fragment_2}</Fade>
                        </div>
                    </div>
                    <div className={"col-6 " + styles.onlyDesktopBlock}>
                        <div className={"regular_text black_text " + styles.middle_text}>
                            <Fade triggerOnce>{content.metadata.block_1__description}</Fade>
                        </div>
                        <div className={"small_text black_text " + styles.middle_text + " " + styles.small_bottom_text}>
                            <Fade triggerOnce>{content.metadata.block_1__subdescription}</Fade>
                            <Fade triggerOnce>{content.metadata.block_1__subdescription_2}</Fade>
                        </div>
                    </div>
            </div>
        </div>
    )
}