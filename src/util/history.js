const push = (comp, path) => {
  if (comp.props.history.location.pathname !== path) {
    comp.props.history.push(path);
  }
};

const back = (comp) => {
  comp.props.history.goBack();
};

const getParam = (comp, param) => {
  console.log(comp.props)
  return comp.props.match.params[param];
};

const getPath = (comp) => {
  return comp.props.match.path
}

export default {
  getPath,
  getParam,
  push,
  back,
};
