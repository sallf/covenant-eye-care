import React from 'react';
import { Link } from 'react-router-dom';

const eyeCareImg = require('$images/services/services-eye-care.svg');
const opticalImg = require('$images/services/services-optical.svg');
const surgeryImg = require('$images/services/services-surgery.svg');

const servicesData = [
  {
    title: 'Eye Exams',
    copy: 'We provide eye exams for all ages. A complete eye exam can provide early diagnosis and prevention of many different diseases of the eye.',
    link: 'services#anchorEyeExams',
    img: eyeCareImg,
  },
  {
    title: 'Surgery',
    copy: 'Our doctors perform many different eye surgeries including cataract surgery, laser vision correction (LASIK and PRK), and cosmetic lid and brow surgeries.',
    link: 'services#anchorSurgery',
    img: surgeryImg,
  },
  {
    title: 'Eyewear Center',
    copy: 'Our Optical Shop has a wide selection of both designer and budget frames, sunglasses, and contact lenses. Let our knowledgeable staff help you choose the perfect pair!',
    link: 'services#anchorOptical',
    img: opticalImg,
  },
];

const Services = () => {
  return (
    <div className="container">
      <div className="row section text-center">
        <div className="col-12">
          <h2 className="section-heading">Our Services</h2>
        </div>
        {
          servicesData.map((service) => (
            <div
              key={service.title}
              className="col-12 col-sm-6 col-lg-4"
            >
              <Link
                to={service.link}
                className="card-container"
              >
                <img
                  src={service.img}
                  className="card-img"
                  alt=""
                />
                <div className="card-text">
                  <h3 className="container-heading">{service.title}</h3>
                  <p>{service.copy}</p>
                  <p className="link-primary">Learn More</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Services.defaultProps = {

};

Services.propTypes = {

};

export default Services;
