export default function getNavigatorParam(props, param) {
  if (!props.route) return null
  if (!props.route.params) return null
  return props.route.params[param] || null
}
