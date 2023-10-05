import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState } from "@/store/petTalkState";
import { useFreetalkList } from "@/lib/hooks/pettalkList";
import { formatDate } from "@/utils/DateFormat";
import Head from "@/components/Head";
import { useState, useEffect } from "react";
import heart from "@/assets/heart_18px.svg";
import talk from "@/assets/talk_18px.svg";
import view from "@/assets/view_18px.svg";
import floating from "@/assets/X.png";
import concern_icon from "@/assets/concerns_icon.svg";
import freetalk_icon from "@/assets/freetalk_icon.svg";
import default_user from "@/assets/user.png";
import banner from "@/assets/키트배너.png";

const FreeTalk = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [selectedPet, setSelectedPet] = useState("DOG");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFloating = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { data } = useFreetalkList(selectedPet, 2);
  console.log("자유수다 리스트", data);

  const handlePetSelect = (e: { target: { value: string } }) => {
    const selectedValue = e.target.value;
    setSelectedPet(selectedValue);

    if (selectedValue === "DOG") {
      setSelectedPet("DOG");
    } else if (selectedValue === "CAT") {
      setSelectedPet("CAT");
    }
  };

  useEffect(() => {
    if (location.pathname === "/petTalk") {
      setActiveTab("전체");
    } else if (location.pathname === "/petTalk/concern") {
      setActiveTab("고민상담");
    } else if (location.pathname === "/petTalk/freetalk") {
      setActiveTab("자유수다");
    }
  }, [location.pathname, setActiveTab]);

  return (
    <>
      <Background>
        <div className={styles.pettalk_area}>
          <Head>
            <div className={styles.headTab}>
              <div className={styles.head_menu}>
                <Link
                  to="/petTalk"
                  className={`${styles.head_item} ${
                    activeTab === "전체" ? styles.tab_active : ""
                  }`}
                >
                  전체
                </Link>
                <Link
                  to="/petTalk/concern"
                  className={`${styles.head_item} ${
                    activeTab === "고민상담" ? styles.tab_active : ""
                  }`}
                >
                  고민상담
                </Link>
                <Link
                  to="/petTalk/freetalk"
                  className={`${styles.head_item} ${
                    activeTab === "자유수다" ? styles.tab_active : ""
                  }`}
                >
                  자유수다
                </Link>
              </div>
            </div>
          </Head>

          <div className={styles.content_wrapper}>
            <div className={styles.select_wrap}>
              <select
                className={styles.select_pet}
                name="강아지"
                value={selectedPet}
                onChange={handlePetSelect}
              >
                <option value="강아지">강아지</option>
                <option value="고양이">고양이</option>
              </select>
            </div>

            <div className={styles.banner}>
              <img src={banner} alt="프로모션 배너" />
            </div>

            <div className={styles.select_wrap}>
              <select className={styles.select_sort} name="인기순">
                <option value="인기순">인기순</option>
                <option value="최신순">최신순</option>
              </select>
            </div>

            <div className={styles.talk_list}>
              {data?.map((item: PetTalkItem) => (
                <div className={styles.border} key={item.id}>
                  <Link to={`/petTalk/${item.id}`}>
                    <div className={styles.item}>
                      <div className={styles.user_info}>
                        {item.writer.profileImageUrl === null ? (
                          <img src={default_user} alt="default-img" />
                        ) : (
                          <img
                            src={item.writer.profileImageUrl}
                            alt="profile-img"
                          />
                        )}
                        <span className={styles.user_name}>
                          {item.writer.nickname}
                        </span>
                        <span className={styles.date}>
                          ・ {formatDate(item.createdAt)}
                        </span>
                      </div>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.text_wrapper}>
                        <div className={styles.content_text}>
                          {item.content}
                        </div>
                        {item.content.split("\n").length > 2 && (
                          <button className={styles.plus_button}>더보기</button>
                        )}
                      </div>

                      {item.thumbnail === null ? null : (
                        <div className={styles.content_img}>
                          <img src={item.thumbnail} alt="thumbnail" />
                        </div>
                      )}

                      <div className={styles.response_wrapper}>
                        <div className={styles.icon_area}>
                          <img src={heart} alt="" />
                          <span>{item.totalEmojiCount}</span>
                        </div>
                        <div className={styles.icon_area}>
                          <img src={talk} alt="" />
                          <span>{item.replyCount}</span>
                        </div>
                        <div className={styles.icon_area}>
                          <img src={view} alt="" />
                          <span>{item.viewCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div
              className={`${styles.modal_backdrop} ${
                isMenuOpen ? styles.active : ""
              }`}
            />
            <button
              className={`${styles.floating} ${
                isMenuOpen ? styles.active : ""
              }`}
              onClick={handleFloating}
            >
              <img src={floating} alt="" />
            </button>
            {isMenuOpen && (
              <div className={styles.menu}>
                <Link to="/petTalk/concernwrite">
                  <button className={styles.item}>
                    <img src={concern_icon} alt="" />
                    <span>고민상담</span>
                  </button>
                </Link>
                <Link to="/petTalk/freetalkwrite">
                  <button className={styles.item}>
                    <img src={freetalk_icon} alt="" />
                    <span>자유수다</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <MainTab />
        </div>
      </Background>
    </>
  );
};
export default FreeTalk;
