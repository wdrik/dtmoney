import { useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$8.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Alugel</td>
            <td className="withdraw">R$1.500</td>
            <td>casa</td>
            <td>25/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="deposit">R$4.000</td>
            <td>Desenvolvimento</td>
            <td>15/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}