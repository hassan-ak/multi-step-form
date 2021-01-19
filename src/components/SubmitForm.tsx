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
    prevValues: any;
    setFormValues:any;
};

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

const initialValues: FormValues = {
    name: '',
    fName: '',
    gender: '',
    email: '',
    country: '',
    province: '',
    city: '',
    address: '',
}

export const SubmitForm : React.FC<Props> = ({ setActiveStep, prevValues, setFormValues }) => {
    return (
        <div>
            <Formik
                initialValues={prevValues}
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                    setFormValues({...initialValues,values})
                    setActiveStep(0)
                }}
            >
                < Form className="formControl">
                    <div className="fieldsDiv">
                        <Field 
                            label="Full Name" 
                            value={prevValues.name} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Father Name" 
                            value={prevValues.fName} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Gender" 
                            value={prevValues.gender} 
                            as={TextField} 
                            variant="outlined" 
                            className="fields" 
                            disabled
                        />
                    </div>
                    <div className="fieldsDiv">
                        <Field 
                            label="Email" 
                            value={prevValues.email} 
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
                            value={prevValues.address+", "+prevValues.city+", "+prevValues.province+", "+prevValues.country}
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