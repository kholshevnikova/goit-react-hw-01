import TransactionItem from "./TransactionItem";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={items.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
