import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import {Box} from "@mui/material";
import * as styles from "./style.module.scss"
import {CustomAccordion} from "./CustomAccordion";

const CustomExpandIcon = () => {
    return (
        <Box
            sx={{
                '.Mui-expanded & > .collapsIconWrapper': {
                    display: 'none',
                },
                '.expandIconWrapper': {
                    display: 'none',
                },
                '.Mui-expanded & > .expandIconWrapper': {
                    display: 'block',
                },
            }}
        >
            <div className="expandIconWrapper">
                <RemoveSharpIcon sx={{ width: '25px', fill: '#BFBFBF' }}/>
            </div>
            <div className="collapsIconWrapper">
                <AddSharpIcon sx={{ width: '25px', fill: '#191919' }}/>
            </div>
        </Box>
    )
}

export default function BenefitsAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <CustomAccordion className={styles.accordionElement} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={expanded === 'panel1' ? styles.summaryOpen : styles.summaryClose}>FINANCIAL MODEL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Giving researchers a financial model to create value and incentivize collaboration, letting them benefit from their past and future work.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>
            <CustomAccordion className={styles.accordionElement} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography  className={expanded === 'panel2' ? styles.summaryOpen : styles.summaryClose}>ACCESS TO FUNDING</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Expanding access to funding, letting researchers focus more on research and less on funding applications.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>
            <CustomAccordion className={styles.accordionElement} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography  className={expanded === 'panel3' ? styles.summaryOpen : styles.summaryClose}>CONSTRAINT FREE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Freeing researchers from the constraints of funding bodies and editorial boards.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>
            <CustomAccordion className={styles.accordionElement} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography  className={expanded === 'panel4' ? styles.summaryOpen : styles.summaryClose}>PUBLIC VISIBILITY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Greater public visibility and engagement with important research across disciplines.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>
            <CustomAccordion className={styles.accordionElement} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography  className={expanded === 'panel5' ? styles.summaryOpen : styles.summaryClose}>PEER REVIEW SYSTEM</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A peer review system that rewards the reviewers.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>
            <div className={styles.bottomBorder}> </div>
        </div>
    );
}
