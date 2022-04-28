import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import { Component } from 'react';
import Card from '@mui/material/Card';
import Puzzle from 'react-image-puzzle';
import zine3 from "../zine3.png"

class CompanyNews extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.windowWidth)
        return (
            <div  >
                {this.props.windowWidth > 770 ?
                    <div>
                        <div style={{ width: '100%', position: 'fixed', height: '9.5%', zIndex: 1, backgroundColor: '#fff', display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                            <p style={{ fontSize: 22, fontFamily: 'Source Sans Pro', fontWeight: '600', color: '#33494E', marginTop: '1%', alignSelf: 'center', display: 'flex', marginLeft: '20%' }}>Company News </p>
                        </div>
                        <div
                            className="position-absolute top-50 start-50 translate-middle  "
                            style={{ marginLeft: '12%', marginTop: '7%', justifyContent: 'left', overflowY: 'hidden', overflowX: 'hidden', width: '60%', height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <Card
                                style={{ width: '80%', height: '85%', overflow: 'auto', backgroundColor: '#fbfced' }}
                            >
                                <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}  >
                                    <div style={{ display: 'flex', alignSelf: 'center' }}>       <p style={{ justifyContent: 'left', paddingTop: '3%', color: '#184765', fontSize: 22, }}> Try this..! There are some rewards  <p style={{ color: '#FFD700',textAlign:'center' }}> $ </p>   </p> </div>

                                    <div style={{ alignSelf: 'center', backgroundColor: '#F7F7F7' }}>
                                        <Puzzle
                                            image={zine3}
                                            size={200}
                                            onDone={() => alert('Yay..its done')}
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card
                                style={{ width: '80%', height: '75%', marginTop: '3%', overflow: 'auto', backgroundColor: '#fbfced' }}
                            >
                                <div
                                >
                                    <p style={{ justifyContent: 'left', paddingTop: '3%', color: '#184765', fontSize: 28 ,textAlign:'center'}}>Mendix-ABSYZ partnership </p>
                                    <p
                                        style={{ alignSelf: 'center', marginLeft: '10%', justifySelf: 'center', paddingTop: '3%', width: '80%', display: 'flex', textAlign: 'justify' }}
                                    >  ABSYZ has entered into a partnership with Mendix which is an American Low-Code Software Platform Company that provides tools to build, test, deploy and iterate applications. The Company was founded in 2005 and was acquired by Siemens in 2018 and presently operates as an independent subsidiary.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                    :
                    <div>
                        <div style={{ width: '100%', height: '7%', backgroundColor: '#fff', display: 'flex', justifySelf: 'center', justifyContent: 'center', paddingTop:'13%',marginBottom:'5%' }}>

                            <p style={{ fontSize: 22, fontFamily: 'Source Sans Pro', fontWeight: '600', color: '#33494E', marginTop: '1%', alignSelf: 'center', display: 'flex', }}>Company News </p>
                        </div>
                        <div
                            className="position-absolute top-50 start-50 translate-middle  "
                            style={{ marginTop: '35%', justifyContent: 'left', overflowY: 'hidden', overflowX: 'hidden', width: '90%', height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <Card
                                style={{ width: '100%', height: '75%', overflow: 'auto' }}
                            >
                              <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}  >
                                    <div style={{ display: 'flex', alignSelf: 'center' }}>       <p style={{ justifyContent: 'left', paddingTop: '3%', color: '#184765', fontSize: 22, }}> Try this..! There are some rewards  <p style={{ color: '#FFD700',textAlign:'center' }}> $ </p>   </p> </div>

                                    <div style={{ alignSelf: 'center', backgroundColor: '#F7F7F7' }}>
                                        <Puzzle
                                            image={zine3}
                                            size={200}
                                            onDone={() => alert('Yay..its done')}
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card
                                style={{ width: '100%', height: '75%', marginTop: '3%', overflow: 'auto' }}
                            >
                                <div
                                >
                                    <p style={{ justifyContent: 'left', paddingTop: '3%', color: '#184765', fontSize: 28 }}>Mendix-ABSYZ partnership </p>
                                    <p
                                        style={{ alignSelf: 'center', marginLeft: '10%', justifySelf: 'center', paddingTop: '3%', width: '80%', display: 'flex', textAlign: 'justify' }}
                                    >  ABSYZ has entered into a partnership with Mendix which is an American Low-Code Software Platform Company that provides tools to build, test, deploy and iterate applications. The Company was founded in 2005 and was acquired by Siemens in 2018 and presently operates as an independent subsidiary.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
CompanyNews.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default windowSize(CompanyNews)