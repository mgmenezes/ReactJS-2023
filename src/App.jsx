import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
export function App() {
  return (
    <div>
      <Header />
      <Post
        author="moises"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid debitis odit, similique error earum quaerat mollitia provident accusamus,culpa laudantium molestiae sed cum perferendis est facere ullam, assumenda optio vel?"
      />
      <Post author="Gabriel" content="Post massa" />
    </div>
  );
}
export default App;
