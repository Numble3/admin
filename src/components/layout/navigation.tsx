import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { SidebarType } from 'src/types/common';
import { memo } from 'react';

const sidebar: SidebarType[] = [
  { label: '유저', path: 'user', icon: <PersonOutlineIcon /> },
  { label: '메인 콘텐츠', path: 'main', icon: <GridViewIcon /> },
];

const LayoutNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const current = location.pathname.replace(/[/]/, '');

  const onChangeRoute = useCallback(
    (v: string) => {
      if (current === v) {
        console.log('current');

        return;
      }
      navigate(v);
    },
    [location]
  );

  // useEffect(() => {
  //   console.log('location', location);
  // }, [location]);

  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 'var(--layout-nav)',
        },
      }}
      open
    >
      <Toolbar
        sx={{
          height: 'var(--layout-header)',
          boxSizing: 'content-box',
        }}
      >
        App icon
      </Toolbar>
      <List>
        {sidebar.map((v, i) => (
          <ListItem button key={i} onClick={() => onChangeRoute(v.path)}>
            <ListItemIcon>{v.icon}</ListItemIcon>
            <ListItemText primary={v.label} />
            <aside
              className={`absolute top-0 left-0 h-full w-2 ${current === v.path && 'bg-gray-300'}`}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(LayoutNavigation);
