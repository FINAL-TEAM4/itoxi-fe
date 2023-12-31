import { useEffect, useState } from 'react';

const DailyGet = () => {
  const [challenges, setChallenges] = useState<DailyDetailList[]>([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Daily.json');
        const data = await response.json();
        setChallenges(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
   }, []);

   return (
     <>
       {challenges.map(challengeData => (
         <div key={challengeData.challengeId}>
           <h1>챌린지 이름 : {challengeData.challengeName}</h1>
           <p>챌린지 설명 : {challengeData.challengeReview}</p>
           <p>인증 상황 : {challengeData.status}</p>

           {challengeData.dailyReview.map((review) => (
             <div key={review.reviewUserId}>
               <h3>리뷰 유저 닉넴 : {review.reviewUserNickname}</h3>
               <img 
               src={review.reviewImgUrl} 
               alt="Review" 
               style={{ maxWidth: '100px', maxHeight: '100px' }}/>
             </div>
           ))}
         </div>
       ))}
     </>
   );
};

export default DailyGet;
