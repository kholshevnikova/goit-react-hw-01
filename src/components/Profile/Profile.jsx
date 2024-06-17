import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img src={image} alt="User avatar" height="40" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.listContainer}>
        <li className={styles.itemContainer}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.itemContainer}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.itemContainer}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
