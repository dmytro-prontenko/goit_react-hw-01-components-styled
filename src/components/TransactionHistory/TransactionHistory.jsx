import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTransactionTable, StyledTransactionType, StyledTransactionsContainer, StyledTransactionsSection } from './TransactionHistory.Styled';

const TransactionHistory = props => {
  const dataToInsert = props.items.map(({ id, amount, currency, type }) => {
    return (
      <tr key={id}>
        <StyledTransactionType>{type}</StyledTransactionType>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <StyledTransactionsSection>
      <StyledTransactionsContainer>
        <StyledTransactionTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>{dataToInsert}</tbody>
        </StyledTransactionTable>
      </StyledTransactionsContainer>
    </StyledTransactionsSection>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
