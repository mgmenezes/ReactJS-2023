import { Circle, ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/28824607?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Moisés Menezes</strong>
              <time
                title="13 de Novembro de 2022 às 19:14"
                dateTime="2022-11-13 19:14:33"
              >
                Cerca de 1h
              </time>
            </div>
            <button title="Apagar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer className={styles.commentBox}>
          <button>
            <ThumbsUp />
            Aplaudir<span>22</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
