import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Pet: AI文章最適化プラットフォーム</h2>
        <p>
          AIとアンケートシステムを組み合わせた、ターゲットの好む文章ベースに改善できるプラットフォーム
        </p>
        <div>
          <Link href="/login" className={styles.button}>
            ログイン
          </Link>
        </div>
      </div>
      <hr />
      <p>
        このシステムは中央大学AIデータサイエンス全学プログラム{' '}
        飯尾淳ゼミのプロジェクトの実証実験として開発されました。
      </p>
      <p>
        利用にあたっては、システムを利用してフレーズ改善に取り組む人、収集対象となるターゲット双方が実験としてデータ収集を受けることに同意する必要があります。本研究へのご協力の同意は、あなたの自由意思によって任意にお決めいただくものです。同意いただいた後でも、あなたが希望されれば随時同意を撤回できます。ご同意いただけない場合や同意を撤回した場合でも、あなたの不利益になることはありません。また、あなたが中央大学の学生である場合である場合に研究への参加を拒んでも、学業成績や単位取得に影響はありません。
      </p>
    </main>
  )
}
