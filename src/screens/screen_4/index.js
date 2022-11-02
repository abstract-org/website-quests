import * as React from "react"
import * as styles from "./style.module.scss"
import {Divider} from "../../components/Divider"
import dot from "../../images/dot.png"
import BenefitsAccordion from "../../components/BenefitsAccordion";
import {Fade} from "react-awesome-reveal";

export const Screen_4 = (props) => {
    const content = props.content
    return (
        <div className={"container " + styles.screen}>
            <div className={styles.divider_1}>
                <Fade direction="down">
                    <Divider size="middle-plus"/>
                </Fade>
            </div>
            <div className={styles.info_block}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className={"title_1 blue_text"}>
                                <Fade direction="up">{content.metadata.block_3__header}</Fade>
                            </div>
                        </div>
                        <div className={styles.mobileBlock}>
                            <Fade direction="up">
                                <BenefitsAccordion/>
                            </Fade>
                        </div>
                        <div className={"col-6 " + styles.desktopBlock}>
                            <Fade>
                                <div className="row">
                                    <div className="col-6">
                                        <img className={styles.dot} src={dot}/>
                                    </div>
                                    <div className="col-6">
                                        <img className={styles.dot} src={dot}/>
                                    </div>
                                    <div className="col-6">
                                    {content.metadata.block_3__bullet_1}
                                    </div>
                                    <div className="col-6">
                                    {content.metadata.block_3__bullet_2}
                                    </div>
                                </div>
                                <div className={"row " + styles.benefits_list_space}>
                                    <div className="col-6">
                                        <img className={styles.dot} src={dot}/>
                                    </div>
                                    <div className="col-6">
                                        <img className={styles.dot} src={dot}/>
                                    </div>
                                    <div className="col-6">
                                    {content.metadata.block_3__bullet_3}
                                    </div>
                                    <div className="col-6">
                                    {content.metadata.block_3__bullet_4}
                                    </div>
                                </div>
                                <div className={"row " + styles.benefits_list_space}>
                                    <div className="col-6">
                                        <img className={styles.dot} src={dot}/>
                                    </div>
                                    <div className="col-6"> </div>
                                    <div className="col-6">
                                    {content.metadata.block_3__bullet_5}
                                    </div>
                                    <div className="col-6"> </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
        </div>
    )
}