import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const Contact = (props) => {
    return (
        <div className='contact container'>
            <h1 className='text-center mt-5'>Contactez-nous</h1>

            <div className='w-25 mx-auto mt-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom:</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='nom' onChange={props.handleChange} value={props.values.nom} />
                        {props.errors.nom &&
                            <span style={{ color: 'red' }}>
                                {props.errors.nom}
                            </span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">Prénom:</label>
                        <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" name='prenom' onChange={props.handleChange} value={props.values.prenom} />
                        {props.errors.prenom &&
                            <span style={{ color: 'red' }}>
                                {props.errors.prenom}
                            </span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse mail:</label>
                        <input type="email" className="form-control" id="email" name='email' onChange={props.handleChange} value={props.values.email} />
                        {props.errors.email &&
                            <span style={{ color: 'red' }}>
                                {props.errors.email}
                            </span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Numéro de téléphone:</label>
                        <input type="text" className="form-control" id="phone" name='tel' onChange={props.handleChange} value={props.values.tel} />
                        {props.errors.tel &&
                            <span style={{ color: 'red' }}>
                                {props.errors.tel}
                            </span>
                        }
                    </div>
                    <div className="input-group mt-3">
                        <label htmlFor="message" className="input-group-text">Message</label>
                        <textarea className="form-control" aria-label="With textarea"
                            rows="3" name='message' onChange={props.handleChange} value={props.values.message} ></textarea>
                    </div>
                    {props.errors.message &&
                        <span style={{ color: 'red' }}>
                            {props.errors.message}
                        </span>
                    }
                    <div className='text-center mt-3'>
                        <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Valider</button>
                        <button type="reset" className="btn btn-secondary ms-2" onClick={props.handleReset}>
                            Réinitialiser
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: "",
        prenom: "",
        tel: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, 'Votre nom doit avoir plus de 5 caractères.')
            .required("Le nom est obligatoire."),
        prenom: Yup.string()
            .min(5, 'Votre prénom doit avoir plus de 5 caractères.')
            .required("Le prénom est obligatoire."),
        email: Yup.string()
            .email("Veuillez entrer une adresse mail valide.")
            .required("Le mail est obligatoire."),
        tel: Yup.string()
            .matches(/^\d{10}$/, 'Le numéro de téléphone doit contenir 10 chiffres.')
            .required("Le numéro de téléphone est obligatoire."),
        message: Yup.string()
            .min(10, "Le message doit contenir plus de 10 caractères.")
            .max(500, "Le message doit faire moins de 500 caractères.")
            .required("Le message est obligatoire.")
    }),
    handleSubmit: (values) => {
        alert('Message envoyé');
    },
    handleReset: (values) => {
        withFormik.resetForm();
    }
})(Contact);