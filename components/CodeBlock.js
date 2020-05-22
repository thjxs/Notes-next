import React from "react";
import Highlight, { Prism } from "prism-react-renderer";
import light from "prism-react-renderer/themes/github";
import dark from 'prism-react-renderer/themes/duotoneDark'
import {DarkModeContext} from './DarkModeContext'

export const RawCodeBlock = ({
  code,
  language,
  className: extraClassName,
  disablePrefixes,
}) => (
<DarkModeContext.Consumer>
  {darkMode =>

  <Highlight
    Prism={Prism}
    theme={darkMode ? dark : light}
    code={code}
    language={
      language === "shell" ? "bash" : language === "text" ? "diff" : language
    }
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={
          className + " flex overflow-y-auto " + (extraClassName ?? "")
        }
        style={{ ...style }}
      >
        {!disablePrefixes &&
          tokens.length === 1 &&
          (language === "bash" || language === "shell") && (
            <code className="pr-2 sm:pr-3">
              <div className="text-gray-400 token-line text-right select-none">
                $
              </div>
            </code>
          )}
        {tokens.length > 1 && !disablePrefixes && (
          <code className="pr-2 sm:pr-3">
            {tokens.map((line, i) =>
              line[0]?.empty && i === tokens.length - 1 ? null : (
                <div
                  key={i + "1"}
                  className="text-gray-400 token-line text-right select-none"
                >
                  {i + 1}{" "}
                </div>
              )
            )}
          </code>
        )}
        <code>
          {tokens.map((line, i) =>
            line[0]?.empty && i === tokens.length - 1 ? null : (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })}></span>
                ))}
                {line[0]?.empty ? "\n" : ""}
              </div>
            )
          )}
        </code>
      </pre>
    )}
  </Highlight>}
</DarkModeContext.Consumer>
);

const CodeBlock = ({ code, language, disablePrefixes }) => (
  <RawCodeBlock
    code={code}
    language={language}
    disablePrefixes={disablePrefixes}
    className="rounded border border-gray-200 p-1 px-2 sm:px-3"
  />
);

export default CodeBlock;
