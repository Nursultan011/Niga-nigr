import Head from "next/head";
import styles from "../styles/Program.module.css";
import { withNamespaces } from "react-i18next";
import {useState , useEffect} from 'react'
import { Header, Template, Footer } from "../components";
import i18n from "../i18n";

const full_text = "tasks_full_text"

function Tasks({ t }) {
  const [text, setText] = useState({__html : ""})
  useEffect(() => {
    setText({__html : t(full_text)})
  }, [t])

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Некомерческое акционерное общество “Национальный институ гармоничного
          развития человека”
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header blue={true} />
      <Template>
        <div className={styles.image}>
  <div className={styles.title} >{t("tasks_name")}</div>
        </div>
        <div className={styles.content}>
          <p className={styles.text} dangerouslySetInnerHTML={text}></p>
        </div>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(Tasks);
