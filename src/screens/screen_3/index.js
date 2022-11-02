import * as React from "react"
import * as styles from "./style.module.scss";

import numLine1 from "../../images/Number_1.png";
import numLine2 from "../../images/Number_2.png";
import numLine3 from "../../images/Number_3.png";
import numLine4 from "../../images/Number_4.png";
import {MobileResearchBlock} from "./mobileResearchBlock";
import {Fade} from "react-awesome-reveal";

export const Screen_3 = (props) => {
    const content = props.content
    return (
        <div>
            <MobileResearchBlock/>
            <div className={styles.screen}>
                <div className="container">
                    <div className={styles.second_research_block}>
                        <div className="row">
                            <div className="col-6">
                                <Fade direction="left" delay={300}>
                                    <img className={styles.numLine1} src={numLine1}/>
                                    <div className={"title_3 white_text " + styles.second_research_text}>
                                        {content.metadata.block_2__point_1_header}
                                    </div>
                                    <div className={"small_text gray_text " + styles.second_research_text}>
                                        {content.metadata.block_2__point_1_description}
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-6"> </div>
                            <div className={"col-6 " + styles.second_research_block_space}>
                                <Fade direction="left" delay={600}>
                                    <div className={"text-start " + styles.point2research}>
                                        <img className={styles.numLine2} src={numLine2}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 d-lg-none"> </div>
                                        <div className="col-md-10 col-lg-12">
                                            <div className={"title_3 white_text " + styles.second_research_text}>
                                            {content.metadata.block_2__point_2_header}
                                            </div>
                                            <div className={"small_text gray_text " + styles.second_research_text}>
                                                {content.metadata.block_2__point_2_description}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={"col-6 " + styles.second_research_block_space}>
                                <Fade direction="right" delay={900}>
                                    <div className={"text-end " + styles.point3research}>
                                        <img className={styles.numLine2} src={numLine3}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6"> </div>
                                        <div className="col-6 d-flex flex-column align-items-end">
                                            <div className={"title_3 white_text " + styles.second_research_text}>
                                            {content.metadata.block_2__point_2_header}
                                            </div>
                                            <div className={"small_text gray_text " + styles.second_research_text}>
                                                {content.metadata.block_2__point_2_description}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-6"> </div>
                            <div className={"col-6 " + styles.second_research_block_space}>
                                <Fade direction="right" delay={1200}>
                                    <div className="text-end">
                                        <img className={styles.numLine1} src={numLine4}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6"> </div>
                                        <div className="col-6 d-flex flex-column align-items-end">
                                            <div className={"title_3 white_text " + styles.second_research_text}>
                                            {content.metadata.block_2__point_3_header}
                                            </div>
                                            <div className={"small_text gray_text " + styles.second_research_text}>
                                            {content.metadata.block_2__point_3_description}
                                            </div>
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