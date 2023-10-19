'use client';

import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return (
    <Button
      variant="contained"
      onClick={() => {
        alert('Hello world');
      }}
    >
      Hello world
    </Button>
  );
}
