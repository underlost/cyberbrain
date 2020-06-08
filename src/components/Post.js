import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Post = ({ data }) => {
  const post = data
  const [show, setShow] = useState(false)
  console.log(data)
  return (
    <>
      <div className="card mb-2" key={post.id}>
        <button className="card-header btn btn-link" onClick={() => setShow(true)}>
          {post.title}
        </button>
      </div>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>modal body</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

Post.defaultProps = {
  data: ``,
}

export default Post
