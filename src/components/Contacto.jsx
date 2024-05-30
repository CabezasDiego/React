import React, { useState } from 'react';
import llama from '../assets/img/llamas.png'; 

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono } = formData;

    if (nombre && telefono) {
      alert('Mensaje enviado');
      setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
    } else {
      alert('Por favor, complete los campos obligatorios');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-5 justify-content-around">
        <div className="col-md-5">
          <img src={llama} alt="Imagen" className="img-fluid" />
        </div>
        <div className="col-md-6 m-3">
          <h2 className='text-warning fw-bold fs-1'>Formulario de Contacto</h2>
          <form onSubmit={handleSubmit} className='my-5'>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-medium">Nombre *</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label fw-medium">Teléfono *</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">Email (opcional)</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label fw-medium">Mensaje (opcional)</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-lg fw-medium">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
