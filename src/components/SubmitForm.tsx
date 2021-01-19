// Imports
// React Imports
import React from 'react';
// Materail Ui Imports
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRigthIcon from '@material-ui/icons/KeyboardArrowRight';
// Formik Imports
import { Formik, Field, Form } from 'formik';

// Types Defination
type Props = {
    setActiveStep: any;
};

// Types Defination for Form Values
interface FormValues {
    name: String;
    fName: String;
    gender: String;
    email: String;
    country: String;
    province: String;
    city: String;
    address: String;
}

// Initial Values
const initialValues: FormValues = {
    name: 'name name nmae',
    fName: 'fathers name  fathers name',
    gender: 'gender gender',
    email: 'mail mail',
    country: 'country country',
    province: 'province province',
    city: 'city city',
    address: 'address address',
}

export const SubmitForm : React.FC<Props> = ({ setActiveStep }) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    setActiveStep(0)
                }}
            >
                < Form className="formControl">
                    <div className="fieldsDiv">
                        <Field 
                            label="Full Name" 
                            value={initialValues.name} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Father Name" 
                            value={initialValues.fName} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Gender" 
                            value={initialValues.gender} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Email" 
                            value={initialValues.email} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Address" 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" disabled
                            value={initialValues.address+", "+initialValues.city+", "+initialValues.province+", "+initialValues.country}
                        />
                    </div>
                    <div className="btnDiv">
                        <Button
                            variant="contained"
                            className="buttonP"
                            onClick={()=>setActiveStep(0)}
                            startIcon={<KeyboardArrowLeftIcon />}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            className="buttonP"
                            type="submit"
                            endIcon={<KeyboardArrowRigthIcon />}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}