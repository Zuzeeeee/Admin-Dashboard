import Image from 'next/image';
import styles from './transaction.module.css';

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  width={40}
                  height={40}
                  className={styles.userImage}
                ></Image>
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  width={40}
                  height={40}
                  className={styles.userImage}
                ></Image>
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  width={40}
                  height={40}
                  className={styles.userImage}
                ></Image>
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  width={40}
                  height={40}
                  className={styles.userImage}
                ></Image>
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;