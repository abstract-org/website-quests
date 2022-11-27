import * as React from "react"
import * as styles from "./style.module.scss";
import {Divider} from "../../components/Divider";
import lines from "../../images/3lines.png";
import {Fade} from "react-awesome-reveal";

export const Screen_2 = (props) => {
    const content = props.content
    return (
        <div className={styles.screen}>
            <div className="container">
                <div className={styles.divider_1}>
                    <Fade duration={500} triggerOnce direction="down"><Divider size="middle"/></Fade>
                </div>
                <div className={styles.mob_divider_1}>
                    <Fade duration={500} triggerOnce direction="down"><Divider size="mob-small"/></Fade>
                </div>
                <div className={"title_1 white_text " + styles.mobile_title}>
                    <Fade duration={500} direction="up" triggerOnce>{content.metadata.block_2__scroller_fragment_1}</Fade>
                </div>
                <div className={styles.mobile_info_block}>
                    <div className="title_3 white_text">
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_1_header}</Fade>
                    </div>
                    <div className={"small_text white_text " + styles.research_text}>
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_1_description}</Fade>
                    </div>
                </div>
                <div className={styles.mobile_info_block}>
                    <div className="title_3 white_text">
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_2_header}</Fade>
                    </div>
                    <div className={"small_text white_text " + styles.research_text}>
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_2_description}</Fade>
                    </div>
                </div>
                <div className={styles.mobile_info_block}>
                    <div className="title_3 white_text">
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_3_header}</Fade>
                    </div>
                    <div className={"small_text white_text " + styles.research_text}>
                        <Fade duration={500} triggerOnce>{content.metadata.block_2__point_3_description}</Fade>
                    </div>
                </div>
                <div className={"row " + styles.block_1}>
                    <div className="col-lg-2 col-md-12">
                        <div className={"title_1 white_text"}>
                            <Fade duration={500} triggerOnce direction="up">{content.metadata.block_2__scroller_fragment_1}</Fade>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-3">
                                <Fade duration={500} triggerOnce>
                                    <img alt="" className={styles.lines} src={lines}/>
                                </Fade>
                            </div>
                            <div className={"col-9 " + styles.research_block}>
                                <Fade triggerOnce cascade={true} delay={300}>
                                    <div>
                                        <div className="title_3 white_text">
                                        {content.metadata.block_2__point_1_header}
                                        </div>
                                        <div className={"small_text gray_text " + styles.research_text}>
                                        {content.metadata.block_2__point_1_description}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={"title_3 white_text " + styles.research_title}>
                                        {content.metadata.block_2__point_2_header}
                                        </div>
                                        <div className={"small_text gray_text " + styles.research_text}>
                                        {content.metadata.block_2__point_2_description}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={"title_3 white_text " + styles.research_title}>
                                        {content.metadata.block_2__point_3_header}
                                        </div>
                                        <div className={"small_text gray_text " + styles.research_text}>
                                        {content.metadata.block_2__point_3_description}
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}