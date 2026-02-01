import { Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" className="bg-blue-600 shadow-md" elevation={0}>
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6" component="h1" className="font-semibold">
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
