export default function HtmlText({ html }) {
  function createMarkup() {
    return { __html: html }
  }
  return <p dangerouslySetInnerHTML={createMarkup()} />
}
