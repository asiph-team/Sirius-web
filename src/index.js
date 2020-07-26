import React, { Suspense, lazy } from "react"
import { LoadingSpinner } from "./components/@vuexy/Spinner"
import { Layout } from "./utility/context/Layout"
import ReactDOM from "react-dom"
import "./index.scss"

const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <Suspense fallback={<LoadingSpinner />}>
    <Layout>
      <LazyApp />
    </Layout>
  </Suspense>,
  document.getElementById("root")
)