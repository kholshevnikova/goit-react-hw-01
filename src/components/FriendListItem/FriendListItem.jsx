import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  //   console.log(avatar, name, isOnline);
  const statusClases = clsx(
    styles.text,
    isOnline ? styles.isOnline : styles.isOffline
  );
  //   console.log(statusClases);
  return (
    <div className={styles.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.text}>
        <b>{name}</b>
      </p>
      <p className={statusClases}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
