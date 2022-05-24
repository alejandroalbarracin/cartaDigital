import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableUsers, AddEditUser } from "../../Components/Admin";
import { ModalBasic } from "../../Components/Common";
import { UserUser } from "../../hooks";

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const { loading, users, getUsers } = UserUser();

  useEffect(() => getUsers(), []);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo Usuario");
    setContentModal(<AddEditUser />);
    openCloseModal();
  };

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Nuevo Usuario"
        btnClick={addUser}
        /*btnTitleTwo="Eliminar Usuario" */
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
