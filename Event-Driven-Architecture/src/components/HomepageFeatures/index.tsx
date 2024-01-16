import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Governance',
    description: (
      <>
        More about Governance in Event Driven Architecture.
      </>
    ),
  },
  {
    title: 'Integration',
    description: (
      <>
        More about Integration in Event Driven Architecture.
      </>
    ),
  },
  {
    title: 'Metadata',
    description: (
      <>
        More about Metadata in Event Driven Architecture.
      </>
    ),
  },
  {
    title: 'Security',
    description: (
      <>
        More about Security in Event Driven Architecture.
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

export default function HomepageFeatures(): JSX.Element {
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
