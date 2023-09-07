import styled from 'styled-components';

export const StyledTransactionsSection = styled.section`
  width: 600px;
  margin: 0 auto;
`;
export const StyledTransactionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const StyledTransactionTable = styled.table`
  width: 500px;
  border: none;
  margin-bottom: 20px;

  & thead th {
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  & tbody td {
    text-align: center;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }
  & thead tr th:first-child,
  .transaction-history tbody tr td:first-child {
    border-left: none;
  }
  & thead tr th:last-child,
  & tbody tr td:last-child {
    border-right: none;
  }
  & tbody tr:nth-child(even) {
    background: #f3f3f3;
  }
`;

export const StyledTransactionType = styled.td`
  &::first-letter {
    text-transform: uppercase;
  }
`;
