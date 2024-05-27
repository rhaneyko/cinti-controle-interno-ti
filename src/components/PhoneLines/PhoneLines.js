import React from 'react'
import Table from 'react-bootstrap/Table';

const PhoneLines = () => {
  return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>CHAPA</th>
          <th>Nome completo</th>
          <th>CPF</th>
          <th>Linha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Rhaneyko Honorio da Silva</td>
          <td>061.532.951-93</td>
          <td>65981234567</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Fulano da Silva</td>
          <td>123.456.789-01</td>
          <td>65981345687</td>
        </tr>
        <tr>
          <td>003</td>
          <td>Vasco da Gama</td>
          <td>987.654.321-09</td>
          <td>65981456789</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PhoneLines
