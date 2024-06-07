import clsx from 'clsx';
import Section from '@/components/section/Section';
import styles from './footer.module.scss';
interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export default function Footer({ children, className, ...rest }: FooterProps) {
  return (
    <footer {...rest} className={clsx(className, styles.footer)}>
      <Section justify="center">{children}</Section>
    </footer>
  );
}
