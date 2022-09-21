import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const EditCourse = ({ course }) => {
    const [form, setForm] = useState({ firstName: course.firstName, lastName: course.lastName, email: course.email, contact: course.contact, address: course.address });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateCourse();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateCourse = async () => {
        try {
            const res = await fetch(`https://trialcasestudy.azurewebsites.net/api/training/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/enroll");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.firstName) {
            err.firstName = 'First Name is required';
        }
        if (!form.lastName) {
            err.lastName = 'Last Name is required';
        }
        if (!form.email) {
            err.email = 'Email is required';
        }
        if (!form.contact) {
            err.contact = 'Contact is required';
        }
        if (!form.address) {
            err.address = 'Address is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Course</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.firstName ? { content: 'Please enter your First Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='First Name'
                                placeholder='First Name'
                                name='firstName'
                                value={form.firstName}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.lastName ? { content: 'Please enter your Last Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='Last Name'
                                placeholder='Last Name'
                                name='lastName'
                                value={form.lastName}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.email ? { content: 'Please enter your email', pointing: 'below', className: 'text-red-400' } : null}
                                label='Email'
                                placeholder='ex. luffymugiwara@gmail.com'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.contact ? { content: 'Please enter your contact number', pointing: 'below', className: 'text-red-400' } : null}
                                label='Contact #'
                                placeholder='###########'
                                name='contact'
                                value={form.contact}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.address ? { content: 'Please enter your address', pointing: 'below', className: 'text-red-400' } : null}
                                label='Address'
                                placeholder='City, State'
                                name='address'
                                value={form.address}
                                onChange={handleChange}
                            />
                            
                            
                            <Button type='submit'>Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditCourse.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://trialcasestudy.azurewebsites.net/api/training/${id}`);
    const { data } = await res.json();

    return { course: data }
}

export default EditCourse;