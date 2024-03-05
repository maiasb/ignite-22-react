import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import { IComment } from '../../models/Comment'
import styles from './index.module.css'

interface CommentProps {
  comment: IComment
  deleteComment(commentId: number): void
}

export function Comment({ comment, deleteComment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maiasb.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Maia</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:34">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => deleteComment(comment.id)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
