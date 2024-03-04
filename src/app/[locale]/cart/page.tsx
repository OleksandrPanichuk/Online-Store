'use client';
import { Breadcrumbs, CartInfo, SvgIcon, Title } from '@/components/common';
import { CartItem } from '@/components/screens/cart';
import { cn } from '@/lib';
import { Routes } from '@/shared/constants';
import { useCartStore } from '@/store';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const Page = () => {
  const t = useTranslations();
  const items = useCartStore((state) => state.items);

  return (
    <div className={cn('page__container', styles.container)}>
      <div className={styles.top}>
        <Breadcrumbs>
          <Breadcrumbs.Item href={Routes.ROOT}>lalabrand</Breadcrumbs.Item>
          <Breadcrumbs.Item href={Routes.CART}>cart</Breadcrumbs.Item>
        </Breadcrumbs>
        <span className={styles.count}>
          {items.length === 1 ? '1 item' : `${items.length} items`}
        </span>
      </div>
      <section className={styles.content}>
        <Title
          name={t('Titles.Bag')}
          pronoun={t('Titles.Shopping')}
          className={styles.title}
        />
        <div className={styles.grid}>
          <div className={styles.shipping}>
            <SvgIcon name="truck" width={32} height={22} fill="#222222" />
            <div>
              <h4>{t('Cart.Shipping free.Title')}</h4>
              <p>{t('Cart.Shipping free.Text')}</p>
            </div>
          </div>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem data={item} key={item.id} />
            ))}
          </div>
          <CartInfo />
        </div>
      </section>
    </div>
  );
};

export default Page;
