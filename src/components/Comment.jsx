import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./Comment.module.css";

export const Comment = ({}) => {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/28824607?v=4" />
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
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>22</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
