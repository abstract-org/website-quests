import {styled} from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";

export const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
        borderTop: '1px solid #BFBFBF',
        borderRadius: '0px',
        boxShadow: 'none',
        margin: 0,
        '.Mui-expanded': {
            margin: 0,
        },
        '.MuiAccordionDetails-root': {
            marginBottom: '20px',
            padding: 0
        },
        '.MuiAccordionSummary-content': {
            margin: 0,
            padding: 0,
        },
        '.MuiAccordionSummary-root': {
            margin: 0,
            padding: 0,
            maxHeight: 'none'
        },
        '.MuiAccordionSummary-root.Mui-expanded': {
            maxHeight: 'none',
            margin: 0
        },
        '.MuiAccordionSummary-content.Mui-expanded': {
            margin: 0
        }
    };
});