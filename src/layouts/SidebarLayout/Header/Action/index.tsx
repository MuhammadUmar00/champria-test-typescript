import { useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderAction() {

  const user =
  {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: 'Project Manager'
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box style={{margin:20}}>
     <Typography variant='h1' fontSize={45} color={'white'}>My Scrims</Typography>
     <Box display={'flex'} flexDirection={'row'} alignItems={'center'} >
       <div >
          <select style={{width:220, height:40, border:'2px solid white', color:'white', borderRadius:8, margin:'10px 0px', backgroundColor:'transparent'}}>
            <option>Select</option>
            <option>item 1</option>
            <option>item 2</option>
            <option>item 3</option>
            <option>item 4</option>
          </select>
       </div>
       <button style={{width:120, height:40, borderRadius:8, backgroundColor:"#7FB8F4", border:'none', margin:'0px 10px', color:'white'}}>
          Create Scrim
       </button>
     </Box>
    </Box>
  );
}

export default HeaderAction;
