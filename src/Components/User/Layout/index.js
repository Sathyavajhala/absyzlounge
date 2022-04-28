
import Drawer from '@material-ui/core/Drawer';
import { PieChart } from 'react-minimal-pie-chart';
import API from '../../../Api/index.js'
import 'react-circular-progressbar/dist/styles.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MyDrawer from "./Drawer/index"
import ListItem from '@material-ui/core/ListItem';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Group1 from '../Group1.png'
import Group3 from '../Group3.png'
import Collapse from '@mui/material/Collapse';
import Group2 from '../Group2.png'
import AppBarQuestionView from "./Appbar/AppBar"
import AppBarResultsView from "./Appbar/AppBar"
import Background from '../background.png'
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Component } from 'react';
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import * as React from 'react';
import PropTypes from 'prop-types';
import myLogo from "../myLogo.png"
import AppBar from '@mui/material/AppBar';
import Trivia from "./trivia"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import windowSize from 'react-window-size';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@material-ui/core/Button"
import WeeklyZine from './weeklyZine';
import NewsLetter from './newsLetter';
import CompanyNews from './CompanyNews';
// import "./styles.css";
const api = API.Api;
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: "",
            windowWidth: '',
            begin: true,
            myCompanyNews: false,
            errormsg: false,
            option1: false,
            trivia: true,
            option2: false,
            weeklyZine: false,
            newsLetters: false,
            correctlyAnswered: 0,
            incorrectlyAnswered: 0,
            questionsAnswered: 0,
            activeDiv: '',
            alreadySubmitted: false,
            engagementRatio: 0,
            triviaResults: '',
            openAlert: false,
            totalQuestions: 0,
            incorrectRatio: 0,
            option3: false,
            results: false,
            option4: false,
            userProfile: "",
            isLoading: false,
            drawer: false,
            mobiledrawer: false,
            myQuestionView: false
        }
        this.handleDrawerMobile = this.handleDrawerMobile.bind(this)
    }

    ResponsiveDrawer(props) {
        const { window } = props;
        this.setState({ mobiledrawer: false })
        const handleDrawerToggle = () => {
            this.setState({ mobiledrawer: !this.state.mobiledrawer })
        };
    }

    componentDidMount() {
        console.log(this.props, "this is my props data main")
        this.setState({
            trivia: true,
            weeklyZine: false,
            myCompanyNews: false,
            newsLetters: false,
        })
    }

    trivia() {
        this.setState({ weeklyZine: false, newsLetters: false, myCompanyNews: false, mobiledrawer: false, trivia: true });

    }
    newsLetter() {
        this.setState({ newsLetters: true, mobiledrawer: false, weeklyZine: false, trivia: false, myCompanyNews: false })
    }

    companyNews() {
        this.setState({ myCompanyNews: true, mobiledrawer: false, newsLetters: false, weeklyZine: false, trivia: false })
    }

    customAppBar = () => {
        
        return (
            <div
                style={myStyles.desktopAppBarDiv}
            >
                <p style={myStyles.desktopAppBarText} >ABSYZ Lounge Trivia </p>
            </div>
        )
    }

    WeeklyZine() {
        this.setState({ weeklyZine: true, mobiledrawer: false, newsLetters: false, trivia: false, myCompanyNews: false })
    }
    handleDrawerMobile = () => {
        this.setState({ mobiledrawer: !this.state.mobiledrawer })
    }
    render() {
        console.log(this.state.engagementRatio, 'your payload result')
        const container = window !== undefined ? () => window().document.body : undefined;

        return (
            <div >
                <div>
                    {this.props.windowWidth > 770 ?
                        null
                        :
                        <div>
                            <AppBar position="static"
                                style={{ backgroundColor: '#283741',position:'fixed',zIndex:1000 }}
                                sx={myStyles.mobileAppBarSx}
                            >
                                <Toolbar variant="dense" sx={{ position: 'absolute', left: 0 }} >
                                    <IconButton
                                        onClick={this.handleDrawerMobile}
                                        edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                        <MenuIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Toolbar>
                                <img src={myLogo} alt="Absyz.logo" width="80" height="40" style={{ alignSelf: 'center', marginBottom: '2%' }} />

                            </AppBar>
                        </div>
                    }
                </div>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders" >
                    {this.props.windowWidth > 770 ?
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
                        :
                        <div>
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={this.state.mobiledrawer}
                                onClose={this.handleDrawerMobile}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: mobileDrawerWidth },
                                }} >
                                <div style={{ backgroundColor: '#1D7B84', height: '100%', }}  >
                                    <div className={classes.toolbarIcon} style={{ backgroundColor: '#283741', height: 65, display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                                        <img src={myLogo} alt="Absyz.logo" width="80" height="40" style={{ alignSelf: 'center', display: 'flex' }} />
                                    </div>
                                    <List>
                                        <ListItem button exact>
                                            <ListItemIcon>
                                                <DescriptionRoundedIcon sx={{ color: '#fff' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                onClick={this.trivia.bind(this)}
                                                primary="Trivia" style={{ color: 'white', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                                        </ListItem>
                                        <ListItem button exact>
                                            <ListItemIcon>
                                                < ImportContactsIcon sx={{ color: '#fff' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                onClick={this.newsLetter.bind(this)}
                                                primary="Monthly Newsletter" style={{ color: '#fff', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
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
                                            button exact>
                                            <ListItemIcon>
                                                < LocationCityOutlinedIcon sx={{ color: '#fff' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="Company News" style={{ color: '#fff', fontFamily: 'Source Sans Pro', fontSize: 20 }} />
                                        </ListItem>
                                    </List>
                                </div>
                            </Drawer>
                        </div>
                    }
                </Box>
                <Box component="main" sx={{ justifySelf: 'center', }}   >
                    {this.state.weeklyZine ? <WeeklyZine /> : null}
                    {this.state.newsLetters ? <NewsLetter /> : null}
                    {this.state.myCompanyNews ? <CompanyNews /> : null}
                    {this.state.trivia ? <Trivia getprops={this.props} /> : null}
                    {this.state.alreadySubmitted ?
                        <div className="position-absolute top-50 start-50 translate-middle  " >  already submitted {this.state.question.message} </div> : null}

                </Box>

            </div >
        )
    }
}
document.body.style.backgroundColor = "#F6F8FA"
App.propTypes = {
    window: PropTypes.func,
};
export default windowSize(App);

const myStyles = {
    desktopAppBarDiv: {
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1,
        height: '9.5%',
        backgroundColor: '#fff',
        display: 'flex',
        justifySelf: 'center',
        justifyContent: 'center'
    },
    desktopAppBarText: {
        fontSize: 22,
        fontFamily: 'Source Sans Pro',
        fontWeight: '600', color: '#33494E', marginTop: '1%', alignSelf: 'center', display: 'flex', marginLeft: '18%'
    },
    mobileAppBarSx: {
        alignContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    mobileAppBarDiv: {
        width: '100%',
        height: 65,
        backgroundColor: '#fff',
        display: 'flex',
        justifySelf: 'center',
        justifyContent: 'center'
    },
    mobileAppBarText: {
        fontSize: 22, fontFamily: 'Source Sans Pro', fontWeight: '600', color: '#33494E', marginTop: '1%', alignSelf: 'center', display: 'flex',
    },

}
const classes = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));
const drawerWidth = 240;
const mobileDrawerWidth = 100;

const { window } = 420;
