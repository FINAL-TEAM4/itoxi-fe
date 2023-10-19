import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/home.module.scss";
import KitModal from "@/components/modal/KitModal";
import LoginModal from "@/components/modal/LoginModal";
import HomeEventList from "@/components/HomeEventList";
import dog from '@/assets/defaultImage.png'
import defaultImage from '@/assets/defaultImage.png'
import kitbanner from '@/assets/kitbanner.webp'
import { useSetRecoilState } from "recoil";
import { kitModalState, loginModalState } from "@/store/challengeState";
import { useScrollUl } from "@/utils/Scroll";
import { useState,useEffect } from 'react'
import { getCookie } from "@/utils/Cookie";
import { HomeApi } from "@/lib/apis/userApi";

const Home = () => {
  const setKitOpen = useSetRecoilState(kitModalState);
  const setLoginOpen = useSetRecoilState(loginModalState);
  const scrollRef = useScrollUl()
  const [petTalkList, setPetTalkList] = useState<PetTalk[]>([]);
  const [daily, setDaily] = useState<DailyChallenge>();
  const [cheonHa, setCheonHa] = useState<EventChallenge>();
  const [yanado, setYanado] = useState<EventChallenge>();
  const [petProfile, setPetProfile] = useState<Pet[]>([])
  const [activePetName, setActivePetName] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Pet | null>(null);
  const token = getCookie("jwtToken")

  useEffect(() => {
    const HomeData = async () => {
      try {
        const data = await HomeApi();
        setPetProfile(data.content.petList);
        setPetTalkList(data.content.petTalkList);
        setDaily(data.content.challengeList.dailyChallenge)
        setCheonHa(data.content.challengeList.rewardChallengeList[0])
        setYanado(data.content.challengeList.rewardChallengeList[1])
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    HomeData();
  }, []);

   useEffect(() => {
    let selectedProfileFromList = petProfile.find(profile => profile.isSelected);

    if (!selectedProfileFromList && petProfile.length > 0) 
    selectedProfileFromList = petProfile[0];
     
    if (selectedProfileFromList) {
      setActivePetName(selectedProfileFromList.petName);
      setSelectedProfile(selectedProfileFromList); 
    } else {
      setSelectedProfile({
        id: null,
        image: dog,
        petName: '익명의 집사',
        petGender: '',
        petAge: null
      });
    }
  }, [petProfile]);

  const handleItemClick = (petName: string) => {
    setActivePetName(petName);
    setSelectedProfile(petProfile.find(profile => profile.petName === petName) || null);
  }

  const openLoginModal = (callback: () => void) => {
    if (!token) {
      setLoginOpen(true);
    } else {
      callback();
    }
  };

  const navigate = useNavigate();
  const onChallenge = () => navigate(`challenge`)
  const onYanado = () => navigate(`ecyanado`)
  const onCheonHa = () => navigate(`contest`)
  const onDailyChallenge = () => navigate(`dailychallenge${daily?.id}`)
  const onPettalk = () => navigate(`PetTalk`)
  const onPettalkList = (id:number) => navigate(`petTalk/${id}`)
  const onPetProfileAdd = () => navigate(`petprofileadd`)
  const onPetProfileModify = () => navigate(`petprofilemodify`, { state: { profile: selectedProfile } })

  return (
    <>
      <Background>
        <div className={styles.head}>
          <span>홈</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.profile}>
            <div className={styles.tabmenu}>
              {petProfile.map((profile) =>
                <div 
                  key={profile.id} 
                  onClick={() => handleItemClick(profile.petName)}
                  className={activePetName === profile.petName ? styles.active : styles.add}
                >
                  <img src={profile?.image || defaultImage} alt="" className={styles.icon}/>
                  <span>{profile.petName}</span>
                </div>
              )}
              {petProfile.length < 3 && (
                <div role="button" className={styles.add} onClick={()=>{openLoginModal(onPetProfileAdd)}}>
                  <div className={styles.icon}></div>
                  <span>추가하기</span>
                </div>
              )}
            </div>
            <div className={styles.detail}>
              {selectedProfile && (
              <div className={styles.info}>
                <img src={selectedProfile?.image || defaultImage} alt="" className={styles.photo}/>
                <div className={styles.nga}>
                  {/* 데이터가 없을 때는 이름 전체를 출력 */}
                  <span className={styles.name}> 
                    {(selectedProfile?.petName && petProfile.length > 0 && selectedProfile.petName.length > 4)
                    ? selectedProfile.petName.substring(0,4)
                    : selectedProfile?.petName}
                  </span>
                  {selectedProfile.petGender && selectedProfile.petAge &&
                   <>
                     <span className={styles.gender}> · {selectedProfile?.petGender}</span>
                     <span className={styles.age}>({selectedProfile?.petAge}세)</span>
                   </>
                 }
               </div>
               {/* 데이터가 있을 때는 "수정하기", 없을 때는 "등록하기"를 표시 */}
               <div className={styles.modify} onClick={() => 
                petProfile.length > 0 ? openLoginModal(onPetProfileModify) : openLoginModal(onPetProfileAdd)}>
                 {petProfile.length > 0 ? '수정하기' : '등록하기'}
               </div>
             </div>
           )}
            </div>
          </div>
          <div className={styles.recommend}>
            <div className={styles.title}>
              <h3>추천 챌린지</h3>
              <div role="button" onClick={onChallenge}>더보기</div>
            </div>
            <ul className={styles.list} ref={scrollRef} >
              <HomeEventList item={daily} onClick={onDailyChallenge} />
              <HomeEventList item={cheonHa} onClick={onCheonHa} />
              <HomeEventList item={yanado} onClick={onYanado} />
            </ul>
          </div>

          <div className={styles.hot}>
            <div className={styles.title}>
              <h3>펫톡 인기글</h3>
              <div role="button" onClick={onPettalk}>더보기</div>
            </div>
            <ul className={styles.list}>
              {petTalkList.slice(0, 4).map((item) => {
                const date = new Date(item.createdAt);
                const hours = ("0" + date.getHours()).slice(-2);
                const minutes = ("0" + date.getMinutes()).slice(-2);
                let thumbnailSrc = item.thumbnail;
                if (thumbnailSrc === null) {
                  thumbnailSrc = defaultImage;
                }

                return (
                  <li key={item.id}>
                    <div className={styles.content}>
                      <img src={thumbnailSrc} className={styles.photo} alt="thumbnail" />
                      <div className={styles.detail}>
                        <div className={styles.info}>
                          <span onClick={() => onPettalkList(item.id)}>{item.title}</span>
                        </div>
                        <div className={styles.user}>
                          <span>{item.writer}</span>
                          <span>&#183;</span>
                          <p>{`${hours}:${minutes}`}</p> 
                        </div>
                      </div>
                      <div className={styles.icon} onClick={() => onPettalkList(item.id)}>
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </li>)
              })}
            </ul> 
          </div>
          
          <div className={styles.kit}>
            <div className={styles.title}> 검진 키트 결과 보기 </div>
            <img src={kitbanner} alt="" className={styles.image} onClick={() => setKitOpen(true)}/>
          </div>   
        </div>
        <MainTab />
        <LoginModal />
        <KitModal/> 
      </Background>
    </>
  );
};
export default Home;
