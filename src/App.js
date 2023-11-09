import React, { useState, useEffect } from 'react';
import './App.css';
import db from "./firebase";

function App() {

  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = (useState([]));
  const [updatedCustomerName, setUpdatedCustomerName] = useState("");
  const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  useEffect(() => {
    db.collection("customersData").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    db.collection("customersData").add({
        name: customerName,
        password: customerPassword,
    });

    setCustomerName("");
    setCustomerPassword("");
  };

  const updateData = (e) => {
    e.preventDefault();
    db.collection("customersData").doc(dataIdToBeUpdated).update({
      name: updatedCustomerName,
      password: updatedCustomerPassword,
    });

    setUpdatedCustomerPassword("");
    setUpdatedCustomerName("");
    setDataIdToBeUpdated("");
  };

  const deleteData = (id) => {
    db.collection("customersData").doc(id).delete();
  }

  return (
    <div className="App">
    <h1>Registro de Clientes</h1>
      {!dataIdToBeUpdated ? (
        <div className="App__form">
        <input
          type="text"
          placeholder="Nombre"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}>
          </input>
          <input
            type="text"
            placeholder="Contraseña"
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}>
          </input>
          <button onClick={submit}>Enviar</button>
        </div>
      ) : (
        <div className='App__Updateform'>
          <input 
            type="text"
            placeholder="Nombre"
            value={updatedCustomerName}
            onChange={(e) => setUpdatedCustomerName(e.target.value)}>
          </input>
          <input 
            type="text"
            placeholder="Contraseña"
            value={updatedCustomerPassword}
            onChange={(e) => 
            setUpdatedCustomerPassword(e.target.value)}>
          </input>
          <button onClick={updateData}>Actualizar</button>
        </div>
    )}

      <div className='App__DataDisplay'>
      <table>
        <tr>
          <th>NOMBRE</th>
          <th>CONTRASEÑA</th>
          <th>Actualizar</th>
          <th>Borrar</th>
        </tr>

        {customersData?.map(({ id, data}) => (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.password}</td>
            <td>
              <button
                onClick={() => {
                  setDataIdToBeUpdated(id);
                  setUpdatedCustomerPassword(data.password);
                  setUpdatedCustomerName(data.name);
                }}
              >
                Actualizar
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  deleteData(id);
                }}
              >
              Borrar
              </button>
            </td>
          </tr>
        ))}
      </table>

      </div>
    </div>
  );
}

export default App;
