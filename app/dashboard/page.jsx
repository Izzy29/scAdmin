import Card from "../ui/dashboard/card/card";
import Card2 from "../ui/dashboard/card/card2";
import Card3 from "../ui/dashboard/card/card3";
import Chart from "../ui/dashboard/chart/chart";
import Chart2 from "../ui/dashboard/chart/chart2";
import Chart3 from "../ui/dashboard/chart/chart3";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card2 />
          <Card3 />
        </div>
        <div className={styles.secondRow}>
          <div className={styles.firstChart}>
            <Chart />
          </div>
          <div className={styles.secondChart}>
            <Chart2 />
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.firstChart}>
            <Chart3 />
          </div>
          <div className={styles.secondChart}>
            <Transactions />
          </div>
        </div>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;