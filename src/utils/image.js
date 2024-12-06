export const getImagePath = (img_name, path) => {
  return new URL(`/src/assets/${path}/${img_name}`,
    import.meta.url).href
}
