import { Formik } from "formik"
import { Form, Button } from "react-bootstrap"
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
import Swal from 'sweetalert2'
const SigninSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
import { TextInput } from "@/components/text-input"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { error } from "console";
export default function Login() {
    return (
        <Formik initialValues={{ email: '', password: '', name: '' }} validationSchema={SigninSchema} onSubmit={(values) => {
            const authentication = getAuth();
            signInWithEmailAndPassword(authentication, values.email, values.password)
                .then((response) => {
                    localStorage.setItem("uid", response.user.uid);
                })
                .catch((error) =>
                    {
                        Swal.fire({text: error.message});
                    }
                )
        }}>
            {({ isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>

                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <div className="d-flex flex-row-reverse">
                    <Button type="submit">
                        Login
                    </Button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}