import styles from '@/styles/challengeprofile.module.scss'
import credit from "@/assets/credit.svg";

const ChallengeProfile = () => {

  return (
    <>
      <div className={styles.name}>
        <div className={styles.img}></div>
        <div className={styles.nickname}>닉네임</div>
        <div className={styles.petname}>꿍이집사</div>
        <div className={styles.date}> 23.03.06</div>
      </div>
      <div className={styles.credit}>
        1220 크레딧
        <img src={credit} alt="credit" />
      </div>
    </>
  )
}

export default ChallengeProfile