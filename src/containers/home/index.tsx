/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import numeral from "numeral";
import Layout from "../layouts";
import { HeroTitle, Card, Section } from "./styled";
const Home: React.FC = () => {
  const [data, setData] = useState(null);
  const [dataId, setDataId] = useState(null);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then(res => res.json())
      .then(_data => {
        setData(_data);
      });

    fetch("https://covid19.mathdro.id/api/countries/Indonesia")
      .then(res => res.json())
      .then(_data => {
        setDataId(_data);
        console.log(_data);
      });
  }, []);

  const d = d => new Date(d);
  return (
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
        <p>Covid 19 Coronavirus Outbreak</p>
      </div>
      <div
        css={`
          max-width: 992px;
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
        <Section>
          <h3>Global Case</h3>
          <p>{d(data?.lastUpdate).toDateString()}</p>
          <div>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Confirmed</h4>
                  <span>{numeral(data?.confirmed?.value).format('0,0')}</span>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Deaths</h4>
                  <span>{numeral(data?.deaths?.value).format('0,0')}</span>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Recovered</h4>
                  <span>{numeral(data?.recovered?.value).format('0,0')}</span>
                </Card>
              </Col>
            </Row>
          </div>
        </Section>
        <Section>
          <h3>Indonesia</h3>
          <p>{d(dataId?.lastUpdate).toDateString()}</p>
          <div>
            <Row gutter={20}>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Confirmed</h4>
                  <span>{numeral(dataId?.confirmed?.value).format('0,0')}</span>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Deaths</h4>
                  <span>{numeral(dataId?.deaths?.value).format('0,0')}</span>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <h4>Recovered</h4>
                  <span>{numeral(dataId?.recovered?.value).format('0,0')}</span>
                </Card>
              </Col>
            </Row>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
