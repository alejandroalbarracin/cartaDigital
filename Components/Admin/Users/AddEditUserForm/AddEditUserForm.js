import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserUser } from "../../../../hooks";
import "./AddEditUserForm.scss";

export function AddEditUser() {
  const { addUser } = UserUser();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newValidationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addUser(formValue);
        console.log("usuario creado con exito");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="userName"
        placeholder="Nombre de usuario"
        value={formik.values.userName}
        onChange={formik.handleChange}
        error={formik.errors.userName}
      />
      <Form.Input
        name="email"
        placeholder="Correo Electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="first_name"
        placeholder="Nombres"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      />
      <Form.Input
        name="last_name"
        placeholder="Apellidos"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <div className="add-edit-user-form__active">
        <Checkbox
          toggle
          checked={formik.values.is_active}
          onChange={(_, data) =>
            formik.setFieldValue("is_active", data.checked)
          }
        />
        Usuario Activo
      </div>
      <div className="add-edit-user-form__staff">
        <Checkbox
          toggle
          checked={formik.values.is_staff}
          onChange={(_, data) => formik.setFieldValue("is_staff", data.checked)}
        />
        Usuario Administrador
      </div>
      <Button type="submit" content="Crear" primary fluid />
    </Form>
  );
}

function initialValues() {
  return {
    userName: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    is_active: true,
    is_staff: false,
  };
}

function newValidationSchema() {
  return {
    userName: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string().required(true),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}
