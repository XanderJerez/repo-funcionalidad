import React from "react"
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputForm = ({ label, handleChange, placeholder, type, name, value, handleBlur }) => {
    return (
        <FormControl id={name}>
            <FormLabel>{label}</FormLabel>
            <Input placeholder={placeholder} type={type} onChange={handleChange} name={name} value={value} onBlur={handleBlur} />
        </FormControl>
    )
}

export default InputForm