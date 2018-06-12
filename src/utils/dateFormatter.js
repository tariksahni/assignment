export const getFormatedDate = data => {
  const delimiter = '/'
  const start_date = data === null ? new Date() : new Date(data)
  let formatted_start_date = [
    start_date.getDate(),
    start_date.getMonth() + 1,
    start_date.getFullYear()
  ].join(delimiter)

  return formatted_start_date
}
