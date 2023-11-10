import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import logo from '../img/logo-artes-marciales.png'
import whatsapp from '../img/whatsapp-fill.svg'


const Contacto = () => {

    const refForm = useRef()
    const [mensaje, setMensaje] = useState('')
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const onSubmit = handleSubmit(() => {

        const serviceid = "service_b1ys1t4"
        const templateid = "template_4dlg5xn"
        const apiKey = "LdigRMfNVuNdKTAUI"

        emailjs.sendForm(serviceid, templateid, refForm.current, apiKey)
            .then(res => console.log(res.text))
            .catch(err => console.error(err))
        
        Swal.fire('Mensaje enviado!', 'Verifique su mensaje en su correo electrónico.')
        reset()
    })

    const handleMensajeChange = (e) => {
        setMensaje(e.target.value)
    }

    useEffect(() => {
        const textarea = refForm.current.querySelector('#mensaje')
        textarea.style.height = 'auto'
        textarea.style.height = (textarea.scrollHeight) + 'px'
    }, [mensaje])

    return (
        <>
        <div className="container-contacto">
            <div className='volver-a-inicio-desde-contacto'><Link to='/'>  &larr; Volver al inicio</Link></div>
            <img src={logo} alt="" height={250} width={250} />
            <form ref={refForm} action="POST" onSubmit={onSubmit}>

                <h4>Contactate con un profesional</h4>

                <div className='inputs'>
                    <div className='inputs-grupo'>
                        <input type="text" name='nombre_usuario' id='name' className='form-input' placeholder=' '
                            {...register("nombre_usuario", {
                                required: {
                                    value: true,
                                    message: "Nombre es obligatorio."
                                },
                                minLength: {
                                    value: 2,
                                    message: "Nombre debe tener mínimo 2 caracteres."
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Nombre debe tener máximo 30 caracteres."
                                }
                            })}
                        />
                        <label htmlFor="name" className='form-label'>Nombre:</label>
                        {errors.nombre_usuario && <span className='mensaje-error'>{ errors.nombre_usuario.message }</span>}
                    </div>

                    <div className='inputs-grupo'>
                        <input type="text" name='email' id='email' className='form-input' placeholder=' '
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Correo es obligatorio.'
                                },
                                pattern: {
                                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                    message: "Correo no es válido."
                                }
                            })}
                        />
                        <label htmlFor="email" className='form-label'>Correo electronico:</label>
                        {errors.email && <span className='mensaje-error'>{ errors.email.message}</span>}
                    </div>

                    <div className='inputs-grupo'>
                        <textarea maxLength={500}
                        className='form-input'
                        type="text"
                        name='mensaje'
                        id='mensaje'
                        placeholder=' '
                            {...register("mensaje", {
                                required: {
                                    value: true,
                                    message: "Mensaje es obligatorio."
                                },
                                minLength: {
                                    value: 10,
                                    message: "Mensaje debe tener mínimo 10 caracteres."
                                },  
                            })}    
                        value={mensaje}
                        onChange={handleMensajeChange}
                        />
                        <label htmlFor="mensaje" className='form-label'>Escribe un mensaje:</label>
                        {errors.mensaje && <span className='mensaje-error'>{ errors.mensaje.message}</span>}
                    </div>

                </div>
                <div className='form-btns'>
                    <button className='btn-cancelar' type='reset'>Cancelar</button>
                    <button className='btn-enviar' type='submit'>Enviar</button>
                </div>
            </form>
            
            <div className='container-contacto-whatsapp'>
                <h4>O puedes contactarte mediante <span>WhatsApp</span></h4>
                <a href="https://wa.me/542284236588?text=Consulta para practicar artes marciales:" target='_blank' rel='noreferrer'><img src={whatsapp} alt='whatsapp' /></a>
            </div>
            </div> 
        </>    
    )
}

export default Contacto
