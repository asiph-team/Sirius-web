import React, { Suspense, lazy } from "react"
import { Provider } from "react-redux"
import { store } from "./redux/storeConfig/store"
import { LoadingSpinner } from "./components/@vuexy/Spinner"
import { Layout } from "./utility/context/Layout"
import ReactDOM from "react-dom"
import "./index.scss"

const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<LoadingSpinner />}>
      <Layout>
        <LazyApp />
      </Layout>
    </Suspense>
  </Provider>,
  document.getElementById("root")
)