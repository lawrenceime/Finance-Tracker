'use client';
import { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, 
  Fab, Button, useMediaQuery, useTheme 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TransactionForm } from './TransactionForm';

interface Props {
  onSave: (data: any) => void;
}

export const AddTransactionDialog = ({ onSave }: Props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
        sx={{ display: { xs: 'none', md: 'flex' }, borderRadius: 2 }}
      >
        Add Transaction
      </Button>


      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', bottom: 16, right: 16, display: { md: 'none' } }}
      >
        <AddIcon />
      </Fab>

      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>New Transaction</DialogTitle>
        <DialogContent>
          <TransactionForm 
            onSave={onSave} 
            onClose={() => setOpen(false)} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};