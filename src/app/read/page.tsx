'use client'
import { IconTaskAlt } from '@/components/Icons/generated'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>カードリーダーを試す</h1>
      <hr />
      <h2>
        <IconTaskAlt /> ご利用条件
      </h2>
      <p>Web NFC対応ブラウザ・機器をご利用いただく必要があります。</p>
      <p>
        2024年5月時点で、Android端末のChrome, Samsung Internet,
        Operaに対応しています。
      </p>
      <p>詳細はブラウザ公式の情報をご確認ください。</p>
    </main>
  )
}
