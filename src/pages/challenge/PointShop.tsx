import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from '@/styles/pointshop.module.scss'
import kitbanner from '@/assets/kitbanner.webp'
import product1 from '@/assets/product1.svg'
import product2 from '@/assets/product2.svg'
import product3 from '@/assets/product3.svg'
import product4 from '@/assets/product4.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import Header from '@/components/Head'
import ChallengeProfile from "@/components/challenge/ChallengeProfile";
import { simpleToast } from "@/utils/ToastUtils";
import KitModal from "@/components/modal/KitModal";
import { useSetRecoilState } from "recoil";
import { kitModalState } from "@/store/challengeState";

const PointShop = () => {

  const wrong = () => simpleToast('추후 오픈 예정입니다');
  const setKitOpen = useSetRecoilState(kitModalState);

  return (
    <>
      <Background>
        <Header>
        <div className={styles.head}>
          <Link 
            to="/challenge">
            <IoIosArrowBack size="24" className={styles.io}/>
          </Link>
          <span>포인트샵</span>
          <div className={styles.eorl}></div>
        </div>
        </Header>
        <ChallengeProfile />

        <div className={styles.ad} onClick={()=>setKitOpen(true)}>
          <img src={kitbanner} alt="" />
          <div className={styles.banner}>프로모션 배너</div>
          <div className={styles.banner_sub}>프로모션 배너 서브텍스트</div>
        </div>
        <KitModal />

        <div className={styles.p_title}>큰 타이틀</div>

        <label className={styles.product} onClick={wrong}>
          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product1} alt="product1" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 펫 급식기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product2} alt="product2" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 펫 급수기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product3} alt="product3" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누르면 나오는 간식 발사기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product4} alt="product4" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 진공 사료통</div>
            </div>
          </div>
        </label>
      </Background>
      <MainTab />
    </>
  );
};
export default PointShop;
