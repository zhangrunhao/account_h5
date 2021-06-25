const push = (comp, path) => {
  if (comp.props.history.location.pathname !== path) {
    comp.props.history.push(path)
  }
}

const back = (comp) => {
  comp.props.history.goBack()
}

const getParam = (comp, param) => {
  return comp.props.match.params[param]
}

export default {
  getParam,
  push,
  back
}
