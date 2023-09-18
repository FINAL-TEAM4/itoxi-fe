import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DeliveryBS from "./DeliveryBS";
import styles from "@/styles/challengejoin.module.scss";
import { useState, useEffect} from 'react';
import { useScroll } from "@/utils/Scroll";

const Contest = () => {
  const scrollRef= useScroll();
  const [joinList, setJoinList] = useState<joinList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Chamyo.json');
        const data = await response.json();
        setJoinList(data.joinList);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
   }, []);

  const head: challengeHead = {
    head: "천하제일 집사대회",
  };

  const banner: challengeBanner = {
    bannerImg: "https://www.naver.com",
  };

  const contents: challengeContents = {
    mainTitle: "천하제일 집사대회",
    subTitle: "천하제일 집사대회",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  return (
    <>
      <Background>
        <ChallengeHead head={head} />
        <ChallengeBanner banner={banner} />
        <ChallengeContents contents={contents} />
        <span className={styles.title}>다른 집사들도 참여중이에요!</span>
        <div className={styles.participants} ref={scrollRef}>
          {joinList.map((joinItem, index) =>
              <ChallengeJoin 
                key={index}
                join={{
                  participantsImg: joinItem.images,
                  participantsName: joinItem.nickName
                }} 
              />
          )}
        </div>
        <JoinButton />
        <DeliveryBS />
        <MainTab />
      </Background>
    </>
  );
};

export default Contest;
