import React from 'react';
import { Grid, Card, CardContent, Typography, CardHeader, Box, Rating } from '@mui/material';
import em1 from '../assets/em1.png'
import em2 from '../assets/em2.png'
import em3 from '../assets/em3.png'
import em4 from '../assets/em4.png'
import em5 from '../assets/em5.png'


const InfoCandidates = () => {
  const cardsData = [
    { id: 10, heading: 'New Applied', color: '#FFA600',  },
    { id: 20,  heading: 'Shortlisted', color: '#56CCF2',  },
    { id: 30, heading: 'Interview', color: '#FF5630', },
    { id: 40,  heading: 'Test', color: '#377DFF', },
    { id: 50, heading: 'Hired', color: '#38CB89',  },
  ];
   const newApplicants=[
    { id: 1, name: 'Bruce Wayne', role:'FrontEnd Dev',AppliedDate:'29-7-2023',rating:'4'},  
    { id: 2, name: 'Ethan Hunt', role:'Backend Dev',AppliedDate:'29-7-2023',rating:'5'},
 ]
   const shortlist=[
    { id: 1, name: 'Ragnar Lothbrok', role:'UX Dev',AppliedDate:'29-7-2023',rating:'4'},  
   ]
   //for randomly selecting images
   const randomIndex = Math.floor(Math.random() * newApplicants.length);
   const randomImage = [em2, em3, em5][randomIndex];
   
  return (
    <Grid container spacing={2} ml={1} mt={1}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} ml={1}>
        <Card sx={{ height: 500,width:230,overflowY: 'auto',}}>
        <CardHeader
              component={Typography}
              title={
                <>
                  {cardsData[0].heading}
                  <span style={{ background: '#efefef', padding: '2px 4px', borderRadius: 4,fontWeight:600}}>{cardsData[0].id}</span>
                </>
              }
              titleTypographyProps={{fontSize:16,display:'flex',justifyContent:'space-between',color:'#333',fontWeight:500}}
              sx={{
                border: '1px solid #efefef',
                marginInline: 1,
                mt: 1,
                borderTopColor: cardsData[0].color,
                borderTopWidth: 3,
                height: 4,
                borderRadius:1
              }}
            />
          <CardContent>
        
            {newApplicants.map((card)=>(
            <Box key={card.id} sx={{backgroundColor:'#fafbfc',borderRadius:2,mb:1,p:1,}}>
             <Box display='flex' flexDirection='row' mb={0.6}>
            <Box display='flex' flexDirection='column' mt={0.5} backgroundColor='#d5f7e5' height={40} width={40} justifyContent='center' borderRadius={5} alignItems='center'>
            <Box
              component="img"
              src={randomImage}
              alt=""
              sx={{ width:23, borderRadius: 4,height:23,alignSelf:'center'}}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',ml:1}}>
            <Typography variant='body1' fontWeight={500} color='#333' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{card.name} </Typography>
            <Typography variant='caption' color='#6F767E'>{card.role} </Typography>
            </Box>
             </Box>
             <hr sx={{height:10,}} color='#f0f0f0' />
             <Box display='flex' justifyContent='space-between' mt={1}>
             <Rating name="size-small" defaultValue={card.rating} precision={1} readOnly size="small" />          
                <Typography variant='caption' ml={0.5} fontSize={11}>{card.AppliedDate}</Typography>

             </Box>

            </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} ml={3}>
      <Card sx={{ height: 500,width:230 ,overflowY: 'auto'}}>
      <CardHeader
              component={Typography}
              title={
                <>
                  {cardsData[1].heading}
                  <span style={{ background: '#efefef', padding: '2px 4px', borderRadius: 4,fontWeight:600 }}>{cardsData[1].id}</span>
                </>
              }
              titleTypographyProps={{fontSize:16,display:'flex',justifyContent:'space-between',color:'#333',fontWeight:500}}
              sx={{
                border: '1px solid #efefef',
                marginInline: 1,
                mt: 1,
                borderTopColor: cardsData[1].color,
                borderTopWidth: 3,
                height: 4,
                borderRadius:1
              }}
            />
          <CardContent>
          {shortlist.map((card)=>(
            <Box key={card.id} sx={{backgroundColor:'#fafbfc',borderRadius:2,mb:1,p:1}}>
             <Box display='flex' flexDirection='row' mb={0.6}>
            <Box display='flex' flexDirection='column' mt={0.5} backgroundColor='#d5f7e5' height={40} width={40} justifyContent='center' borderRadius={5} alignItems='center'>
            <Box
              component="img"
              src={randomImage}
              alt=""
              sx={{ width:23, borderRadius: 4,height:23,alignSelf:'center'}}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',ml:1}}>
            <Typography variant='body1' fontWeight={500} color='#333' sx={{ overflow: 'hidden', textOverflow: 'revert', whiteSpace: 'nowrap' }}>{card.name} </Typography>
            <Typography variant='caption' color='#6F767E'>{card.role} </Typography>
            </Box>
             </Box>
             <hr sx={{height:10,}} color='#f0f0f0' />
             <Box display='flex' justifyContent='space-between' mt={1}>
             <Rating name="size-small" defaultValue={card.rating} precision={1} readOnly size="small" />          
                <Typography variant='caption' ml={0.5} fontSize={11}>{card.AppliedDate}</Typography>

             </Box>

            </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} ml={3}>
      <Card sx={{ height: 500,width:230 ,overflowY: 'auto'}}>
      <CardHeader
              component={Typography}
              title={
                <>
                  {cardsData[2].heading}
                  <span style={{ background: '#efefef', padding: '2px 4px', borderRadius: 4,fontWeight:600 }}>{cardsData[2].id}</span>
                </>
              }
              titleTypographyProps={{fontSize:16,display:'flex',justifyContent:'space-between',color:'#333',fontWeight:500}}
              sx={{
                border: '1px solid #efefef',
                marginInline: 1,
                mt: 1,
                borderTopColor: cardsData[2].color,
                borderTopWidth: 3,
                height: 4,
                borderRadius:1
              }}
            />
          <CardContent>
          {newApplicants.map((card)=>(
            <Box key={card.id} sx={{backgroundColor:'#fafbfc',borderRadius:2,mb:1,p:1}}>
             <Box display='flex' flexDirection='row' mb={0.6}>
            <Box display='flex' flexDirection='column' mt={0.5} backgroundColor='#d5f7e5' height={40} width={40} justifyContent='center' borderRadius={5} alignItems='center'>
            <Box
              component="img"
              src={randomImage}
              alt=""
              sx={{ width:23, borderRadius: 4,height:23,alignSelf:'center'}}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',ml:1}}>
            <Typography variant='body1' fontWeight={500} color='#333' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{card.name} </Typography>
            <Typography variant='caption' color='#6F767E'>{card.role} </Typography>
            </Box>
             </Box>
             <hr sx={{height:10,}} color='#f0f0f0' />
             <Box display='flex' justifyContent='space-between' mt={1}>
             <Rating name="size-small" defaultValue={card.rating} precision={1} readOnly size="small" />          
                <Typography variant='caption' ml={0.5} fontSize={11}>{card.AppliedDate}</Typography>

             </Box>

            </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} ml={3}>
      <Card sx={{ height: 500,width:230,overflowY: 'auto' }}>
      <CardHeader
              component={Typography}
              title={
                <>
                  {cardsData[3].heading}
                  <span style={{ background: '#efefef', padding: '2px 4px', borderRadius: 4,fontWeight:600 }}>{cardsData[3].id}</span>
                </>
              }
              titleTypographyProps={{fontSize:16,display:'flex',justifyContent:'space-between',color:'#333',fontWeight:500}}
              sx={{
                border: '1px solid #efefef',
                marginInline: 1,
                mt: 1,
                borderTopColor: cardsData[3].color,
                borderTopWidth: 3,
                height: 4,
                borderRadius:1
              }}
            />
          <CardContent>
          {newApplicants.map((card)=>(
            <Box key={card.id} sx={{backgroundColor:'#fafbfc',borderRadius:2,mb:1,p:1}}>
             <Box display='flex' flexDirection='row' mb={0.6}>
            <Box display='flex' flexDirection='column' mt={0.5} backgroundColor='#d5f7e5' height={40} width={40} justifyContent='center' borderRadius={5} alignItems='center'>
            <Box
              component="img"
              src={randomImage}
              alt=""
              sx={{ width:23, borderRadius: 4,height:23,alignSelf:'center'}}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',ml:1}}>
            <Typography variant='body1' fontWeight={500} color='#333' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{card.name} </Typography>
            <Typography variant='caption' color='#6F767E'>{card.role} </Typography>
            </Box>
             </Box>
             <hr sx={{height:10,}} color='#f0f0f0' />
             <Box display='flex' justifyContent='space-between' mt={1}>
             <Rating name="size-small" defaultValue={card.rating} precision={1} readOnly size="small" />          
                <Typography variant='caption' ml={0.5} fontSize={11}>{card.AppliedDate}</Typography>

             </Box>

            </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} ml={3}>
      <Card sx={{ height: 500,width:230 ,overflowY: 'auto' }}>
      <CardHeader
              component={Typography}
              title={
                <>
                  {cardsData[4].heading}
                  <span style={{ background: '#efefef', padding: '2px 4px', borderRadius: 4 ,fontWeight:600}}>{cardsData[4].id}</span>
                </>
              }
              titleTypographyProps={{fontSize:16,display:'flex',justifyContent:'space-between',color:'#333',fontWeight:500}}
              sx={{
                border: '1px solid #efefef',
                marginInline: 1,
                mt: 1,
                borderTopColor: cardsData[4].color,
                borderTopWidth: 3,
                height: 4,
                borderRadius:1
              }}
            />
          <CardContent>
          {newApplicants.map((card)=>(
            <Box key={card.id} sx={{backgroundColor:'#fafbfc',borderRadius:2,mb:1,p:1}}>
             <Box display='flex' flexDirection='row' mb={0.6}>
            <Box display='flex' flexDirection='column' mt={0.5} backgroundColor='#d5f7e5' height={40} width={40} justifyContent='center' borderRadius={5} alignItems='center'>
            <Box
              component="img"
              src={randomImage}
              alt=""
              sx={{ width:23, borderRadius: 4,height:23,alignSelf:'center'}}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',ml:1}}>
            <Typography variant='body1' fontWeight={500} color='#333' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{card.name} </Typography>
            <Typography variant='caption' color='#6F767E'>{card.role} </Typography>
            </Box>
             </Box>
             <hr sx={{height:10,}} color='#f0f0f0' />
             <Box display='flex' justifyContent='space-between' mt={1}>
             <Rating name="size-small" defaultValue={card.rating} precision={1} readOnly size="small" />          
                <Typography variant='caption' ml={0.5} fontSize={11}>{card.AppliedDate}</Typography>

             </Box>

            </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoCandidates;
