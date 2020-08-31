export const siteTrafficSeries = [
  {
    name: 'Empresas',
    data: [100, 125, 200, 225, 230, 250],
  },
]

export const siteTraffic = {
  chart: {
    id: 'traffic',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 4,
      opacity: 0.1,
    },
  },
  grid: {
    show: false,
  },
  colors: ['#7367F0'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: ['#A9A2F6'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: { show: false },
  },
}

export const activeUsers = {
  chart: {
    id: 'activeUsers',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 4,
      opacity: 0.1,
    },
  },
  grid: {
    show: false,
  },
  colors: ['#28C76F'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: ['#55DD92'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: { show: false },
  },
}

export const activeUsersSeries = [
  {
    name: 'Trabajadores',
    data: [750, 900, 1000, 1100, 1150, 1200, 1250],
  },
]

export const newsLetter = {
  chart: {
    id: 'newsletter',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 4,
      opacity: 0.1,
    },
  },
  grid: {
    show: false,
  },
  colors: ['#FF9F43'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: ['#ffc085'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: { show: false },
  },
}

export const newsLetterSeries = [
  {
    name: 'Actividades',
    data: [365, 390, 400, 415, 470, 475],
  },
]
