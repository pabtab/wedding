"use client";
import React from "react";
import { Formik, Field } from "formik";
import { FormikHelpers } from "@/node_modules/formik/dist/types";

interface Values {
  fullName: string;
  email: string;
  food: string;
}

export const RSVPForm = () => {
  return (
    <section className='h-screen text-center p-4'>
      <h1 className='text-olivergreen'>RSVPForm</h1>
      <div className='border-1 border-solid p-3 bg-white shadow-xl'>
        <Formik
          initialValues={{ fullName: "", email: "", food: "" }}
          validate={(values: Values) => {
            const errors = {} as Values;
            if (!values.fullName) {
              errors.fullName = "Requerido";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Correo invalido";
            } else if (!values.food) {
              errors.food = "Requerido";
            }
            return errors;
          }}
          onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <div className='question'>
                <label htmlFor='fullName'>Nombre Completo</label>
                <Field
                  type='text'
                  name='fullName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && errors.fullName}
              </div>
              <div className='question'>
                <label htmlFor='email'>Correo Electronico</label>

                <Field
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className='question'>
                <label htmlFor='food'>Restricción de comida?</label>
                <Field
                  type='text'
                  name='food'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.food}
                />
                {errors.food && touched.food && errors.food}
              </div>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};
