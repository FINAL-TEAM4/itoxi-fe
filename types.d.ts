interface challengeHead {
  head: string;
}

interface challengeBanner {
  bannerImg: string;
}

interface challengeContents {
  mainTitle: string;
  subTitle: string;
  howTitle: string;
  howInfo: string;
  periodTitle: string;
  periodInfo: string;
  pointTitle: string;
  pointInfo: string;
}

interface challengeJoin {
  participantsImg: string;
  participantsName: string;
}

interface joinList {
  challengeId?: number;
  imageId?: number;
  imageUrl: string;
  nickName: string;
  // process: string;
}
interface Item {
  thumbnail?: string;
  name?: string;
  subName?: string;
  challengeReview?: string;
}

interface HomeEventListProps {
  item: Item | undefined; 
  onClick: () => void; 
}

//데일리 이벤트 조회, 챌린지 홈, 어드민에서 사용
interface Review {
  reviewUserId: number;
  reviewUserNickname: string;
  reviewImgUrl: string;
}

type ChallengeJoinProps = {
  join: Review[];
};

interface ChallengeData {
  challengeId: number;
  challengeName: string;
  challengeReview: string;
  thumbnail: string;
  userId: number;
  review: Review[];
  status: boolean;
}

interface EventChallengeData {
  thumbnail: string
  challengeId: number
  name: string
  subName: string
  authMethod: string
  payment: string
  startDate: string
  endDate: string
  status: string
  rewardStatus: string
}

//펫톡

interface PetTalkMainPage {
  petTalkId : number;
  thumbnail : string;
  title : string;
  content : string;
  createdAt : string;
  viewCount : number;
  likeCount : number;
  replyCount : number;
  isLiked : true;
  writer : writer;
}

interface writer {
  writerId : number;
  profileImageUrl : string;
  nickname : string;
  rank : string;
}