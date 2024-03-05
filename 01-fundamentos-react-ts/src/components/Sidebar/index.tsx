import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './index.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/maiasb.png" />

        <strong>Caio Maia</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
