import { HeaderComponent } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

export function App() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
export default App;
