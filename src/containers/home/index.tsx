/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Layout from "../layouts";
import { HeroTitle } from "./styled";

const Home: React.FC = () => (
  <Layout>
    <div
      css={`
        padding-top: 20px;
        text-align: center;
      `}
    >
      <HeroTitle>
        <span style={{ color: "#d44f4f" }}>Covid</span> 19
      </HeroTitle>
      <p>Project Starter for Gatsby.js</p>
    </div>
    <div
      css={`
        max-width: 576px;
        margin: 0 auto;
        padding: 0 16px;
        margin-top: 40px;
        code {
          background: #ececec;
          padding: 6px 14px;
          border-radius: 3px;
        }
        ul {
          padding: 0;
          list-style: none;
          li {
            padding: 6px 0;
          }
        }
        footer {
          border-top: 1px solid #ececec;
          margin-top: 60px;
          ul {
            display: flex;
            aling-items: center;
            justify-content: center;
            li {
              padding: 0 10px;
            }
            a {
              text-decoration: none;
            }
          }
        }
      `}
    >
      <div>
        <h3>Technologies</h3>
        <ul>
          <li>
            <span aria-label="test" role="img">
              ✅ Styled Components v5
            </span>
          </li>
          <li>
            <span aria-label="test" role="img">
              ✅ TypeScripts v3.7.5
            </span>
          </li>
          <li>
            <span aria-label="test" role="img">
              ✅ React Testing Library
            </span>
          </li>
          <li>
            <span aria-label="test" role="img">
              ✅ Framer Motion
            </span>
          </li>
          <li>
            <span aria-label="test" role="img">
              ✅ MDX
            </span>
          </li>
          <li>
            <span aria-label="test" role="img">
              ✅ Lodash
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3>How to</h3>
        <p>Clone the repo:</p>
        <code>git clone https://github.com/muhrusdi/gatsby-typescript</code>
        <p>Build</p>
        <code>yarn build</code>
        <p>Run</p>
        <code>npm run start // npm</code>
        <p />
        <code>yarn start // yarn</code>
      </div>
      <footer>
        <div>
          <ul>
            <li>
              <span>
                <a href="https://muhrusdi.com" target="_blank">
                  muhrusdi.com
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="https://github.com/muhrusdi/gatsby-typescript"
                  target="_blank"
                >
                  github
                </a>
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </Layout>
);

export default Home;
