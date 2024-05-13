import React from "react";
import "./fseller.css"
import { Link } from 'react-router-dom';

import { useState } from "react";
const Fseller = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    function Model() {

        return (<>
            <div id="modal" className="modal" style={{
                position: 'fixed',
                top: '45%',
                left: '50%',
                backgroundColor: 'rgb(255, 255, 255)',
                width: '26rem',
                height: '267px',
                zIndex: '9999',
                display: 'none',
                borderRadius: '1rem',
                transition: 'opacity 0.3s ease-in-out',
                transform: isModalOpen ? 'translate(-50%, -50%)' : 'translate(-50%, 0)',
                display: isModalOpen ? 'block' : 'none',



            }}>
                <div className="addcontainer">
                    <div className="modal-header">
                        <hr style={{ "position": "relative", "top": "3rem" }} />
                       
                        <h2 style={{ position: 'fixed', left: '3rem', top: '5%' }}>Login</h2>
                        <span className="dismiss-icon" style={{ "display": "flex", "flexDirection": "row-reverse", "marginRight": "20px", "cursor": "pointer" }} onClick={() => { setModalOpen(false); }}>✖</span> {/*- <!-- Horizontal line for theheader --*/}
                    </div>
                
                    <div className="modal-footer">
                    
                    </div>
                </div>
            </div>
            <div id="overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 9998,
                display: 'none',
                transition: 'opacity 0.3s ease-in-out',
                display: isModalOpen ? 'block' : 'none',

            }} />

        </>)
    }
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shopify App</title>
            <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@10.31.0/build/esm/styles.css" />
            <div className="Bodys">
                <link rel="stylesheet" href="./fseller.css" />
               
               
                <div className="banner">
                    <div className="bann">
                        <div className="bancon">
                            <div id="breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="bstext">
                                Sell Your lectures
                            </div>
                            <div>
                                <img src="./media/Desktop_sell.webp" alt="Flipkart" title="Flipkart" className="aqQN50111" href=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="overb">
                        <div
                            class="container"
                        >
                            <div
                                class="row g-2"
                            >
                                <ul id="bannerover"
                                    class="nav   "
                                >
                                    <li class="nav-item">
                                        <img src="./media/crore_users_revamp.svg" alt="Flipkart" title="Flipkart" className="aqQN5011" href=""></img>
                                        <p>45 crore+ Flipkart customers</p>

                                    </li><div className="bannerdivide"></div>
                                    <li class="nav-item">
                                        <img src="./media/wallet-icon.svg" alt="Flipkart" title="Flipkart" className="aqQN5011" href=""></img>
                                        <p>7* days secure & regular payments</p>

                                    </li><div className="bannerdivide"></div>
                                    <li class="nav-item">
                                        <img src="./media/low-cost-icon.svg" alt="Flipkart" title="Flipkart" className="aqQN5011" href=""></img>
                                        <p>Low cost of doing business</p>

                                    </li><div className="bannerdivide"></div>
                                    <li class="nav-item">
                                        <img src="./media/seller-support-icon.svg" alt="Flipkart" title="Flipkart" className="aqQN5011" href=""></img>
                                        <p>One click Seller Support</p>

                                    </li><div className="bannerdivide"></div>
                                    <li class="nav-item">
                                        <img src="./media/shopping-bag-icon.svg" alt="Flipkart" title="Flipkart" className="aqQN5011" href=""></img>
                                        <p>Access to The Big Billion Days & more</p>

                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="sellercontainer">
                    <div className="sellerdiv">
                        <div className="scol1">
                            <h2>
                                <span id="ss1">Seller Success </span><span>Stories</span>
                            </h2>
                        </div>
                        <div className="scol2">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="spcontent">
                                            <div className="sprofile"><img src="./media/profile3.webp" className="simage" alt="..." /></div>
                                            <div className="spcred">
                                                <div className="spcred11"><p>Raju Lunawath , Amazestore</p><br /></div>
                                                <div className="spcred12"><p>Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.</p><br /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="spcontent">
                                            <div className="sprofile"><img src="./media/profile1.webp" className="simage" alt="..." /></div>
                                            <div className="spcred">
                                                <div className="spcred11"><p>Dinesh Kumar Rajpurohit , Kemei</p><br /></div>
                                                <div className="spcred12"><p>On Flipkart, your listings are live in less than 2 hours and you can start selling anywhere in India. I started my business with 3 products, and today I own 3 brands and have also created employment opportunities for my family and team of 25.</p><br /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="spcontent">
                                            <div className="sprofile"><img src="./media/profile2.webp" className="simage" alt="..." /></div>
                                            <div className="spcred">
                                                <div className="spcred11"><p>Vinay Garg , Activa & Digi Smart</p><br /></div>
                                                <div className="spcred12"><p>When moving from offline to online business, our aim was to sell 300 orders per month. Today, we sell  more than 700 orders per day and this has been possible because of the growth features on the Flipkart seller dashboard, Flipkart Ads and regular payments.</p><br /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="fa fa-angle-left" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

           
                <div className="loginpopup">

                </div>

            </div >
            <Model />
        </>
    );
}

export default Fseller;