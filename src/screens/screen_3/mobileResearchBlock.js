import * as React from "react"
import * as styles from "./mobile.style.module.scss";
import {Fade} from "react-awesome-reveal";

export const MobileResearchBlock = () => {
    return (
        <div className={styles.screen}>
            <div className="container d-flex justify-content-center">
                <div className={styles.researchBlock}>
                    {/*<Fade triggerOnce direction="left" delay={300} className={styles.block1}>*/}
                    <div className={styles.block1}>
                        <div className={styles.text}>
                            <div className={"title_3 white_text " + styles.second_research_text}>
                                A researcher creates a Research Block"
                            </div>
                            <div className={"small_text white_text " + styles.second_research_text}>
                                Creating a Research Block is the beginning of a Quest.
                            </div>
                        </div>
                    </div>
                    {/*</Fade>*/}
                    {/*<Fade triggerOnce direction="right" delay={600} className={styles.block2}>*/}
                    <div className={styles.block2}>
                        <div className={styles.text}>
                            <div className={"title_3 white_text " + styles.second_research_text}>
                                Anyone can invest in Research Blocks
                            </div>
                            <div className={"small_text white_text " + styles.second_research_text}>
                                A Research Block increases in financial value as more people invest and build from it.
                            </div>
                        </div>
                    </div>
                    {/*</Fade>*/}
                    {/*<Fade triggerOnce direction="left" delay={900} className={styles.block3}>*/}
                    <div className={styles.block3}>
                        <div className={styles.text}>
                            <div className={"title_3 white_text " + styles.second_research_text}>
                                A researcher / investor withdraws money
                            </div>
                            <div className={"small_text white_text " + styles.second_research_text}>
                                Finance can support real world needs for researchers.
                            </div>
                        </div>
                    </div>
                    {/*</Fade>*/}
                    {/*<Fade triggerOnce direction="right" delay={1200} className={styles.block4}>*/}
                    <div className={styles.block4}>
                        <div className={styles.text}>
                            <div className={"title_3 white_text " + styles.second_research_text}>
                                Research Continues
                            </div>
                            <div className={"small_text white_text " + styles.second_research_text}>
                                Research evolves. Researchers can grow, modify, link, expand and review Research Blocks. Important research can continue and be built upon seamlessly.
                            </div>
                        </div>
                    </div>
                    {/*</Fade>*/}
                </div>
            </div>
        </div>
    )
}