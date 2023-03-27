import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface propsModal {
  text: string;
  visible: boolean;
  _id?: string;
  handleClose: () => void;
  deleteEvent: (_id: string) => void;
}

export function AlertDialog( { text, visible, _id, handleClose, deleteEvent }: propsModal) {
  if(!visible || !_id) {
    return null;
  }

  return (
    <>
      <Dialog
        open={visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '12px 0px',
            }}
            id="alert-dialog-description"
          >
            { text }
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '24px',
          }}
        >
          <Button
            onClick={() => deleteEvent(_id)}
            sx={{
              color: '#fff',
              background: '#FF1212',
              padding: '12px',
              '&:hover': {
                background: '#ff121296',
              },
            }}
          >Excluir</Button>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              color: '#fff',
              background: '#333333',
              padding: '12px',
              '&:hover': {
                background: '#333333a0',
              },
            }}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
