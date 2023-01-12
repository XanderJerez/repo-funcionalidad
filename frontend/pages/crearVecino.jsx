import { useState } from "react";
import { Button,Container,Heading,HStack, Stack, Text} from '@chakra-ui/react'
import {createVecino} from '../data/vecinos'
import InputForm from '../components/InputForm'
import { useRouter } from "next/router";
import Swal from 'sweetalert2'
import { Formik } from 'formik'
import VecinoValidation from "../validations/vecinoValidation";

const Vecinos = () =>{

    const [vecino,setVecino]= useState({

      nombre:'',
      apellido: '',
      fechaNacimiento:'',
      direccion: '',
      telefono: '+569',
      correo: '',
      fecha_inicio_rol:'',
      fecha_termino_rol: ''
    })


    const submitVecino = async(e) =>{
        e.preventDefault()
        const response = await createVecino(vecino)
        console.log(response.data)
            Swal.fire({
                icon:'success',
                title:'Vecino agregado',
                showConfirmButton: true,
                text: 'El vecino se agregó correctamente'
            })
            router.push('/')
        

    }

    const router = useRouter()
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} className="header" size={"2xl"} textAlign="center">Registrar Vecino</Heading>
            <Stack spacing={4} mt={10}>
            <Formik
            initialValues={vecino}
            validationSchema={VecinoValidation}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                })=> (
                    <form onSubmit={handleSubmit} id="form">
               <HStack>
                <InputForm label="Nombre" handleChange={handleChange} name="nombre" placeholder="Nombre" type="text" value={values.nombre} handleBlur={handleBlur}/>
                
                <InputForm label="Apellido" handleChange={handleChange} name="apellido" placeholder="Apellido" type="text"value={values.apellido} handleBlur={handleBlur} />
                </HStack>
                <HStack justify={"space-between"}>
                {touched.nombre && errors.nombre && (
                    <Text color={"red"}>{errors.nombre}</Text>
                )}
                {touched.apellido && errors.apellido && (
                    <Text color={"red"}>{errors.apellido}</Text>
                )}
                </HStack>
                <InputForm label="Fecha Nacimiento" handleChange={handleChange} name="fechaNacimiento" placeholder="Fecha Nacimiento" type="date" handleBlur={handleBlur} value={values.fechaNacimiento}/>
                {touched.fechaNacimiento && errors.fechaNacimiento && (
                    <Text color={"red"}>{errors.fechaNacimiento}</Text>
                )}
                <InputForm label="Dirección" handleChange={handleChange} name="direccion" placeholder="Dirección" type="text" value={values.direccion} handleBlur={handleBlur}/>
                {touched.direccion && errors.direccion && (
                    <Text color={"red"}>{errors.direccion}</Text>
                )}
                <HStack>
                <InputForm label="Teléfono" handleChange={handleChange} name="telefono" placeholder="Teléfono" type="text" value={values.telefono} handleBlur={handleBlur}/>
                <InputForm label="Correo" handleChange={handleChange} name="correo" placeholder="Correo" type="text" value={values.correo} handleBlur={handleBlur}/>
                </HStack>
                <HStack justify={"space-between"}>
                     {touched.telefono && errors.telefono && (
                    <Text color={"red"}>{errors.telefono}</Text>
                )}
                {touched.correo && errors.correo && (
                    <Text color={"red"}>{errors.correo}</Text>
                )}
                </HStack>
               
                <HStack>
                <InputForm label="Fecha inicio rol" handleChange={handleChange} name="fecha_inicio_rol" placeholder="Fecha inicio rol" type="date" value={values.fecha_inicio_rol} handleBlur={handleBlur}/>
                <InputForm label="Fecha termino rol" handleChange={handleChange} name="fecha_termino_rol" placeholder="Fecha termino rol" type="date" value={values.fecha_termino_rol} handleBlur={handleBlur}/>
                </HStack>
                <HStack justify={"space-between"}>
                     {touched.fecha_inicio_rol && errors.fecha_inicio_rol && (
                    <Text color={"red"}>{errors.fecha_inicio_rol}</Text>
                )}
                {touched.fecha_termino_rol && errors.fecha_termino_rol && (
                    <Text color={"red"}>{errors.fecha_termino_rol}</Text>
                )}
                </HStack>
                    </form>
                )}
                
            </Formik>
            </Stack>
            <HStack>
        <Button colorScheme="blue" mt={10} mb={10} onClick={submitVecino}>Crear</Button>
        <Button colorScheme="red" mt={10} mb={10} onClick={()=> router.push('/')}>Volver</Button>
    </HStack>
        </Container>
    )
}
export default Vecinos

