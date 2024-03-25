import React, { useState } from "react";
import logo from "../images/logo.svg";
import Seperator from "../images/separator.svg";
import { motion } from "framer-motion";
import breakfast from "../images/service-1.jpg";
import lunch from "../images/service-2.jpg";
import dinner from "../images/service-3.jpg";
import Hotel from "../images/about-banner.jpg";
import badge from "../images/badge-2.png";
import badgebg from "../images/badge-2-bg.png";
import pic from "../images/about-abs-image.jpg";
import special from "../images/special-dish-banner.jpg";
import menu_1 from "../images/menu-1.png";
import menu_2 from "../images/menu-2.png";
import menu_3 from "../images/menu-3.png";
import menu_4 from "../images/menu-4.png";
import menu_5 from "../images/menu-5.png";
import menu_6 from "../images/menu-6.png";
import lady from "../images/chef-garnishing-his-dish-with-coriander-leaf.jpg";
import tasty from "../images/testi-avatar.jpg";
import avate from "../images/female-chef-carefully-pouring-sauce-dish.jpg";
import appstore from "../images/app-store.png";
import playstore from "../images/play-store.png";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";
import "./Hero.css";

const Hero = () => {
  const [name, setName] = useState("");
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);
  const [height, setHeight] = useState("");
  const Menu = () => {
    return (
      <>
      <div className="modal-wrapper"></div>
      <div className="container mt-5">
        <div className="row">
          <div className="col modal-container">
            <img src={logo} alt=""/>
           <div className="row">
            <div className="col">
              <ul className="ul">
                <li><img src={menu_2} alt="" width={"70px"}/>
              <b className="mx-2">Olivas Rellenas</b>
              <span className="mx-5">$25.50</span>
              </li>
              <li><img src={menu_3} alt="" width={"70px"}/>
              <b className="mx-2">Olivas Rellenas</b>
              <span className="mx-5">$45.50</span>
              </li>
              <li><img src={menu_4} alt="" width={"70px"}/>
              <b className="mx-2">Olivas Rellenas</b>
              <span className="mx-5">$50.50</span>
              
              </li>
              <li><img src={menu_5} alt="" width={"70px"}/>
              <b className="mx-2">Olivas Rellenas</b>
              <span className="mx-5">$45.50</span>
              
              </li>
              <li><img src={menu_6} alt="" width={"70px"}/>
              <b className="mx-2">Olivas Rellenas</b>
              <span className="mx-5">$15.50</span>
              </li>
              </ul>
            </div>
           </div>
            <button id="btn3" className="mt-3" onClick={() => setMenu(false)}>
              Cancel Menu
            </button>
          </div>
        </div>
      </div>
      </>
    );
  };

  // ABOUT
  const About = () => {
    return (
      <>
      <div className="modal-wrapper"></div>
      <div className="container mt-5">
        <div className="row">
          <div className="col modal-container">
            <img src={logo} alt=""/>
           <div className="row">
            <div className="col">
            <p id="main-head">
              <small>FLAVOURS FOR ROYALTY</small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              soluta, dolorum deleniti nisi itaque consequuntur mol Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Veritatis excepturi
              aut impedit minima sapiente ut?Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi soluta, dolorum deleniti nisi
              itaque consequuntur mol Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Veritatis excepturi aut impedit minima sapiente
              ut?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              soluta, dolorum deleniti nisi itaque consequuntur mol Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Veritatis excepturi
              aut impedit minima sapiente ut?
            </p> 
            </div>
           </div>
            <button id="btn3" className="mt-3" onClick={() => setAbout(false)}>
              Cancel Menu
            </button>
          </div>
        </div>
      </div>
      </>
    );
  };
  const Change = (val, length) => {
    if (name.length === 3 || height.length <= 0) {
      toast.error("Please Enter Your Valid Name OR Email Address");
    } else {
      toast.success("Your Table Is Booked Sucessfully");
    }
  };
  const Paddle = () =>{
    setAbout(true)
  }
  return (
    <>
      <div className="container-fluid bg">
        {/* NAVBAR*/}
        <LoadingBar color="rgba(214, 177, 10, 0.774)" progress={100} />
        <div className="row nav">
          <div className="col">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div className="navbar-brand" href="/">
                  <img src={logo} alt="" />
                </div>
                <button
                  className="navbar-toggler m-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* LISTING */}
                <div className="navbar-collapse" id="navbarSupportedContent">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#menu">
                        Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#chefs">
                        Our Chiefs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  {/* BUTTON */}
                  <div className="d-flex">
                    <a href="#contact">
                      <button className="btn btn-warning" type="submit">
                        Book A Table
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* HERO */}
        <div className="row main-hero">
          <div className="col">
            <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
              <p id="main-head">
                <small>DELIGHTFUL EXPERIENCE</small>
              </p>
              <img src={Seperator} alt="" id="seperator" width="100px" />
              <p id="main-2-head">
                Flavours Inspired by
                <br />
                the Seasons
              </p>
              <p>Come with the Family & feel the joy of mouthwatering food</p>
              <a href="#menu">
                <button type="button" id="btn3" className="btn btn-outline">
                  <small>View our Menu</small>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* GREAT OFFERS */}
      <div className="container-fluid  mini-menu services">
        <div className="row">
          <div className="col mt-2">
            <img src="..//images/shape-2.png" alt="" id="shape-2" />
            <p id="main-head">
              <small>FLAVOURS FOR ROYALTY</small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <p id="main-2-head">We Offer Top Notch</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              soluta, dolorum deleniti nisi itaque consequuntur mol Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Veritatis excepturi
              aut impedit minima sapiente ut?Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi soluta, dolorum deleniti nisi
              itaque consequuntur mol Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Veritatis excepturi aut impedit minima sapiente
              ut?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              soluta, dolorum deleniti nisi itaque consequuntur mol Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Veritatis excepturi
              aut impedit minima sapiente ut?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 breakfast">
              <img src={breakfast} alt="" width="250px" />
              <h3>BreakFast</h3>
              <span>
                <p className="vm">
                  <a href="#menu">View Menu</a>
                </p>
              </span>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img src={lunch} alt="" width="250px" />
            <h3>Lunch</h3>
            <span>
              <p className="vm">
                <a href="#menu">View Menu</a>
              </p>
            </span>
          </div>
          <div className="col-12 col-md-4">
            <img src={dinner} alt="" width="250px" />
            <h3>Dinner</h3>
            <span>
              <p className="vm">
                <a href="#menu">View Menu</a>
              </p>
            </span>
          </div>
        </div>
      </div>
      {/*  OUR GREAT STORY */}
      <div className="container-fluid second-bg pt-5 flood">
        <div className="row">
          <div className="col-12 col-lg-6 mt-5">
            <p id="main-head">
              <small>OUR STORY</small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <p id="main-2-head">Every Flavours Tells a Story</p>
            <p>
              Story Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam facere itaque quasi fuga soluta explicabo voluptatum
              reprehenderit, expedita rem. Labore eius cumque alias! Provident
              non officiis adipisci excepturi explicabo ipsam beatae?
              Consequatur expedita quaerat, assumenda, incidunt eius, voluptatem
              hic asperiores animi quos fuga iusto magni!
            </p>
            <p>Book Through Call</p>
            <span className="num">150 4928799</span>
            <br />
            {/* <button id="btn3" className="mt-3" onClick={Paddle}>
              Read More
            </button> */}
            {about && <About/>}
          </div>
          <div className="col-12 col-lg-6 text-center mt-5">
            <div
              type="button"
              className="btn position-relative bg-transparent "
            >
              <span className="position-absolute bottom-10 ba-pic">
                <img
                  src={pic}
                  alt=""
                  id="pic"
                  width={"200px"}
                  style={{ borderRadius: "50%", margin: "300px -100px" }}
                />
              </span>
              <img src={Hotel} alt="" className="hotel" width={"500px"} />
              <span className="position-absolute top-0 right-0 translate-middle  rounded-circle">
                <img src={badgebg} alt="" id="badgebg" />
                <img src={badge} alt="" id="bags" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* SPECIAL DISH */}
      <div className="container-fluid" id="about">
        <div className="row special">
          <div className="col-12 col-lg-6 text-center">
            <img src={special} alt="" style={{ width:"300px"}} />
          </div>
          <div className="col-12 col-lg-6">
            <p id="main-head">
              <small>SPECIAL DISH</small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <h1 style={{ fontFamily: "Times, serif" }}>Lobster Tortellini</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.Obcaecati, eos nemo. Impediteius nihil sit doloribus
              accusamus sapiente ani quidem non ad aperiam recusandae optio
              asperiores temporibus provident voluptas, saepe hic repellat unde,
              voluptatem aut corrupti? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit.Obcaecati, eos nemo. Impediteius nihil sit
              doloribus accusamus sapiente ani quidem non ad aperiam recusandae
              optio asperiores temporibus provident voluptas, saepe hic repellat
              unde, voluptatem aut corrupti? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.Obcaecati, eos nemo. Impediteius
              nihil sit doloribus accusamus sapiente ani quidem non ad aperiam
              recusandae optio asperiores temporibus provident voluptas, saepe
              hic repellat unde, voluptatem aut corrupti?
            </p>
            <span className="num">150 4928799</span>
            <br />
            <button id="btn3" className="mt-3" onClick={Paddle}>
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* SPECIAL SELECTION */}
      <div className="container-fluid fourth-bg" id="menu">
        <div className="row ">
          <div className="col text-center">
            <p id="main-head">
              <small>SPECIAL SELECTION</small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <p id="main-2-head">Delicious Menu</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 foods">
            <img src={menu_1} alt="" />
            <p>
              <b>Greek Salad</b>
              <span className="mx-5">$25.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi{" "}
            </p>
            <img src={menu_2} alt="" />
            <p>
              <b>Butternut Pumpkin</b>
              <span className="mx-4">$10.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi
            </p>
            <img src={menu_3} alt="" />
            <p>
              <b>Olivas Rellenas</b>
              <span className="mx-5">$15.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi
            </p>
          </div>
          <div className="col-12 col-md-6 foods mt-4">
            <img src={menu_4} alt="" />
            <p>
              <b>Olivas Rellenas</b>
              <span className="mx-5">$50.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi
            </p>
            <img src={menu_5} alt="" />
            <p>
              <b>Olivas Rellenas</b>
              <span className="mx-5">$65.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi
            </p>
            <img src={menu_6} alt="" />
            <p>
              <b>Olivas Rellenas</b>
              <span className="mx-5">$45.50</span>
              <hr />
              Lorem ipsum dolor sit, amet consectetur adi
            </p>
          </div>
          <div className="col text-center mt-3">
            <p>
              During Winter Daily From <span>7:00AM</span> to{" "}
              <span>10:00PM</span>
            </p>
            <button id="btn3" className="mt-3" onClick={() => setMenu(true)}>
              View All Menu
            </button>
            {menu && <Menu />}
          </div>
        </div>
      </div>
      {/* OUR SKILLED CHEFS */}
      <div className="container-fluid chefs mini-menu" id="chefs">
        <div className="row">
          <div className="col">
            <img src="..//images/shape-2.png" alt="" id="shape-2" />
            <p id="main-head">
              <small>
                <span>WHY CHOOSE US</span>
              </small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <p id="main-2-head">Our Skilled Chefs</p>
          </div>
        </div>
        <div className="row">
          <div className="col inter">
            <div>
              <img src={tasty} alt="" width={"100px"} height={"100px"} />
              <h5>
                <span>Caral Jonson</span>
              </h5>
            </div>
            <div>
              <img src={avate} alt="" width={"100px"} height={"100px"} />
              <h5>
                <span>Lance Vance</span>
              </h5>
            </div>
            <div>
              <img src={lady} alt="" width={"100px"} height={"100px"} />
              <h5>
                <span>Michel Magnet</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT US */}
      <div className="container-fluid fourth-bg" id="contact">
        <div className="row">
          <div className="col text-center">
            <img src="..//images/shape-2.png" alt="" id="shape-2" />
            <p id="main-head">
              <small>
                <span>CONTACT US</span>
              </small>
            </p>
            <img src={Seperator} alt="" id="seperator" width="100px" />
            <p id="main-2-head">You Can Reach Us</p>
          </div>
        </div>
        <div className="container mini-menu callme">
          <div className="row">
            <div className="col-12 col-md-9">
              <h1 className="mt-2">
                <b>Online Reservation</b>
              </h1>
              <div className="row">
                <div className="col foam">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="contact m-1"
                      placeholder="YOUR NAME"
                      typeof="submit"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="from_name"
                      id=""
                      className="contact m-1"
                      placeholder="E-MAIL ADDRESS"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                    <br />
                    <select
                      name="cars"
                      id="cars"
                      className="contant m-1"
                      placeholder="Person"
                    >
                      <option value="volvo">Person 1</option>
                      <option value="volvo">Person 2</option>
                      <option value="volvo">Person 3</option>
                      <option value="volvo">Person 4</option>
                      <option value="volvo">Person 5</option>
                      <option value="volvo">Person 6</option>
                    </select>
                    <input
                      type="date"
                      name="from_name"
                      id=""
                      className="contact m-1"
                      placeholder="Date"
                    />
                    <select
                      name="cars"
                      id="cars"
                      className="contant m-1"
                      placeholder="Person"
                    >
                      <option value="volvo">Time</option>
                      <option value="volvo">8:00 PM</option>
                      <option value="volvo">9:00 PM</option>
                      <option value="volvo">10:00 PM</option>
                    </select>
                    <br />
                    <button className="mt-3 mb-3" id="btn3" onClick={Change}>
                      Book A Table
                    </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 jaii">
              <div className="row">
                <div className="col location">
                  <span>BOOKING REQUEST</span>
                  <b>051 4902880</b>
                  <span>LOCATION</span>
                  <p>
                    <ion-icon name="location-outline"></ion-icon>Resturent
                    St,Delicious City,London 9578 , UK
                  </p>
                  <span>TIMING</span>
                  <p>
                    <ion-icon name="time-outline"></ion-icon>Daily:8:00am to
                    10:00pm
                  </p>
                  <span>PHONE</span>
                  <p>
                    <ion-icon name="call-outline"></ion-icon>+1 123 456 7890
                  </p>
                  <span>E-mail</span>
                  <p>
                    <ion-icon name="mail-outline"></ion-icon>
                    Booking@Resturent.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="container-fluid">
        <div className="row mini-menu">
          <div className="col-12 col-md-4 mt-3 mb-3">
            <span>
              <b>Download Our App</b>
            </span>
            <br />
            <img src={playstore} alt="" width={"150px"} />
            <img src={appstore} alt="" width={"150px"} />
          </div>
          <div className="col-12 col-md-4 text-center mt-3 mb-3">
            <img src={logo} alt="" />
            <p>
              Our Purpose is to sustainable Make the Pleasure and Benefits of
              sports Accessible to the Many
            </p>
          </div>
          <div className="col-12 col-md-4 foot-menu mt-3 mb-3">
            <b>Follow Us On</b>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>InstaGram</p>
            <p>TikTok</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
