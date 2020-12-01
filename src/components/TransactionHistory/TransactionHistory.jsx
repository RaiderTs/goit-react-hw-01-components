import PropTypes from 'prop-types';
// import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.history}>
      <thead className={styles.heading}>
        <tr className={styles.title}>
          <th className={styles.call}>Type</th>
          <th className={styles.call}>Amount</th>
          <th className={styles.call}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.row} key={id}>
            <td className={styles.cell}>{type}</td>
            <td className={styles.cell}>{amount}</td>
            <td className={styles.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
