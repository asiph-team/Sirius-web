import React from 'react'
import Chart from 'react-apexcharts'
import { Card, CardBody } from 'reactstrap'

const Risks = (props) => {
  const { performance: { high, middle, low } } = props
  return (
    <Card>
      <CardBody>
        <h4 className="primary font-weight-bold">Riesgo de Actividades</h4>
        <Chart
          options={{
            chart: {
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: true,
              formatter: (val) => `${Math.round(val)}%`,
            },
            legend: { show: false },
            labels: ['Aceptable', 'Alerta', 'Crítico'],
            colors: ['#EF476F', '#FFD166', '#06D6A0'],
          }}
          series={[high, middle, low]}
          type="donut"
          height={210}
        />
        <div className="chart-info d-flex justify-content-around mb-1 mt-2">
          <div className="series-info d-flex align-items-center">
            <div
              className="bg-success"
              style={{
                height: '10px',
                width: '10px',
                display: 'inline-block',
                margin: '0 5px',
              }}
            />
            <span className="text-bold-600 mx-50">Aceptable</span>
          </div>
          <div className="series-info d-flex align-items-center">
            <div
              className="bg-warning"
              style={{
                height: '10px',
                width: '10px',
                display: 'inline-block',
                margin: '0 5px',
              }}
            />
            <span className="text-bold-600 mx-50">Alerta</span>
          </div>
          <div className="series-info d-flex align-items-center">
            <div
              className="bg-danger"
              style={{
                height: '10px',
                width: '10px',
                display: 'inline-block',
                margin: '0 5px',
              }}
            />
            <span className="text-bold-600 mx-50">Crítico</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Risks
