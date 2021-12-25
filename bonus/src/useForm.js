import {useState} from 'react'
const useForm = (data) => {
    const [values, setValues] = useState(data.initialValues);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = async () => {
        let error = await data.validation(values)
        setErrors(error)//不同步執行
        if (!(error.hasOwnProperty('account')||error.hasOwnProperty('password'))){
            data.onSubmit(values)
        }
    }

    return { values, errors,handleChange, handleSubmit };
}

export default useForm;