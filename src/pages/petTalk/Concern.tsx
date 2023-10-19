import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState, mapTabToNumber } from "@/store/petTalkState";
import { useConcernList } from "@/lib/hooks/pettalkList";
import { concernList } from "@/lib/apis/pettalkApi";
import { formatDate } from "@/utils/DateFormat";
import Head from "@/components/Head";
import { useEffect, useState } from "react";
import { useScrollDiv } from "@/utils/Scroll";
import heart from "@/assets/heart_18px.svg";
import talk from "@/assets/talk_18px.svg";
import view from "@/assets/view_18px.svg";
import floating from "@/assets/X.png";
import concern_icon from "@/assets/concerns_icon.svg";
import freetalk_icon from "@/assets/freetalk_icon.svg";
import default_user from "@/assets/user.png";
import banner from "@/assets/kitbanner.webp";

import LoginModal from "@/components/modal/LoginModal";
import { getCookie } from "@/utils/Cookie";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@/store/challengeState";

const Concern = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [selectedPet, setSelectedPet] = useState("DOG");
  const [selectedValue, setSelectedValue] = useState("BEST");
  const [subCategory, setSubCategory] = useState(1);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setLoginOpen = useSetRecoilState(loginModalState);
  const token = getCookie("jwtToken");

  const scrollRef = useScrollDiv();

  const handleFloating = () => {
    if (!token) {
      setLoginOpen(true);
    } else if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  };

  const { data, refetch } = useConcernList(
    selectedPet,
    selectedValue,
    mapTabToNumber(activeTab),
    subCategory
  );

  const handleChange = async (event: { target: { value: string } }) => {
    setSelectedValue(event.target.value);
    try {
      await concernList(
        selectedPet,
        selectedValue,
        mapTabToNumber(activeTab),
        subCategory
      );
      refetch();
    } catch (error) {
      console.error("데이터를 불러오는 중 에러 발생:", error);
    }
  };

  const handlePetSelect = async (e: { target: { value: string } }) => {
    setSelectedPet(e.target.value);
    try {
      await concernList(
        selectedPet,
        selectedValue,
        mapTabToNumber(activeTab),
        subCategory
      );
      refetch();
    } catch (error) {
      console.error("데이터를 불러오는 중 에러 발생:", error);
    }
  };

  const handleSubCategorySelect = (subCategory: number) => {
    setSubCategory(subCategory);
  };

  useEffect(() => {
    refetch();
  }, [refetch, activeTab, selectedPet, selectedValue, subCategory]);

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
            <div className={styles.category_container}>
              <div className={styles.category_wrapper} ref={scrollRef}>
                <button
                  className={subCategory === 1 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(1)}
                >
                  질병/질환
                </button>
                <button
                  className={subCategory === 2 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(2)}
                >
                  미용/패션
                </button>
                <button
                  className={subCategory === 3 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(3)}
                >
                  교육/훈련
                </button>
                <button
                  className={subCategory === 4 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(4)}
                >
                  양육/관리
                </button>
                <button
                  className={subCategory === 5 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(5)}
                >
                  반려용품
                </button>
              </div>
            </div>

            <div className={styles.select_wrap}>
              <select
                className={styles.select_pet}
                name="강아지"
                value={selectedPet}
                onChange={handlePetSelect}
              >
                <option value="DOG">강아지</option>
                <option value="CAT">고양이</option>
              </select>
            </div>

            <div className={styles.banner}>
              <img src={banner} alt="프로모션 배너" />
            </div>

            <div className={styles.select_wrap}>
              <select
                className={styles.select_sort}
                onChange={handleChange}
                name="인기순"
              >
                <option value="BEST">인기순</option>
                <option value="LATEST">최신순</option>
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
        <LoginModal />
      </Background>
    </>
  );
};
export default Concern;
