const push = (comp, path) => {
  if (comp.props.history.location.pathname != path) {
    comp.props.history.push(path)
  }
}

const back = (comp) => {
  comp.props.history.goBack()
}

export default {
  push,
  back
}