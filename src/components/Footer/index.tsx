import { Box, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        background-color: #282828;
        position: fixed;
        right: 0;
        bottom:0;
        z-index: 25;
        justify-content: space-between;
        width: 100%;
        height: 120px;
        border-radius: 0;
        // margin: ${theme.spacing(3)} 0;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          display={ 'flex' }
          margin={'20px 0px'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          >
          <Box
            py={3}
            display={{ xs: 'block', md: 'flex' }}
            alignItems="center"
            textAlign={{ xs: 'center', md: 'left' }}
            justifyContent="space-between"
          >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'} width={420}>
              <img src='https://test-champria.herokuapp.com/icons/logo.svg' />
              <Typography variant="body1" color={'white'}>
                &copy; 2022 champria.gg
              </Typography>
              <Typography variant="body1" color={'white'}>
                Terms of service
              </Typography>
              <Typography variant="body1" color={'white'}>
                privacy policy
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'} width={320}>
              <Typography variant="body1" color={'white'}>
                Connect with us
              </Typography>
              <img src='https://test-champria.herokuapp.com/icons/twitch.svg' />
              <img src='https://test-champria.herokuapp.com/icons/facebook.svg' />
              <img src='https://test-champria.herokuapp.com/icons/twitter.svg' />
              <img src='https://test-champria.herokuapp.com/icons/instagram.svg' />
              <img src='https://test-champria.herokuapp.com/icons/linked-in.svg' />
            </Box>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
