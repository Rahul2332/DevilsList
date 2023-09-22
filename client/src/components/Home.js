import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getRootStorage } from '../utils/Api';
import { getActiveAccount, connectWallet } from '../utils/wallet';

import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

import stock1 from '../images/stocks/stock1.png'
import stock2 from '../images/stocks/stock2.png'
import stock3 from '../images/stocks/stock3.png'

import img1 from '../images/home/end_minus_5.png';
import img2 from '../images/home/end_minus_4.png';
import img3 from '../images/home/end_minus_3.png';
import img4 from '../images/home/end_minus_2.png';
import img5 from '../images/home/end_minus_1.png';
import img6 from '../images/home/end.png';
import img7 from '../images/home/end_plus_1.png';
import angellist_abstract from '../images/stocks/angellist_abstract.png'

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';

import angellist_logo from '../images/home/angellist_logo.png'
import devils_logo_img from '../images/logo/devils_logo_800px_trans.png'
import devils_logo_svg from '../images/logo/devils_logo.svg'
import small_devils_logo from '../images/logo/small_devils_logo.png'


import { Button } from '@material-ui/core';

export const Home = () => {

    const navigate = useNavigate();
    const [connectAndLogin, setconnectAndLogin] = useState(false);

    const [wallet, setWallet] = useState(null);
    useEffect(() => {
        if (wallet) {
            setconnectAndLogin(true);
        }
        (async () => {
            const activeAccount = await getActiveAccount();
            setWallet(activeAccount);
        })();
    }, []);

    useEffect(() => {
        const connectAndLoginFun = async () => {
            const storage = await getRootStorage();

            for (let companyAddress of storage["all_companies"]) {
                console.log(wallet.address, companyAddress)
                if (wallet.address === companyAddress)
                    navigate("/dashboard-company", true);
            }
            for (let investorAddress of storage["all_investors"]) {
                console.log(wallet.address, investorAddress)
                if (wallet.address === investorAddress)
                    navigate("/dashboard-investor");
            }
            for (let employeeAddress of storage["all_employee"]) {
                console.log(wallet.address, employeeAddress)
                if (wallet.address === employeeAddress)
                    navigate("/dashboard-company");
            }
        }
        if (wallet && connectAndLogin)
            connectAndLoginFun()
    }, [wallet, connectAndLogin]);

    const handleConnectWallet = async () => {
        const { wallet } = await connectWallet();
        setWallet(wallet);
    };

    async function handleLogin() {
        if (!wallet) {
            await handleConnectWallet();
            setconnectAndLogin(true);
        }
        setconnectAndLogin(true);
    }

    return (
        <>
            <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                <div className='d-flex align-items-center justify-content-start'>
                    <img src={small_devils_logo} style={{ width: '48px' }} />
                    <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils List</span>
                </div>
                {/* <span className='font15 ms-5 ps-5 fw-bold'>Dashboard</span> */}
                <div className='d-flex align-items-center w-50 justify-content-between'>
                    {/* <span className='btn'>For Investors</span>
                    <span className='btn'>For Fund Managers</span>
                    <span className='btn'>For Founders</span>
                    <span className='btn'>Company</span>
                    <span className='btn'>Help</span> */}
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button className='mx-2' variant="outlined" color="primary" onClick={handleLogin}>
                        Log in
                    </Button>
                    <Link to='/sign-up'>
                        <Button className='mx-2' variant="contained" color="primary">
                            Join
                        </Button>
                    </Link>
                </div>
            </nav>

            <div className="p-5 mb-4 mx-5 background-light-purple rounded-3 d-flex">
                <div className="container-fluid py-4" style={{ width: '55%' }}>
                    <h1 className="display-5 fw-bold mb-3">Invest in world-changing startups</h1>
                    <p className="col-md-8 fs-4 p-0 mb-5">Join leading investors funding the next wave of world-changing startups.</p>
                    <button className="btn button-purple text-white btn-lg" type="button">Invest Now</button>
                </div>
                <div className="container-fluid py-4" style={{ width: '45%' }}>
                    <img className='w-100' src={devils_logo_img} />
                    {/* <img className='w-100' src={devils_logo_svg} /> */}
                </div>
            </div>

            <div className='d-flex justify-content-around align-items-center'>
                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>15000+</h2>
                    <p>Funds & Syndicates</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>$10B</h2>
                    <p>Assets Supported</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>190</h2>
                    <p>Unicorns</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>57%</h2>
                    <p>of all top-tier U.S. VC </p>
                </div>
            </div>

            <div class="ps-5 mb-4 mx-5 background-light-purple rounded-3 d-flex justify-content-between" style={{ backgroundColor: 'rgb(6,12,38)', height: '600px', marginTop: '100px', marginBottom: '100px' }}>
                <div className='p-4 my-auto' style={{ width: '45%' }}>
                    <h3 className='fw-bold mb-4' style={{ color: '#dbc0f8' }}>Featured Funds</h3>
                    <h3 className='display-5 fw-bold text-white mb-4'>Invest in Rolling Funds</h3>
                    <h5 className='text-light mb-5'>Invest in experienced VCs backing startups, subscribe quarterly, and adjust your investment as your goals evolve.</h5>
                    <Button style={{ textTransform: 'capitalize', backgroundColor: '#7956bf' }} variant='contained' color='primary' size='large'>DevilsList Market Place</Button>
                </div>
                <div style={{ width: '50%' }}>
                    <img style={{ marginTop: '-50px', width:'550px' }} src={angellist_abstract} />
                </div>
            </div>

            <div className='px-5 mt-5 bg-black shadow'>
                <div className='d-flex justify-content-between'>
                    <div className='p-5 w-50 text-white'>
                        <h3 className='fw-bold'>Stay in the loop</h3>
                        <h5 className='text-light my-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</h5>
                        <div className='d-flex mt-4 justify-content-between'>
                            <input style={{ width: '70%', fontSize: '20px' }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                            <Button style={{ textTransform: 'capitalize', fontSize: '20px' }} className='w-25 fw-bold' variant='contained' color='primary'>Sign Up</Button>
                        </div>
                    </div>

                    <div className='py-5 d-flex flex-column justify-content-between align-items-center w-25 text-white'>
                        <h3 className='fw-bold text-center'>Join the community</h3>
                        <div className='d-flex flex-wrap justify-content-center'>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <TwitterIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <YouTubeIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <FacebookIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <MailOutlineIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <RedditIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <InstagramIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <Divider variant='middle' className='my-2' style={{ color: 'white', background: 'white' }} />

                <div className='d-flex justify-content-between ps-5 py-5'>
                    <div className='w-25'>
                        <img className='mb-3' src={small_devils_logo} style={{ height: '80px', width: '80px' }} />
                        <h3 className='text-white my-3'>Devils List</h3>
                        <p className='text-light my-3'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    </div>

                    <div className='w-75 d-flex ms-5'>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Marketplace</h4>
                            <div>
                                <p>All NFTs</p>
                                <p>Solana NFTs</p>
                                <p>Art</p>
                                <p>Collections</p>
                                <p>Domain Names</p>
                                <p>Music</p>
                                <p>Photography</p>
                                <p>Sports</p>
                                <p>Trading Cards</p>
                                <p>Utility</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>My Account</h4>
                            <div>
                                <p>Profile</p>
                                <p>Favourites</p>
                                <p>Watchlist</p>
                                <p>My Collections</p>
                                <p>Settings</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Resources</h4>
                            <div>
                                <p>Help Center</p>
                                <p>Platform Status</p>
                                <p>Partners</p>
                                <p>Gas-Free MarketPlace</p>
                                <p>Taxes</p>
                                <p>Blog</p>
                                <p>Docs</p>
                                <p>Newsletter</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Company</h4>
                            <div>
                                <p>About</p>
                                <p>Careers</p>
                                <p>Ventures</p>
                                <p>Grants</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



            {/* <div className='mt-5 container'>
                <img className='w-100' src={img1} />
                <img className='w-100' src={img2} />
                <img className='w-100' src={img3} />
                <img className='w-100' src={img4} />
                <img className='w-100' src={img5} />
                <img className='w-100' src={img6} />
                <img className='w-100' src={img7} />
            </div> */}
        </>
    )
}
