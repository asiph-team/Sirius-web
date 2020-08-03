import React from 'react'
import { Row, Col } from 'reactstrap'
import StatisticsCard from '../../components/@vuexy/StatisticsCard'
import {Can} from '../../components/custom'
import {
    siteTraffic,
    siteTrafficSeries,
    activeUsers,
    activeUsersSeries,
    newsLetter,
    newsLetterSeries
  } from '../../@fake-db/_dashboard/superadmin'
import * as Icon from 'react-feather'

const DashboardSuperAdmin = () => (
  <Can rule="dashboard:superadmin">
    <Row>
      <Col lg="4" md="6" sm="12">
        <StatisticsCard
          iconRight
          icon={<Icon.Shield className="primary" size={22} />}
          stat="250"
          statTitle="Empresas"
          options={siteTraffic}
          series={siteTrafficSeries}
          type="line"
        />
      </Col>
      <Col lg="4" md="6" sm="12">
        <StatisticsCard
          iconRight
          icon={<Icon.UserCheck className="success" size={22} />}
          iconBg="success"
          stat="1250"
          statTitle="Trabajadores"
          options={activeUsers}
          series={activeUsersSeries}
          type="line"
        />
      </Col>
      <Col lg="4" md="6" sm="12">
        <StatisticsCard
          iconRight
          icon={<Icon.Activity className="warning" size={22} />}
          iconBg="warning"
          stat="28.7k"
          statTitle="Actividades"
          options={newsLetter}
          series={newsLetterSeries}
          type="line"
        />
      </Col>
    </Row>
  </Can>
)

export default DashboardSuperAdmin