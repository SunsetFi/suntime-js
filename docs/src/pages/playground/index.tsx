import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { useEffect } from "react";

import styles from "./index.module.css";

export default function PlaygroundPage(): React.ReactElement {
  const src = useBaseUrl("/playground-embed/");

  // Add a body class so our CSS module can target elements outside this
  // component's subtree (footer, main wrapper padding).
  useEffect(() => {
    document.body.classList.add("playground-page");
    return () => document.body.classList.remove("playground-page");
  }, []);

  return (
    <Layout title="Playground" description="Interactive JavaScript playground">
      <iframe
        className={styles.frame}
        src={src}
        title="Live JavaScript Playground"
        sandbox="allow-scripts allow-same-origin allow-downloads allow-forms"
      />
    </Layout>
  );
}
