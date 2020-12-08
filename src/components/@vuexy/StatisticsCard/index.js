import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Chart from 'react-apexcharts'

class StatisticsCards extends React.PureComponent {
  render() {
    const {
      className, hideChart, icon, iconRight, iconBg, stat, statTitle, options, series, type, height,
    } = this.props
    return (
      <Card>
        <CardBody
          className={`${className || 'stats-card-body'} d-flex ${
            !iconRight && !hideChart
              ? 'flex-column align-items-start'
              : iconRight
                ? 'justify-content-between flex-row-reverse align-items-center'
                : hideChart && !iconRight
                  ? 'justify-content-center flex-column text-center'
                  : null
          } ${!hideChart ? 'pb-0' : 'pb-2'} pt-2`}
        >
          <div className="icon-section">
            <div
              className={`avatar avatar-stats p-50 m-0 ${
                iconBg
                  ? `bg-rgba-${iconBg}`
                  : 'bg-rgba-primary'
              }`}
            >
              <div className="avatar-content">{icon}</div>
            </div>
          </div>
          <div className="title-section">
            <h2 className="text-bold-600 mt-1 mb-25">{stat}</h2>
            <p className="mb-0">{statTitle}</p>
          </div>
        </CardBody>
        {!hideChart && (
          <Chart
            options={options}
            series={series}
            type={type}
            height={height || 100}
          />
        )}
      </Card>
    )
  }
}
export default StatisticsCards
