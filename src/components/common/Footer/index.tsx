'use client';

import { Logo } from '../Logo';

import { cn } from '@/lib';
import { Routes } from '@/shared/constants';
import { Link } from '@/shared/navigation';
import { useTranslations } from 'next-intl';
import { footerLinks, socialLinks, column } from './Footer.data';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import css from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations();

  function onSubmit() {
    console.log('send');
  }
  return (
    <footer className={css.footer}>
      <div className={css.limiter}>
        <ul className={css.nav}>
          {footerLinks.map((el, index) => (
            <li key={index}>
              <h3>{Object.keys(column[index])[0]}</h3>
              <ul>
                {el.map((item: { href: string; key: string }) => (
                  <li key={item.key}>
                    <Link href={item.href}>{t(item.key)}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className={css.subscribe}>
          <h3>{t('Footer.Titles.Get more deals')}</h3>
          <p>{t('Footer.Text.Subscribe')}</p>
          <form onSubmit={onSubmit}>
            <label>
              {t('Footer.Titles.Email')}
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </label>

            <button type="submit">
              Join
              <SvgIcon name={'arrow'} width={48} height={16} />
            </button>
          </form>
        </div>
        <div className={css.logo}>
          <Logo />
          <p>
            © 2024 All materials were taken as part of a case study project
            from the{' '}
            <Link href="https://www2.hm.com/en_us/index.html">H&M website</Link>
          </p>
        </div>
        <ul className={css.social}>
          {socialLinks.map((el) => (
            <li key={el}>
              <Link href={`www.${el}`}>
                <SvgIcon name={el} width={24} height={24} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
