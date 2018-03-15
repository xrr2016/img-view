// @flow
import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../container/HelloAsyncButton'
import MessageAsync from '../container/MessageAsync'

const title = 'Async Hello Page'

/* eslint-disable */
export default () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title }
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <MessageAsync />
        <HelloAsyncButton />
      </div>
    </div>
  </div>
)
/* eslint-disable */
