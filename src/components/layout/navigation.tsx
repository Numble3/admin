import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { SidebarType } from 'src/typings/common';
import { memo } from 'react';

const sidebar: SidebarType[] = [
  { label: '유저', path: 'user', icon: <PersonOutlineIcon /> },
  { label: '메인 콘텐츠', path: 'main', icon: <GridViewIcon /> },
];

const LayoutNavigation = () => {
  const location = useLocation();
  const current = useMemo(() => location.pathname.replace(/[/]/, ''), [location]);

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
          <Link key={i} to={v.path}>
            <ListItem button>
              <ListItemIcon>{v.icon}</ListItemIcon>
              <ListItemText primary={v.label} />
              <aside
                className={`absolute top-0 left-0 h-full w-2 ${
                  current.includes(v.path) && 'bg-gray-300'
                }`}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(LayoutNavigation);
