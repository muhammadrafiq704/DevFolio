// // src/components/Testimonials.js

// import React from "react";
// import "./swiper/swiper-bundle.min.css"

// import { Swiper, SwiperSlide } from "swiper/react";


// const Testimonials = () => {
//   const testimonialsData = [
//     {
//       name: "Saul Goodman",
//       title: "Ceo & Founder",
//       content:
//         "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
//       image: "assets/img/testimonials/testimonials-1.jpg",
//     },
//     {
//       name: "Sara Wilsson",
//       title: "Designer",
//       content:
//         "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
//       image: "assets/img/testimonials/testimonials-2.jpg",
//     },
//     {
//       name: "Jena Karlis",
//       title: "Store Owner",
//       content:
//         "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
//       image: "assets/img/testimonials/testimonials-3.jpg",
//     },
//     {
//       name: "Matt Brandon",
//       title: "Freelancer",
//       content:
//         "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
//       image: "assets/img/testimonials/testimonials-4.jpg",
//     },
//     {
//       name: "John Larson",
//       title: "Entrepreneur",
//       content:
//         "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
//       image: "assets/img/testimonials/testimonials-5.jpg",
//     },
//   ];

//   return (
//     <section id="testimonials" className="testimonials section-bg">
//       <div className="container" data-aos="fade-up">
//         <div className="section-title">
//           <h2>Testimonials</h2>
//         </div>

//         <Swiper
//           className="testimonials-slider swiper"
//           data-aos="fade-up"
//           data-aos-delay="100"
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//         >
//           {testimonialsData.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-item">
//                 <img
//                   src={testimonial.image}
//                   className="testimonial-img"
//                   alt=""
//                 />
//                 <h3>{testimonial.name}</h3>
//                 <h4>{testimonial.title}</h4>
//                 <p>
//                   <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                   {testimonial.content}
//                   <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
