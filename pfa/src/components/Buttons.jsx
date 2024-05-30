import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import PrintIcon from '@mui/icons-material/Print'
import FileIcon from '@mui/icons-material/Mail'
import UploadIcon from '@mui/icons-material/PictureAsPdf'

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{background: "#3E3E52"}} endIcon={<PrintIcon />}>
        Imprimer
      </Button>
      <Button variant="contained" style={{background: "#3E3E52"}} endIcon={<FileIcon />}>
        Envoyer
      </Button>
      <Button variant="contained" style={{background: "#3E3E52"}} endIcon={<UploadIcon />}>
        Télécharger
      </Button>

    </Stack>
  );
}
