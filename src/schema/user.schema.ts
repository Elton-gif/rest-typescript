import {object,string,ref} from "yup";

export const createUserSchema=object({
    body:object({
        name:string().required('Name Is required'),
        password:string()
        .required('Pasword !!!')
        .min(6,"Too short"),
        passwordConfirmation:string().oneOf(
            [ref("password"),null],
            "Password must match"
        ),
        email:string()
        .email("Must be a valid Email")
        .required('Email required')
    })
})
