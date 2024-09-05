import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export function MarkdownRenderer({ markdown }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ?
              <SyntaxHighlighter
                style={dracula}
                PreTag="div"
                language={match[1]}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            : <code
                className={className}
                {...props}
              >
                {children}
              </code>;
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
MarkdownRenderer.propTypes = {
  markdown: PropTypes.string.isRequired,
};
