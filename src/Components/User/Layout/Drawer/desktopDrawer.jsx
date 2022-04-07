import React from "react";


export default function desktopDrawer(){

    return(
        <Drawer
        variant='permanent'
        open={this.state.drawer}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        color='1D7B84' >
        <div style={{ backgroundColor: '#1D7B84', height: '100%', }}  >
            <div className={classes.toolbarIcon} style={{ backgroundColor: '#283741', height: '10%', display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                <img src={myLogo} alt="Absyz.logo" width="80" height="40" style={{ alignSelf: 'center', display: 'flex' }} />
            </div>
            <List>
                <ListItem
                    onClick={this.trivia.bind(this)} button exact>
                    <ListItemIcon>
                        <DescriptionRoundedIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Trivia" style={{ color: 'white', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                </ListItem>
                <ListItem
                    onClick={this.newsLetter.bind(this)}
                    button exact >
                    <ListItemIcon>
                        < ImportContactsIcon sx={{ color: '#fff' }} />

                    </ListItemIcon>
                    <ListItemText primary="Monthly Newsletter" style={{ color: '#fff', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                </ListItem>
                <ListItem button exact>
                    <ListItemIcon>
                        < DateRangeOutlinedIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText
                        onClick={this.WeeklyZine.bind(this)}
                        primary="Weekly Zine" style={{ color: '#fff', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                </ListItem>
                <ListItem
                    onClick={this.companyNews.bind(this)}
                    button exact >
                    <ListItemIcon>
                        < LocationCityOutlinedIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Company News" style={{ color: '#fff', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                </ListItem>
            </List>
        </div>
        <div style={{ bottom: 0, paddingBottom: '10%', backgroundColor: '#1D7B84', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: "50%", height: '75%', alignSelf: 'center', display: 'flex' }}>
            </div>
        </div>
    </Drawer>
    )
}