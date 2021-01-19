// Imports
// React Imports
import React from 'react';
// Materail UI Imports
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import StepConnector from '@material-ui/core/StepConnector';
import PublishIcon from '@material-ui/icons/Publish';
import PersonIcon from '@material-ui/icons/Person';
// Component Imports
import { PersonalInformation } from '../components/PersonalInformation';
import { SubmitForm } from '../components/SubmitForm';
import { ContactInformation } from '../components/ContactInformation';

// Material UI Default Functions
const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});
function QontoStepIcon(props: any) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}
QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);
const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});
ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

// Steper icons
function ColorlibStepIcon(props: any) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
    const icons: any = {
        1: <PersonIcon />,
        2: <ContactMailIcon />,
        3: <PublishIcon />,
    };
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}
// Steps Title
function getSteps() {
    return ['Personal Information', 'Contact Information', 'Submit'];
}
// Steps Functions
function getStepContent(activeStep: Number, setActiveStep: any, formValues: any, setFormValues: any) {
    switch (activeStep) {
        case 0:
            return <PersonalInformation setActiveStep={setActiveStep} prevValues={formValues} setFormValues={setFormValues} />;
        case 1:
            return <ContactInformation setActiveStep={setActiveStep} prevValues={formValues} setFormValues={setFormValues} />;
        case 2:
            return <SubmitForm setActiveStep={setActiveStep} prevValues={formValues} setFormValues={setFormValues} />;
        default:
            return 'Some Error Happened, Start Again';
    }
}
// Steper Function
export default function CustomizedSteppers() {
    // UseState to define Active step
    const [activeStep, setActiveStep] = React.useState(0);
    // Initial Values
    const [formValues, setFormValues] = React.useState({})
    const steps = getSteps();
    return (
        <div className="steperContainer">
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {getStepContent(activeStep, setActiveStep, formValues, setFormValues)}
        </div>
    );
} 