import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Author, Post, linePostContent } from './components/Post'

import styles from './App.module.css'

import './global.css'

interface PostProps {
  id: number
  author: Author
  postContent: linePostContent[]
  publishedAt: Date
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maiasb.png',
      name: 'Caio Maia',
      role: 'DEV',
    },
    postContent: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-11-24 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    postContent: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-11-24 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    postContent: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
      {
        type: 'link',
        content: 'jane.design/uposts',
      },
    ],
    publishedAt: new Date('2023-11-23 20:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts &&
            posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                postContent={post.postContent}
                publishedAt={post.publishedAt}
              />
            ))}
        </main>
      </div>
    </>
  )
}
