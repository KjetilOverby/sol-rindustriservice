import React from 'react';
import { Grid, makeStyles, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
     backgroundContainer: {
         background: 'linear-gradient(rgba(4, 70, 182,.7), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1474674556023-efef886fa147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80")',
         height: '65vh',
         backgroundSize: 'cover',
         backgroundPosition: '50% 80%',
         backgroundAttachment: 'fixed'
     },
     imageHeader1: {
         fontSize: '5rem',
         color: 'white',
         fontWeight: '100',
         margin: '5rem 0 0 58rem'
     },
     imageHeader2: {
         fontSize: '8rem',
         color: theme.palette.tertiary.main,
         fontWeight: 'bold',
         margin: '-4rem 0 0 15rem'
     },
     container: {
         minWidth: '80vw'
     },
     box: {
         height: '26rem',
         width: '35rem',
         background: theme.palette.secondary.main,
         marginTop: '10rem',
         padding: '1rem',
         [theme.breakpoints.between(1900, 1990)]: {

         }
     },
     headerBox: {
         margin: '2rem 0 3rem 2rem'
     },
     li: {
         color: theme.palette.primary.main,
         fontSize: '1.2rem'
     },
     transparentBoxContainer: {
        width: '30rem',
        marginTop: '10rem'
     },
     headerTransparentBox: {
        color: theme.palette.tertiary.main,
        fontSize: '3rem',
        fontWeight: 'bold',
        
     }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid className={classes.backgroundContainer} container>
                <Grid item>
                    <Typography className={classes.imageHeader1}>Industriservice</Typography>
                    <Typography className={classes.imageHeader2}>Fagfolk med erfaring</Typography>
                </Grid>
            </Grid>

            <Container className={classes.container}>
<Grid justify='space-around' container>
            

                <Grid item>
                    <Grid className={classes.transparentBoxContainer} container>
                        <Typography className={classes.headerTransparentBox}>Om oss</Typography>
                        <Typography>Vi er et mekanisk verksted som holder til på Flisa. Våre nye lokaler rommer det et verksted bør ha. Vi er din naturlige diskusjonspartner der du har problemer med produksjonsutsyr eller ved montasje. Vi har fagfolk som utfører sveising, dreiing, fresing, produksjon, reparasjon og montasje. Vi leverer og utvikler produkter til både private- og industrielle virksomheter. Stort som smått. Ta turen innom vårt utsalg av blant annet jern, festemateriell, lagere, kjeder og kjedehjul!</Typography>
                    </Grid>
                </Grid>


                <Grid className={classes.box} item>
                     <Typography className={classes.headerBox} variant='h2' color='primary'>Vi utfører</Typography>
                     <ul>
                         <li className={classes.li}>Service og reparasjon av produksjonsutstyr og maskiner</li>
                         <li className={classes.li}>Trapper, rekkverk og o.l. skreddersydd etter dine ønsker</li>
                         <li className={classes.li}>Fagverk og innstøpningsdetaljer</li>
                         <li className={classes.li}>Sveising av stål, rustfritt og aluminium</li>
                         <li className={classes.li}>Serviceoppdrag på ditt produksjonsutstyr</li>
                         <li className={classes.li}>Montering av stål, veggelementer, tak og mekanisk utstyr</li>
                         <li className={classes.li}>Spesialtilpasning av produksjonsutstyr</li>
                     </ul>
                </Grid>
              
            </Grid>
            </Container>
        </div>
    )
}

export default Home
