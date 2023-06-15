/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from 'theme-ui';
import React, { useContext } from 'react';
import { DrawerContext } from 'contexts/drawer/drawer-context';
import Drawer from 'components/drawer';
import Logo from '../../assets/images/dms.png';
import close from 'assets/images/icons/close.png';
import Link from "next/link"

const NavbarDrawer = () => {
    const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  const menuItems = [
    {
      label: 'HOME',
      path: "/",
    },
  ]
  const about = [
    {
      label: 'ABOUT',
      path: "/",
    },
    
  ]
  const project = [
    {
      label: 'PROJECT',
      path: "/project",
    },
    
  ]
  const gallery = [
    {
      label: 'GALLERY',
      path: "/photo",
    },
   
  ]
  const blog = [
    {
      label: 'BLOG',
      path: "/",
    },
  ]

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <MenuButton />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <img src={Logo} sx={styles.logo} />
        <Box as="ul" sx={styles.navbar}>
      <li>
        {menuItems.map(({ path, label }, i) => (
        <Link href={path} key={i}>
          <a>{label}</a>
        </Link>
      ))}
      </li>
      <li>
      {about.map(({ path, label }, i) => (
        <Link href={path} key={i}>
          <a>{label}</a>
        </Link>
      ))}
      </li>
      <li>
      {project.map(({ path, label }, i) => (
        <Link href={path} key={i}>
          <a>{label}</a>
        </Link>
      ))}
      </li>
      <li>
      {gallery.map(({ path, label }, i) => (
        <Link href={path} key={i}>
          <a>{label}</a>
        </Link>
      ))}
      </li>
      <li>
            {blog.map(({ path, label }, i) => (
        <Link href={path} key={i}>
          <a>{label}</a>
        </Link>
      ))}
      </li>
        </Box>
        <Button variant="primary" sx={styles.donateNow}>
          Get Started
        </Button>
      </Box>
    </Drawer>
  );
};
export default NavbarDrawer;

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
  drawer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: '1',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    p: 0,
  },
  wrapper: {
    height: '100%',
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    ml: 6,
    mb: 9,
    mr: 12,
  },
  navbar: {
    listStyle: 'none',
    m: 0,
    p: 0,
    cursor: 'pointer',
    'li > a': {
      backgroundColor: 'transparent',
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      color: '#834D80',
      mt: 1,
      display: 'block',
      alignItems: 'center',
      minHeight: 44,
      marginLeft: 6,
      textDecoration: 'none',
      position: 'relative',
      transition: 'all 0.3s ease-in-out 0s',
    },
    'li:last-child > a': {
      borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    '.active': {
      color: '#FFD662FF',
    },
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: 'auto 30px 40px',
    backgroundColor: "transparent",
    fontFamily: "body",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    display: "inline-flex",
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    border: 'none',
    minHeight: "60px",
  },
};