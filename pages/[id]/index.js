import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Course = ({ course }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteCourse();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteCourse = async () => {
        const courseId = router.query.id;
        try {
            const deleted = await fetch(`https://trialcasestudy.azurewebsites.net/api/training/${courseId}`, {
                method: "Delete"
            });

            router.push("/enroll");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{course.firstName}</h1>
                    <p>{course.lastName}</p>
                    <p>{course.email}</p>
                    <p>{course.contact}</p>
                    <p>{course.address}</p>
                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Course.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://trialcasestudy.azurewebsites.net/api/training/${id}`);
    const { data } = await res.json();

    return { course: data }
}

export default Course;