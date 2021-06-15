import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <i class='fas fa-search fa-4x'></i>
          <h3>Search the database</h3>
        </div>
        <div>
          <i class='fas fa-info fa-4x'></i>
          <h3>View detailed information</h3>
        </div>
        <div>
          <i class='fas fa-file-download fa-4x'></i>
          <h3>Download to your computer</h3>
        </div>
      </div>
    </>
  )
}
