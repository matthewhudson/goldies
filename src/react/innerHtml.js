// https://github.com/peeke/list-it/blob/master/util/innerHtml.js
const innerHtml = value => ({ dangerouslySetInnerHTML: { __html: value } })
export default innerHtml
