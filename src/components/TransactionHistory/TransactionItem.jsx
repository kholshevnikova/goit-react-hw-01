import styles from "./TransactionItem.module.css";

export default function TransactionItem({ item: { type, amount, currency } }) {
  return (
    <>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
    </>
  );
}
