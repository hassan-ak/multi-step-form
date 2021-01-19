// Imports
// React Imports
import React from 'react';
// Materail UI Imports
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// Formik and Yup imports
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Types for form valyes
interface FormValues {
    name: String;
    fName: String;
    gender: String;
}

// initial values
const initialValues: FormValues = {
    name: '',
    fName: '',
    gender: '',
}

// Personal Information form
export const PersonalInformation = () => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .required('Full Name is required'),
                    fName: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .required('Father Name is required'),
                    gender: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values) => {
                }}
            >
                {({ dirty, isValid }) => {
                    return (
                        < Form className="formControl">
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="name"
                                    label="Full Name"
                                    helperText={<ErrorMessage name="name">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="fName"
                                    label="Father Name"
                                    helperText={<ErrorMessage name="fName">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="divG">
                                <div>Gender</div>
                                <div role="group" className="fieldsG">
                                    <label>
                                        <Field type="radio" name="gender" value="male" />
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" />
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="btnDiv">
                                <Button
                                    variant="contained"
                                    className="buttonN"
                                    type="submit"
                                    disabled={!dirty || !isValid}
                                    endIcon={<KeyboardArrowRightIcon />}
                                >
                                    Next
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div >
    )
}