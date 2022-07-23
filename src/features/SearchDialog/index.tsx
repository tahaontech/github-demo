import React, { useState } from 'react'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link } from "react-router-dom";

type Props = {
  open: boolean,
  handleClose: any
}

const DialogSearch = ({ open, handleClose} : Props) => {
  const [field, setField] = useState("")
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To find a github user in our website, please enter username here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            value={field}
            onChange={ (e) => setField(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button><Link to={`/user/${field}`}>Enter</Link></Button>
        </DialogActions>
      </Dialog>
  )
}

export default DialogSearch