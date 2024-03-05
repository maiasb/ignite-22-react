import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale/pt'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './index.module.css'

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

export function Post({ author, publishedAt, postContent }: PostProps) {
  const [comments, setComments] = useState<null | Comment[]>(null)
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: pt,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  })

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
