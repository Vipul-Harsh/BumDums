import { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';

const InstaImages = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="ins-gallery-area padding-top-120 padding-bottom-120">
            <div className="container">
                <div className="common-title-area text-center padding-bottom-60 wow fadeInUp">
                    <h3>Bum dums</h3>
                    <h2>
                        Ambiance & <span> Interiors </span>
                    </h2>
                </div>
                <div className="ins-gallery-active">
                    <Slider {...settings2}>
                        {["/assets/images/img/inst1.jpg", "/assets/images/img/inst2.jpg", "/assets/images/img/inst3.jpg", "/assets/images/img/inst4.jpg", "/assets/images/img/inst5.jpg"].map((imageUrl, index) => (
                            <div className="single-inst-item" key={index}>
                                <img src={imageUrl} alt="" onClick={() => openModal(imageUrl)} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-content">
                    <img src={selectedImage} alt="Popup" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default InstaImages;
