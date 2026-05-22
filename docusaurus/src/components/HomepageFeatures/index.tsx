import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sandboxed by Design',
    description: (
      <>
        Evaluated code is fully isolated from the host. It can only access what
        you explicitly provide, keeping your application safe from runaway or
        malicious scripts.
      </>
    ),
  },
  {
    title: 'Non-Blocking Execution',
    description: (
      <>
        Time-sharing and time-bound task runners let you run untrusted code
        alongside your application without deadlocks or freezes.
      </>
    ),
  },
  {
    title: 'TC39 Spec Compliance',
    description: (
      <>
        Verified against the Test262 test suite. Supports modern JavaScript —
        async/await, generators, modules, and more.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
