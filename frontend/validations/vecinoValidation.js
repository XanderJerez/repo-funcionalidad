import * as yup from 'yup';


const VecinoValidation= yup.object({

    nombre: yup.string().min(3,"Debe contener mínimo 3 caracteres")
    .max(50,"Debe tener máximo 50 caracteres")
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z]+$/,"El nombre no puede contener caracteres especiales"),

    apellido: yup.string().min(3,"Debe contener mínimo 3 caracteres")
    .max(50,"Debe tener máximo 50 caracteres")
    .required("El apellido es obligatorio")
    .matches(/^[a-zA-Z]+$/,"El apellido no puede contener caracteres especiales"),

    fechaNacimiento: yup.date()
    .required("La fecha de nacimiento es obligatoria"),

    direccion: yup.string().min(3,"Debe contener mínimo 3 caracteres")
    .max(50,"Debe tener máximo 100 caracteres")
    .required("La dirección es obligatoria"),

    telefono: yup.string()
    .required("El teléfono es obligatorio")
    .matches(/^[0-9-+]+$/,"El teléfono no puede contener caracteres especiales"),

    correo: yup.string().min(3,"Debe contener mínimo 3 caracteres")
    .max(50,"Debe tener máximo 50 caracteres")
    .required("El correo es obligatorio")
    .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,"El correo no puede contener caracteres especiales"),

    rol: yup.string().min(3,"Debe contener mínimo 3 caracteres")
    .max(20,"Debe tener máximo 50 caracteres")
    .required("El rol es obligatorio"),

    fecha_inicio_rol: yup.date()
    .required("La fecha del inicio del rol es obligatoria"),

    fecha_termino_rol: yup.date()
    .required("La fecha del termino del rol es obligatoria")
})

export default VecinoValidation

/*    nombre:{
        type: String,
        required:true,
        //match: /^[a-zA-Z]+$/,
        minLenght:1,
        maxLenght: 100
    },
    apellido:{
        type: String,
        required:true,
        //match: /^[a-zA-Z]+$/,
        minLenght:1,
        maxLenght: 100
    },
    fechaNacimiento:{
        type: Date,
        required:true
    },
    direccion:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true,
        //match: /^[0-9-+]+$/
    },
    correo:{
        type: String,
        required:true,
       match: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    },
    rol:{
        type: String,
        required: true
    },
    fecha_inicio_rol:{
        type: Date,
        required:true
    },
    fecha_termino_rol:{
        type: Date,
        required:true
    }*/