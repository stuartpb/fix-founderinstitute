function assignmentTextileFromHTML(html) {
  return html.replace(
    /^(\d+\.) \(([^)]*)\)(.*?)(?:<hr>)?$/mg,
    "h2. $1 $2\n\nbq.$3")
}
