import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/common.scss"
import BackPetnuri from '@/assets/BackPetnuri.webp'
import BackDog from '@/assets/BackDog.webp'
import Person from '@/assets/person.svg'
import DogIcon from '@/assets/dogicon.svg'
import Question from '@/assets/question-circle-bold.svg'
import Chat from '@/assets/chat.svg'


interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }:BackgroundProps) => {

  const quetion = "https://petnuri.notion.site/e5e6f86a0f3449819df35f848cdf9b71?pvs=4"
  const infoUse = "https://petnuri.notion.site/644c4d55df524a22b5fd3bba360ad1ec?pvs=4"
  const chatBot = "http://pf.kakao.com/_RfxnuG/chat";

  const navigate = useNavigate()
  const onChallenge = () => navigate('/challenge')
  const onQuetion = () => window.open(quetion)
  const onInfoUse = () => window.open(infoUse)
  const onChatBot = () => window.open(chatBot)
  return (
    <>
      <div className="back_container">
        <div className="background">
          <img src={BackPetnuri} alt="" className="petnuri"/>
          <img src={BackDog} alt="" className="backdog"/>
          <button className="navChallenge" onClick={onChallenge}>챌린지 바로가기</button>
          <div className="explain">
            <button onClick={onQuetion}> <img src={Person} alt="" /> 회원 혜택</button>
            <button onClick={onInfoUse}> <img src={DogIcon} alt="" /> 펫누리 이용방법</button>
            <button onClick={onQuetion}> <img src={Question} alt="" /> 챌린지란?</button>
          </div>
        </div>
        <button className="back_chat" onClick={onChatBot}> <img src={Chat} alt="" />챗봇 상담하기</button>
        <div className="back_content">{children}</div>
      </div>
    </>
  );
};
export default Background;
