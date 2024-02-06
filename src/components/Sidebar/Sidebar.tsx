import { Box, Hidden, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../assets/data/header';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: '#161d2f',
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        width: {
          sm: '100%',
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'row',
            lg: 'column',
          },
          gap: 5,
          alignItems: {
            xs: 'center',
            lg: 'start',
          },
          width: '100%',
        }}
      >
        <Hidden smDown>
          <Typography
            variant='h5'
            component='h1'
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            PikaShowApp
          </Typography>
        </Hidden>

        <Box
          sx={{
            py: {
              xs: '0px',
              lg: '16px',
            },
            display: 'flex',
            flexDirection: {
              xs: 'row',
              lg: 'column',
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <i
                  className={`icon icon-${item.icon}`}
                  style={{
                    fontSize: '18px',
                    filter: `${
                      pathname === item.link
                        ? 'invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(9)'
                        : 'invert(44%)'
                    }`,
                  }}
                ></i>
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
