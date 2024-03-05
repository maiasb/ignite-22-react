import { UsePost } from './usePost'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { IPost } from '../../models/Post'
import styles from './index.module.css'

export function Post({ author, publishedAt, postContent }: IPost) {
  const {
    publishedDateFormatted,
    publishedDateRelativeToNow,
    paragraphs,
    links,
    newComment,
    comments,
    setNewComment,
    handleAddNewComment,
    handleDeleteComment,
  } = UsePost({ publishedAt, postContent })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {paragraphs &&
          paragraphs.map((paragraph) => (
            <p key={paragraph.content}>{paragraph.content}</p>
          ))}
        <p className={styles.links}>
          {links &&
            links.map((link) => (
              <a key={link.content} href="#">
                {link.content}
              </a>
            ))}
        </p>
      </div>

      <div className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <footer>
          <button onClick={() => handleAddNewComment(newComment)}>
            Publicar
          </button>
        </footer>
      </div>

      <div className={styles.commentList}>
        {comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              deleteComment={handleDeleteComment}
            />
          ))}
      </div>
    </article>
  )
}
