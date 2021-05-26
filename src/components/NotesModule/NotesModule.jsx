import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NotesModule = () => {
  const [show, setShow] = useState(true);
  const [notesBody, setnotesBody] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.preventDefault();
    setnotesBody(e.target.value);
  }



  return (
    <>
      <Button className="resume_btn" variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="notesHeader" closeButton>
          <Modal.Title>Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <textarea type="textarea" rows="10" cols="50" name="notesBody" value={notesBody} onChange={handleChange} />
          </form>
        </Modal.Body>
        <Modal.Footer className="notesFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="resume_btn" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default NotesModule;