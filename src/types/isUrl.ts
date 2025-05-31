export const isUrl = (str: string): boolean => {
  const a = document.createElement('a')
  a.href = str
  return a.host && a.host !== window.location.host
}
