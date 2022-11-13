import React from "react";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/28824607?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Moisés Menezes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="13 de Novembro de 2022 às 19:14"
          dateTime="2022-11-13 19:14:33"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          <a>👉 jane.design/doctorcare</a>
        </p>
        <p>
          {" "}
          <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
