import _includes from 'lodash/includes'

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ReactDOMServer from 'react-dom/server'
import dynamic from 'next/dynamic'

import MarkdownPreview from '../Markdown'
import UploadModal from '~/components/Shared/Upload'
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const MarkdownEditor = ({ value, onChange, options, placeHolder, disabled }) => {

    return (
      <>
        <SimpleMDE
          value={value} // eslint-disable-line
          onChange={onChange}
          options={options !== null ? options : {
            // previewRender(plainText) {
            //   return ReactDOMServer.renderToString(<MarkdownPreview markdown={plainText} />)
            // },
            toolbar: [
              'bold',
              'italic',
              'heading',
              'quote',
              'unordered-list',
              'ordered-list',
              'link',
              {
                name: 'image',
                // action: (cm) => handleUploadImage(cm),
                className: 'fa fa-picture-o',
                title: 'Image Custome',
              },
              'preview',
              'side-by-side',
              'fullscreen',
              'guide',
            ],
          }}
          // onMouseDown={() => (optionToolbar ? this.showToolbar(true) : '')}
          // onMouseLeave={() => (optionToolbar ? this.showToolbar(false) : '')}
          placeholder={placeHolder}
        />

        {/* <UploadModal
          visible={this.state.visibleUploadModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          handlePreview={this.handlePreviewLogo}
        /> */}
      </>
    )
}

export default MarkdownEditor;
