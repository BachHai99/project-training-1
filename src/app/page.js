import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "../components/Topbar";
import AnalyticsTable from "../components/AnalyticsTable";

export default function Home() {
  return (
    // <div className={styles.page}>
    <div>
      <Topbar />
      <div className="p-4 mt-6">
        <AnalyticsTable />
      </div>
    </div>
  );
}
