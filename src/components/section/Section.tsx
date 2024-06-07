import React from 'react';
import clsx from 'clsx';
import styles from './section.module.scss';
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type?: 'grid' | 'default';
  isBleed?: boolean;
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'stretch'
    | 'space-evenly';
}

function GridContent({
  children,
  type,
}: {
  children: React.ReactNode;
  type: SectionProps['type'];
}) {
  if (type === 'grid') {
    return <div className={styles['content']}>{children}</div>;
  } else {
    return children;
  }
}

export default function Section({
  children,
  type = 'default',
  isBleed = true,
  justify,
  className,
  ...rest
}: SectionProps) {
  // If the type is grid, the children will be wrapped in a div with the class name content
  return (
    <section
      className={clsx(className, {
        [styles['section-grid']]: type === 'grid',
        [styles['section-wrapper']]: type === 'default',
        bleed: isBleed,
      })}
      style={
        {
          ...rest.style,
          '--justify': justify,
        } as React.CSSProperties
      }
      {...rest}
    >
      <GridContent type={type}>{children}</GridContent>
    </section>
  );
}
