import styles from "./Project.module.css";
import { withNamespaces } from "react-i18next";
import { useState } from "react";
import cn from "classnames";
import Tabs from "../Tabs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiBriefcase,
  FiBookOpen,
  FiFeather,
  FiClipboard,
  FiFolder,
  FiCodesandbox,
} from "react-icons/fi";
import Button from "../Button";

const tabs = [
  {
    value: "pilot",
    label: "Пилотный проект",
  },
  {
    value: "seminar",
    label: "Мероприятия",
  },
];

const items = [
  {
    title: "О проекте",
    icon: <FiBriefcase size={24} />,
    link: "#",
    text:
      "Цель пилотного проекта - создание в организациях образования целостной воспитывающей среды, основанной на общечеловеческих  ценностях. Целостная воспитывающая среда - это результат деятельности субъектов педагогического процесса с учетом единства физической, психической и духовной природы человека и социально-бытовых условий, в которых протекает жизнедеятельность и становление личности.",
  },
  {
    title: "Базовые организации образования",
    icon: <FiBookOpen size={24} />,
    link: "#",
    locale: "baseSchools",
  },
  {
    title: "Пилотные организации образования",
    icon: <FiFeather size={24} />,
    link: "#",
    locale: "pilotSchools",
  },
];

const items2 = [
  // {
  //   title: "План мероприятий",
  //   icon: <FiClipboard size={24} />,
  //   link: "#",
  //   text:
  //     "Цель пилотного проекта - создание в организациях образования целостной воспитывающей среды, основанной на общечеловеческих  ценностях. Целостная воспитывающая среда - это результат деятельности субъектов педагогического процесса с учетом единства физической, психической и духовной природы человека и социально-бытовых условий, в которых протекает жизнедеятельность и становление личности.",
  // },
  {
    title: "Материалы",
    icon: <FiFolder size={24} />,
    text:
      "4 февраля 2021 года Гуманитарный колледж «Самопознание» ННПООЦ «Бөбек» при поддержке Министерства образования и науки Республики Казахстан, Комитета по охране прав детей МОН РК прошли Республиканские педагогические чтения в онлайн-формате для организаций технического и профессионального образования по теме: «Педагогика любви и творчества».",
    locale: "baseSchools",
    link: "#",
  },
];

const Project = ({ t }) => {
  const [tab, setTab] = useState("pilot");
  const [itemProject, setItemProject] = useState(0);
  const [itemEvent, setItemEvent] = useState(0);
  return (
    <div className={styles.project}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} theme="default" items={tabs} />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <FiCodesandbox size={24} />
          <span>Пилотный проект</span>
        </div>
        {items.map((o, i) => (
          <div
            className={cn(styles.item, {
              [styles.active]: itemProject === i,
            })}
          >
            <div onClick={() => setItemProject(i)} className={styles.itemTitle}>
              {o.icon}
              <span>{o.title}</span>
            </div>
            <p>{o.text || t(o.locale)}</p>
            {o.link ? (
              <a href={o.link}>
                <Button>{t("more")}</Button>
              </a>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.body2}>
        <div className={styles.title}>
          <FiCodesandbox size={24} />
          <span>Мероприятия</span>
        </div>
        {items2.map((o, i) => (
          <div
            className={cn(styles.item, {
              [styles.active]: itemEvent === i,
            })}
          >
            <div onClick={() => setItemEvent(i)} className={styles.itemTitle}>
              {o.icon}
              <span>{o.title}</span>
            </div>
            <p>{o.text || t(o.locale)}</p>
            {o.link ? (
              <a href={o.link}>
                <Button>{t("more")}</Button>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(Project);
