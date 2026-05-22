import React, { type ReactNode } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';
import SuntimeCodeBlock from './SuntimeCodeBlock';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  if (props.metastring?.includes('live-suntime')) {
    return <SuntimeCodeBlock {...props} />;
  }
  return <CodeBlock {...props} />;
}
