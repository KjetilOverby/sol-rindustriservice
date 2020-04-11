import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import industriLogo from '../images/solørindustriservicelogo.png'
const useStyles = makeStyles(theme => ({


  /* toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '7em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '7.5em'
    }
  }, */
  header: {
    height: '5rem'
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab
  },
  drawerIcon: {
    height: '50px',
    width: '50px;',
    color: 'gray'
  },
  logo: {
    height: '3rem',
    marginLeft: '15rem'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'transparent'
    }
  },
  drawer: {
    background: theme.palette.primary.main,
    color: 'gray',
    width: '12rem'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'gray'
  }
}));

const Header = props => {
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0)

  const changeActiveTab = (e, value) => {
     setActiveTab(value)
  }

  const tabs = (
    <Tabs
     value={activeTab} 
     className={classes.tabContainer} 
     onChange={changeActiveTab}
     indicatorColor='primary'
     >
      <Tab className={classes.tab} label="Home" />
      <Tab className={classes.tab} label="About" />
      <Tab className={classes.tab} label="Contact us" />
      <Tab className={classes.tab} label="Products" />
      <Tab className={classes.tab} label="Locations" />
      <Tab className={classes.tab} label="Plans" />
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
      <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              About
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Products
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Locations
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Plans
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.header}>
          <img
            className={classes.logo}
            src={industriLogo}
            alt="solør industriservice logo"
          />
        
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
