import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 7, 0, 3)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);
`
);


function Logo() {


  return (
    <LogoWrapper to="/overview">
      <LogoSignWrapper>
        <img src='https://test-champria.herokuapp.com/icons/logo-text.svg' />
      </LogoSignWrapper>
    </LogoWrapper>
  );
}

export default Logo;
