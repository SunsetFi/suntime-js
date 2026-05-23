import type { ReactNode } from "react";

import quickStartCode from "!!raw-loader!./_quick-start-code.js";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.badges}>
          <img
            alt="Test262 Language Suite"
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262-language.json"
          />
          <img
            alt="Test262 Builtins Suite"
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262-builtins.json"
          />
          <img
            alt="Test262 Totals"
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262.json"
          />
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/quick-start">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageCodeSnippet() {
  return (
    <div className={styles.codeSnippet}>
      <div className="container">
        <Heading as="h2">Try it out!</Heading>
        <p>
          Or try it in the <Link href="/playground">interactive playground</Link> complete with
          breakpoints!
        </p>
        <CodeBlock language="ts" metastring="live-staticjs">
          {quickStartCode}
        </CodeBlock>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A sandboxed JavaScript interpreter implementing the TC39 ECMAScript standard"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Admonition type="warning" className={styles.inProgress}>
          Suntime-JS is a work in progress. Currently, the majority of the ECMAScript language
          features are implemented, but support is missing for many built-in APIs. Check the{" "}
          <Link to="/docs/status">status page</Link> for details on what is and isn't supported.
        </Admonition>
        <HomepageCodeSnippet />
      </main>
    </Layout>
  );
}
