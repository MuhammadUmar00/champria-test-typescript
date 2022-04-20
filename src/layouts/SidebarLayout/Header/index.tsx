import { useContext } from 'react';

import { Box, Hidden, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SidebarContext } from 'src/contexts/SidebarContext';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderAction from './Action';
import HeaderMenu from './Menu';

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: 222px;
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        background: linear-gradient(180deg,#5225a7,#130d4a);
        box-shadow: ${theme.header.boxShadow};
        justify-content: flex-end;
        width: 100%;
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper >
      <Box display="flex" justifyContent={'space-between'} alignItems="center">
      <Box display="flex" justifyContent={'flex-start'} alignItems="center" style={{ marginTop: 10 }}>
        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <img src='https://test-champria.herokuapp.com/icons/menu-burger.svg' /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box>
      <Box display="flex" justifyContent={'flex-end'} alignItems="center" style={{ marginTop: 10 }}>
        <HeaderButtons />
        <HeaderUserbox />
      </Box>
      </Box>
      <HeaderAction />
    </HeaderWrapper>
  );
}

export default Header;
