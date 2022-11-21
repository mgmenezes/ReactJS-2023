import { HeaderComponent } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mgmenezes.png",
      name: "Moisés Menezes",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "ane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-19 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "John Doe",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "john.doe/doctorcare" },
    ],
    publishedAt: new Date("2022-10-02 22:00:00"),
  },
];

export function App() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
export default App;
