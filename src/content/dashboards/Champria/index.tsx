import { Helmet } from 'react-helmet-async';
import { Grid, Container, Box, Typography } from '@mui/material';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';
import React, { ReactElement, ReactNode } from 'react';

const DropDownWrapper = styled('div')(
  ({ theme }) => `
        border: 2px solid white; 
        border-radius: 8px;
        display: flex;
        flexDirection: row; 
        alignItems: center;
        margin-left:10px;
        `
);

const ScrimReviewWrapper = styled(Box)(
  ({ theme }) => `
        background-color: #282828;
        margin-top: 10px;
        `
);

const ScrimReviewLeftActionWrapper = styled(Box)(
  ({ theme }) => `
  background-color: #5225A7;
  height: 60px; 
  width: 90px;
  `
);

function Dashboard() {
  const [data, setData] = React.useState([1, 2, 3, 4]);

  const renderReviews = (): ReactElement => {  
    return (
      <ScrimReviewWrapper display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} >
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'space-between'} style={{ padding: 5 }}>
          <Typography variant={'h6'} color={"white"}>PandaChan vs DDRS</Typography>
          <Typography variant={'body1'} fontSize={10} color={"gray"}>Rocket League | NA-WEST</Typography>
          <Typography variant={'body1'} fontSize={10} color={"gray"}>Nov 11 | 5:00PM EST | 1 Hour</Typography>
        </Box >
  
        <ScrimReviewLeftActionWrapper display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
          <div>
            <img src='https://test-champria.herokuapp.com/icons/hand-up.svg' />
          </div>
          <div>
            <img src='https://test-champria.herokuapp.com/icons/hand-down.svg' />
          </div>
          <div>
            <img src='https://test-champria.herokuapp.com/icons/upload.svg' />
          </div>
        </ScrimReviewLeftActionWrapper>
      </ScrimReviewWrapper >
    )
  }
  return (
    <>
      <Helmet>
        <title>https://test-champria.herokuapp.com/</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant={'h4'} color={'white'}>Scrim Review</Typography>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                <DropDownWrapper>
                  <img src='https://test-champria.herokuapp.com/icons/arrow-down.svg' />
                </DropDownWrapper>
                <DropDownWrapper>
                  <img src='https://test-champria.herokuapp.com/icons/arrow-down.svg' style={{ transform: 'rotate(180deg)' }} />
                </DropDownWrapper>
              </Box>
            </Box>

            {data.map(renderReviews)}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
