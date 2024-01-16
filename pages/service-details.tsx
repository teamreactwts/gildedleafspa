import Wrapper from '@/layout/wrapper/Wrapper'
import styled from '@emotion/styled'
import { Grid, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

export const ServiceDetailsWrapper=styled(Box)`
    
`
export const benifitsList=[
    {
        name:"Lorem ipsum dolor sit amet consectetur. Imperdiet nec.",
    },
    {
        name:"Pellentesque nec enim sagittis nullam purus at.",
    },
    {
        name:"Lorem ipsum dolor sit amet consectetur.",
    },
    {
        name:"Imperdiet lacus dis pellentesque nunc tincidunt",
    },
]

function ServiceDetails() {
  return (
    <Wrapper>
   <ServiceDetailsWrapper>
    <Stack direction="row" alignItems="center" className="service_details_top">
        <Box className="service_imgSection">
            <figure>
                <Image src={''} alt={''} width={} height={}/>
            </figure>
        </Box>
        <Box className="benifits_use">
            <Grid container spacing={3.8}>
                <Grid item lg={6} xs={12}>
                    <Box className="list_wrap">
                        <Typography variant='h4'>Benefits:</Typography>
                        <List disablePadding>
                            {
                                benifitsList.map((item)=>(
                                    <ListItem disablePadding>{item.name}</ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Stack>
   </ServiceDetailsWrapper>
   </Wrapper>
  )
}

export default ServiceDetails