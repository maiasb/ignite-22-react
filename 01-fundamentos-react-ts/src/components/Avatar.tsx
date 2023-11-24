import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean
  src: string
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text */
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
