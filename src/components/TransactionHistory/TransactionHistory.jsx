import TransactionItem from "./TransactionItem";

import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={styles.line} key={items.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
