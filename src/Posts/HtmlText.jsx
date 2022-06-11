export default function HtmlText({ html }) {
  return <p dangerouslySetInnerHTML={{ __html: html }} /> // вставляю html dangerouslySetInnerHTML соответствует innerHTML
}
