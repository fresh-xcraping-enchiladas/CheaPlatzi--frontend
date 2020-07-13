const CleanText = (text) => {
  text = text.replace(/<[^>]*>?/g, '');
  text = text.trim()
  return text
}

export default CleanText