export const parseToFilterUrl = ({ url, filter }) => {
  return url.split('/upload/').join(`/upload/${filter}/`)
}
