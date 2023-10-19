import Modal from './Modal';
import styles from '@/styles/kitmodal.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSetRecoilState } from 'recoil';
import { kitModalState } from "@/store/challengeState";
import kit1 from '@/assets/kit1.webp'
import kit2 from '@/assets/kit2.webp'
import kit3 from '@/assets/kit3.webp'
import kit4 from '@/assets/kit4.webp'
import kit5 from '@/assets/kit5.webp'


const KitModal = () => {
  const setIsOpen = useSetRecoilState(kitModalState); 
  const images = [kit1,kit2,kit3,kit4,kit5]
  
  const handleClose = () => {
    setIsOpen(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

return (
  <>
    <Modal height={562} modalType='kit'>
      <p className={styles.head}>펫 누리 비대면 검진키트</p>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {images.map((image, index) =>(
            <div key={index}>
              <img src={image} alt="" className={styles.img}/>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.okWrapper}>
        <button onClick={handleClose} className={styles.ok}> 닫기 </button>
      </div>
    </Modal>
  </>
 );
};

export default KitModal