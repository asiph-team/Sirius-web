import themeConfig from "../../../configs/themeConfig"

const customizerReducer = (state = themeConfig, action) => {
  switch (action.type) {
    case "COLLAPSE_SIDEBAR":
      return { ...state, sidebarCollapsed: action.value }
    default:
      return state
  }
}

export default customizerReducer
