import * as React from 'react';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 220,
  borderRadius: '5px',
  border: '1px solid #979c97',
  color: '#979c97',
  background: 'white'
};

export default function ContextMenu({ openContext, setOpenContext }) {

  const handleClose = () => setOpenContext(false);

  return (
    <div>
      <Modal
        open={openContext}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ background: 'transparent' }}
      >
        <Paper sx={style}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <ModeEditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit Column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Close</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Modal>
    </div>
  );
}
