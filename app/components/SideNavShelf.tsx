import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button, Paper} from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Home', 'Projects', 'Design', 'Experience'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Github', 'LinkedIn', 'Contact Me'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>

                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Paper elevation={2}
            sx={{
                width: 'auto',
                display: 'inline-flex',
                padding: 0,
                margin: 0,
                position: 'absolute',
                left: 40,
            }}
            >
                <Button variant="contained" onClick={toggleDrawer(true)} sx={{bgcolor: 'orange'}}>Quick Nav</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </Paper>
        </div>
    );
}