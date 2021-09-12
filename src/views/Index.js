import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col xl="4">
          <Card className="bg-gradient-default shadow trading-viewe">

            <TradingViewWidget
                symbol="BTC"
                theme={Themes.DARK}
                locale="en"
                autosize
            />
            </Card>
        </Col>
          <Col xl="4">
            <Card className="bg-gradient-default shadow trading-viewe">
              <TradingViewWidget
                  symbol="ETH"
                  theme={Themes.DARK}
                  locale="en"
                  autosize
              />
            </Card>
          </Col>
          <Col xl="4">
            <Card className="bg-gradient-default shadow trading-viewe">
              <TradingViewWidget
                  symbol="LTC"
                  theme={Themes.DARK}
                  locale="en"
                  autosize
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
