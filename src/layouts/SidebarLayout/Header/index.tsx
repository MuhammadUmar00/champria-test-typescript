import { useContext } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SidebarContext } from 'src/contexts/SidebarContext';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderAction from './Action';

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
      <Box display="flex" justifyContent={'flex-end'} alignItems="center" style={{marginTop:10}}>
        <HeaderButtons />
        <HeaderUserbox />
      </Box>
      <HeaderAction />
    </HeaderWrapper>
  );
}

export default Header;
