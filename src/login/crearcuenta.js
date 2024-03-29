import React from 'react';
import {useFormik} from 'formik';
import firebase from '../firebase';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Cuenta = () => {

   const history = useHistory();


    const formik = useFormik({
        initialValues: {
            nombre: '',
            correo: '',
            password: '', 
        },
    
        validationSchema: Yup.object({
          nombre: Yup.string()
                      .min(5, 'Minimo 5 caracteres'),
          correo: Yup.string()
                      .email("Correo Electronico invalido"),
    
          password: Yup.string()
                      .min(5, 'Minimo 5 caracteres'),
        }),
    
        onSubmit: values => {
            try {
              crearCuenta(values.nombre, values.correo, values.password);
             
              
             } catch (error) {
                 console.log(error);
             }
            
        }
    });


    async function crearCuenta(nombre, email, password) {
        try {
          await firebase.registrar(nombre, email, password);
          
            MySwal.fire({
                icon: 'success',
                title: <p>Registrado Correctamente</p>
            })
          //alert("Usuario Registrado");
          history.push("/");
        } catch (error) {
        
          console.error('Hubo un error al crear el usuario ', error.message);
        }
    }

    



    return ( 
    
        <div className="h-screen overflow-hidden flex items-center justify-center bg-cuartoColor">
        
          <div className="bg-white shadow-2xl rounded-extra px-12 pb-8 mb-4 flex flex-col sm:w-6/12  md:w-5/12 lg:w-4/12 xl:w-3/12 xl:px-12">
            
            <div className="flex items-center justify-center">
                <h1 className="font-bold text-lg mb-4 mt-4">Crear Cuenta</h1>
            </div>

            <form
              onSubmit={formik.handleSubmit} 
            >
                

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Nombre</label>
                    <input
                        required 
                        className="focus:outline-none shadow appearance-none border rounded w-full py-2 px-3"
                        id="nombre"
                        name="nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        placeholder="Nombre" 
                    />
                </div>
                
                {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-5" role="alert">
                                <p>{formik.errors.nombre}</p>
                            </div>
                        ): null}

    
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                        required 
                        className="focus:outline-none shadow appearance-none border rounded w-full py-2 px-3"
                        id="correo"
                        name="correo"
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="Email" 
                        placeholder="Correo Electrónico" 
                    />
                </div>
                
                {formik.touched.correo && formik.errors.correo ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-5" role="alert">
                                <p>{formik.errors.correo}</p>
                            </div>
                        ): null}



                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input
                        required 
                        className="focus:outline-none shadow appearance-none border rounded w-full py-2 px-3"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="Password" 
                        placeholder="Contraseña" 
                    />
                </div>

                {formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-5" role="alert">
                                <p>{formik.errors.password}</p>
                            </div>
                        ): null}

                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className=" bg-tercerColor focus:outline-none hover:bg-blue-dark text-white font-bold py-2 px-4 rounded cursor-pointer" 
                    >Crear Cuenta</button>
                </div>


            </form>
        </div>
      </div>
    );
};