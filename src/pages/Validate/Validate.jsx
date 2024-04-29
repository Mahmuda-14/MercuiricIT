import React from 'react';
import { useForm } from 'react-hook-form';

const Validate = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
           
        </div>
    );
};

export default Validate;