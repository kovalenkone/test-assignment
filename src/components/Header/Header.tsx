import React from 'react';
import { FolderIcon } from '../../icons/FolderIcon';
import styles from './header.module.scss';

interface ILinks {
  name: string
  link: string
}

const links: ILinks[] = [
  {name: 'Telegram', link: 'https://t.me/kovalenkone'},
  {name: 'GitHub', link: 'https://t.me/kovalenkone'},
  {name: 'Resume', link: 'https://drive.google.com/file/d/1j8z__X8Jj5BTjlDO4Jp_zdzgfhogFbkL/view?usp=drive_link'}
]

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        АК
      </div>

      <div className={styles.info}>
        <span className={styles.name}>
          Коваленко Андрей
        </span>
        <ul className={styles.list}>
          {links.map((item) => 
            <li className={styles.item} key={item.name}>
              <FolderIcon />
              <a className={styles.link} href={item.link}>
                {item.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
