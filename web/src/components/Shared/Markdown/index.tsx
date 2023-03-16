import React from 'react'
import PropTypes from 'prop-types'
import { createRenderer } from '../../../libs/markdown';

const Markdown = ({ markdown }) => {
  const md = createRenderer();
  const rawHtml = md.render(markdown)

  return (
  // eslint-disable-next-line react/no-danger
    <div className="md-contents" dangerouslySetInnerHTML={{ __html: rawHtml }} />
  )
}

Markdown.propTypes = {
  markdown: PropTypes.string,
}

Markdown.defaultProps = {
  markdown: '',
}

export default Markdown
