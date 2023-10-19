'use client';
import * as React from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function Article() {
  const [open, setOpen] = React.useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus
      dicta asperiores id illo deserunt mollitia reprehenderit numquam tempore
      dolorem natus et ab, suscipit laborum, sint sequi ipsam. Consequatur,
      ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
      doloribus dicta asperiores id illo deserunt mollitia reprehenderit numquam
      tempore dolorem natus et ab, suscipit laborum, sint sequi ipsam.
      Consequatur, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Iure doloribus dicta asperiores id illo deserunt mollitia
      reprehenderit numquam tempore dolorem natus et ab, suscipit laborum, sint
      sequi ipsam. Consequatur, ipsum?
      <br />
      <ButtonGroup variant="outlined" style={{ marginTop: '100px' }}>
        <Button onClick={() => setOpen(true)}>Create</Button>
        <Button>Update</Button>
      </ButtonGroup>
      <Button variant="contained">Delete</Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Create</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

export default Article;
