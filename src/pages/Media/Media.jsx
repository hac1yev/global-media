// import React from "react";
// import "./Media.css";
// import galleryCard from "../../assets/Home/gallerycard.png";
// import sitatCard from "../../assets/Home/sitat.png";
// // import newsCard from "../../assets/Home/new.png";
// import { Link } from "react-router-dom";
// import more from '../../assets/Home/more.svg'

// const Media = () => {
//   return (
//     <>
//       <div className="media-section">
//         <div className="media-left-div"></div>
//         <div className="container">
//           <div className="media-content">
//             <div className="media-content-div"></div>
//             <span className="media-red-circle"></span>
//             <h3>Qalereya</h3>
//             <button className="gallery-more">
//               {" "}
//               <img src={more} alt="" /> &nbsp; Daha Çox
//             </button>
//           </div>
//           <div className="gallery-con">
//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>


//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>

//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>

//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>

//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>

//             <a className="gallery-card"
//               data-fancybox="gallery"
//               data-src={galleryCard}
//               data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
//               href="/" >
//               <div className="gallery-img">
//                 <img src={galleryCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </a>
//           </div>
//           <hr />
//         </div>
//         <div className="media-right-div"></div>
//       </div>

//       <div className="media-section">
//         <div className="media-left-div"></div>
//         <div className="container">
//           <div className="media-content">
//             <div className="media-content-div"></div>
//             <span className="media-red-circle"></span>
//             <h3>Sitatlar</h3>
//             <button className="gallery-more">
//               {" "}
//               <img src={more} alt="" /> &nbsp; Daha Çox
//             </button>
//           </div>
//           <div className="gallery-con">
//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>

//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>

//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>

//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>

//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>

//             <Link to={''} className="gallery-card">
//               <div className="gallery-img">
//                 <img src={sitatCard} alt="" />
//                 <p className="time-p">XX-XX-XXXX</p>
//               </div>
//               <p className="gallery-info">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum id sem quis quam laoreet bibendum.
//               </p>
//             </Link>
//           </div>
//           <hr />
//         </div>
//         <div className="media-right-div"></div>
//       </div>
//     </>
//   );
// };

// export default Media;
