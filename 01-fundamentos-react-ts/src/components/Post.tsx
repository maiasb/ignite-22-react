import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export interface Author {
  avatarUrl: string
  name: string
  role: string
}

export interface linePostContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: number
  author: Author
  postContent: linePostContent[]
  publishedAt: Date
}

export function Post({ author, postContent }: PostProps) {
  const [comments, setComments] = useState<null | Comment[]>(null)
  const [newComment, setNewComment] = useState('')
  const paragraphs = postContent.filter((content) => {
    return content.type === 'paragraph'
  })
  const links = postContent.filter((content) => {
    return content.type === 'link'
  })

  function handleAddNewComment(newComment: string) {
    setComments((state) => [
      ...(state || []),
      {
        id: (comments && comments.length + 1) || 1,
        content: newComment,
      },
    ])
    setNewComment('')
  }

  function handleDeleteComment(commentId: number) {
    setComments((state) => {
      const updatedComments = (state || []).filter(
        (comment) => comment.id !== commentId,
      )
      return updatedComments
    })
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:34">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph.content}</p>
          ))}
        <p className={styles.links}>
          {links &&
            links.map((link, index) => (
              <a key={index} href="#">
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
          comments.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              deleteComment={handleDeleteComment}
            />
          ))}
      </div>
    </article>
  )
}
