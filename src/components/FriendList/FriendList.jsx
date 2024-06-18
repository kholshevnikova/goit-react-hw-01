import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.container}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friend) => (
        <li className={styles.itemContainer} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
