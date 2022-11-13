import React from "react";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
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
          👉
        </p>
        <p>
          {" "}
          <a>jane.design/doctorcare</a>
        </p>
        <p>
          {" "}
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
