import { HeaderComponent } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post author="moises" content="Lorem ipsum dolor sit amet" />
          <Post author="Gabriel" content="Post massa" />
        </main>
      </div>
    </div>
  );
}
export default App;
