import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {process.env.REACT_APP_COMPANY_NAME} - Recruitment Task
        </Typography>
        <Typography variant="h6" noWrap component="div" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
