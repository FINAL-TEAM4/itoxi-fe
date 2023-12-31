import { useState, useEffect, ChangeEvent } from "react";
import Background from "@/components/Background";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import arrow_right_small from "@/assets/arrow_right_small.svg";
import check_circle_gray from "@/assets/check_circle_gray.svg";
import check_circle_blue from "@/assets/check_circle_blue.svg";
import styles from "@/styles/signup.module.scss";
import ServiceHBS from "@/pages/signup/ServiceHBS";
import PrivacyHBS from "@/pages/signup/PrivacyHBS";
import { useSetRecoilState } from "recoil";
import { serviceSheetState, privacySheetState } from "@/store/signupState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { join } from "@/lib/apis/userApi";
import { setCookie } from "@/utils/Cookie";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState<boolean>(false);

  const setserviceBottomIsOpen = useSetRecoilState(serviceSheetState);
  const setprivacyBottomIsOpen = useSetRecoilState(privacySheetState);

  const [privacyVisible, setPrivacyVisible] = useState(true);
  const [serviceVisible, setServiceVisible] = useState(true);

  const [isAgreeAll, setIsAgreeAll] = useState<boolean>(false);
  const [isServiceAgreed, setIsServiceAgreed] = useState<boolean>(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState<boolean>(false);

  const [referralCode, setReferralCode] = useState<string>("");
  const [referralCodeError, setReferralCodeError] = useState<string>("");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const isAllAgreed = isServiceAgreed && isPrivacyAgreed;
  const isButtonEnabled =
    isNicknameValid && !nameError && isDuplicateChecked && isAllAgreed || referralCode;

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleAgreeButtonClick = async () => {
    if (isButtonEnabled) {
      try {
        const response = await join({
          email: localStorage.getItem('email'),
          nickname: name,
          referralCode: referralCode,
          isAgreed: isAllAgreed,
        });

        const { jwtToken, refreshToken } = response.data;

        setCookie("jwtToken", jwtToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/onboarding");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.status === 400) {
            alert("이미 가입된 이메일입니다.");
            navigate("/");
          } else {
            console.error(error);
          }
        } else {
          console.error(error);
        }
      }
    }
  };
  
  const onHome = () => {
    navigate(`/`);
  };

  const handlePrivacyConfirm = () => {
    setPrivacyVisible(false);
  };

  const handleServiceConfirm = () => {
    setServiceVisible(false);
  };

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);

    const regex = /^[a-zA-Z가-힣]{2,10}$/;
    if (!regex.test(inputValue)) {
      setNameError("숫자, 특수문자, 공백 제외 최소 2자 ~ 10자 입력");
      setIsNicknameValid(false);
    } else {
      setNameError("");
      setIsNicknameValid(true);
    }

    // 중복 체크 다시 허용
    setIsDuplicateChecked(false);
  };

  const handleDuplicateCheck = async () => {
    try {
      const response = await axios.get("https://petnuri.shop/auth/nickname", {
        params: { nickname: name },
      });

      const { isExists } = response.data;

      if (isExists) {
        setIsNicknameValid(false);
        console.log("다른 닉네임을 사용해주세요: ", name);
      } else {
        setIsNicknameValid(true);
        console.log("사용 가능한 닉네임: ", name);
      }

      setIsDuplicateChecked(true);
    } catch (error) {
      console.error(error);
    }
  };

  // 개별 항목 체크 박스를 토글
  const handleServiceAgreeToggle = () => {
    setIsServiceAgreed((prev) => !prev);
  };

  const handlePrivacyAgreeToggle = () => {
    setIsPrivacyAgreed((prev) => !prev);
  };

  const handleMarketingAgreeToggle = () => {
    setIsMarketingAgreed((prev) => !prev);
  };

  // 약관 전체 동의를 토글
  const handleAgreeAllToggle = () => {
    const newAgreeAll = !isAgreeAll;
    setIsAgreeAll(newAgreeAll);

    // 전체 동의 상태에 따라 개별 항목도 변경
    setIsServiceAgreed(newAgreeAll);
    setIsPrivacyAgreed(newAgreeAll);
    setIsMarketingAgreed(newAgreeAll);
  };

  const handleReferralCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setReferralCode(inputValue);
    setReferralCodeError("");
  };

  const handleReferralCodeBlur = async () => {
    try {
      if (!referralCode) {
        setReferralCodeError("");
        console.log("No referral code provided.");
        return;
      }

      // 영문 대문자와 숫자 3글자를 포함한 8글자의 추천인 코드 검사
      const regex = /^[A-Z0-9]{8}$/;
      if (!regex.test(referralCode)) {
        setReferralCodeError("영문 대문자와 숫자 3글자를 포함한 8글자의 코드를 입력해주세요.");
        return;
      }

      const response = await axios.get("https://petnuri.shop/auth/referral", {
        params: { referralCode: referralCode },
      });

      const { isExists } = response.data;

      if (isExists) {
        setReferralCode(referralCode);
        console.log("사용 가능한 추천인 코드: ", referralCode);
      } else {
        setReferralCodeError(referralCode);
        console.log("해당 추천인 코드가 올바르지 않습니다.: ", referralCode);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Background>
        <div className={styles.head}>
          <div role="button" className={styles.prev}>
            <img src={arrow_left_mid} alt="prev" onClick={onHome} />
          </div>
          <p>카카오톡 회원가입</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.read}>
            <div className={styles.box}>
              <h2 className={styles.title}>이메일</h2>
              <input 
                value={email}
                readOnly 
              />
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>닉네임</h2>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={name}
                onChange={handleNicknameChange}
                className={`${isNicknameValid ? styles.valid : ""} ${
                  nameError || (isDuplicateChecked && !isNicknameValid) ? styles.invalid : ""
                }`}
              />
              <div
                role="button"
                className={`${styles.duplicate} ${
                  isNicknameValid ? styles.valid : ""
                }`}
                onClick={handleDuplicateCheck}
              >
                중복체크
              </div>
            </div>
            {isDuplicateChecked && isNicknameValid && !nameError && (
              <p className={styles.validText}>사용 가능합니다</p>
            )}
          </div>
          <div className={styles.box}>
            <p className={styles.title}>추천인 코드 (선택)</p>
            <input
              type="text"
              placeholder="추천인의 코드를 입력해주세요"
              value={referralCode}
              onChange={handleReferralCodeChange}
              onBlur={handleReferralCodeBlur}
              className={`${referralCodeError ? styles.invalid : ""}`}
            />
            {referralCodeError && (
              <p className={styles.nameerror} style={{ color: "$red_accent_F42A3B", fontSize: "12px" }}>
                {referralCodeError}
              </p>
            )}
          </div>
        </div>
        <div className={styles.agree}>
          <div className={styles.checktitle}>
            <img
              src={isAgreeAll ? check_circle_blue : check_circle_gray}
              alt="check_circle"
              className={styles.checkbig}
              onClick={handleAgreeAllToggle}
              role="button"
            />
            <h3>약관 전체 동의</h3>
          </div>
          <div className={styles.listbox}>
            <ul className={styles.list}>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={isServiceAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handleServiceAgreeToggle}
                    role="button"
                  />
                  <p>(필수) 서비스 이용약관 동의<span>*</span></p>
                </div>
                <div
                  role="button"
                  className={styles.right}
                  onClick={() => setserviceBottomIsOpen(true)} // Open ServiceHBS Bottom Sheet
                >
                  <img src={arrow_right_small} alt="arrow_right_small" onClick={() => setserviceBottomIsOpen(true)} />
                </div>
              </li>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={isPrivacyAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handlePrivacyAgreeToggle}
                    role="button"
                  />
                  <p>(필수) 개인정보 수집 및 이용 동의<span>*</span></p>
                </div>
                <div
                  role="button"
                  className={styles.right}
                  onClick={() => setprivacyBottomIsOpen(true)} // Open PrivacyHBS Bottom Sheet
                >
                  <img src={arrow_right_small} alt="arrow_right_small" onClick={() => setprivacyBottomIsOpen(true)} />
                </div>
              </li>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={isMarketingAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handleMarketingAgreeToggle}
                    role="button"
                  />
                  <div>
                    <p>(선택) 광고성 정보 수신 전체 동의</p>
                  </div>
                </div>
              </li>
              <div className={styles.desc}>
                마케팅 정보 수집에 동의하시면, 이벤트 및 할인 혜택 안내를 <br />
                누구보다 빠르게 받아보실 수 있어요!
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.agreebtn}>
          <div
            role="button"
            onClick={handleAgreeButtonClick}
            className={`${styles.agreeactive} ${isButtonEnabled ? "" : styles.disabled}`}
          >
            동의하고 가입하기
          </div>
        </div>
        {serviceVisible && <ServiceHBS onConfirm={handleServiceConfirm} />}
        {privacyVisible && <PrivacyHBS onConfirm={handlePrivacyConfirm} />}
      </Background>
    </>
  );
};

export default SignUp;