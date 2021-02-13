// Display JSON data in readable format
const PrettyPrintJson = data => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
