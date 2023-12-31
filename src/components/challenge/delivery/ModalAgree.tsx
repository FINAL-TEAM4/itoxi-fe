import Modal from "react-modal";
import styles from "@/styles/challenge/deliverybs/modalagree.module.scss";

interface AgreeModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setAgreeCheck: (value: boolean) => void;
}

const ModalAgree: React.FC<AgreeModalProps> = ({
  isOpen,
  closeModal,
  setAgreeCheck,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "351px",
      height: "535px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const handleConfirmClick = () => {
    setAgreeCheck(true);

    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* 모달 내용 */}
      <div>
        <div className={styles.modalHead}>
          <span>챌린지 참가 규칙 및 약관</span>
        </div>
        <div className={styles.modalBody}>
          <span className={styles.title}>이용약관</span>
          <div className={styles.contents}>
            <div className={styles.lists}>제 1조(목적)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. 본 약관은 펫누리가 운영하는 챌린지에서 제공하는 서비스(이하
                  '서비스'라 합니다)를 이용함에 있어 당사자의 권리 의무 및
                  책임사항을 규정하는 것을 목적으로 합니다. <br />
                </li>
                <li>
                  2. PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
                  반하지 않는 한 본 약관을 준용합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 2조(정의)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. '챌린지'라 함은, '펫누리'가 재화 또는 용역을 이용자에게
                  제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 펫누리 내의
                  가상화폐를 획득, 지급, 거래하거나 자사 혹은 제휴사의 상품을
                  무료 혹은 조건부 무료로 제공받을 수 있도록 설정한 서비스를
                  말합니다.
                </li>
                <li>
                  2.'이용자'라 함은, '사이트'에 접속하여 본 약관에 따라 '회사'가
                  제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                </li>
                <li>
                  3. '회원'이라함은, '회사'에 개인정보를 제공하고 회원으로
                  등록한 자로서, '회사'의 서비스를 계속하여 이용할 수 있는 자를
                  말합니다.
                </li>
                <li>
                  4.'비회원'이라 함은, 회원으로 등록하지 않고, '회사'가 제공하는
                  서비스를 이용하는 자를 말합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 3조(약관 외 준칙)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  본 약관에서 정하지 아니한 사항은 법령 또는 회사가 정한
                  서비스의 개별 약관, 운영정책 및 규칙(이하 '세부지침'이라
                  합니다)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할
                  경우에는 세부지침이 우선합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 4조(약관의 명시 및 개정)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. '챌린지'는 이 약관과 관련한 내용을 ‘회원’이 쉽게 알 수
                  있도록 '참여 신청 페이지’의 ‘약관 전체 동의’ 화면에
                  게시합니다. 다만 본 약관의 내용은 '회원'이 기타 연결 화면을
                  통하여 확인할 수 있도록 할 수 있습니다.
                </li>
                <li>
                  2. '챌린지'는 '회원'이 약관에 동의하기에 앞서 약관에 정해진
                  내용 중 청약 철회, 배송 책임, 환불 조건 등과 같은 내용을
                  '이용자'가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을
                  통하여 '이용자'의 확인을 구합니다.
                </li>
                <li>
                  3. ‘챌린지'는 '전자상거래 등에서의 소비자 보호에 관한 법률',
                  '약관의 규제에 관한 법률','전자거래기본법', '정보통신망
                  이용촉진등에 관한 법률', '소비자보호법' 등 관련 법령(이하
                  '관계 법령'이라 합니다)에 위배되지 않는 범위내에서 본 약관을
                  개정할 수 있습니다.
                </li>
                <li>
                  4. ‘펫누리'가 본 약관을 개정하고자 할 경우, 적용일자 및
                  개정사유를 명시하여 현행약관과 함께 펫누리 서비스 초기화면에
                  그 적용일자 7일전부터 적용일자 전날까지 공지합니다. 다만,
                  '이용자'에게 불리한 내용으로 약관을 변경하는 경우 최소 30일
                  이상 유예기간을 두고 공지합니다.
                </li>
                <li>
                  5. ‘챌린지'가 본 약관을 개정한 경우, 개정 약관은 적용 일자
                  이후 체결되는 계약에만 적용되며 적용 일자 이전 체결된 계약에
                  대해서는 개정 전 약관이 적용됩니다. 다만, 이미 계약을 체결한
                  '이용자'가 개정약관의 내용을 적용 받고자 하는 뜻을 '펫누리'에
                  전달하고 '펫누리'가 여기에 동의한 경우 개정 약관을 적용합니다.
                </li>
                <li>
                  6. 본 약관에서 정하지 아니한 사항 및 본 약관의 해석에 관하여는
                  관계법령 및 건전한 상관례에 따릅니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 5조(제공하는 서비스)</div>
            <div className={styles.text}>
              <ul>
                <li> ‘챌린지'는 다음과 같은 서비스들을 포함하고 있습니다.</li>
                <li>
                  1. 자사 혹은 제휴사의 제품을 무료 혹은 조건부 무료로 제공하는
                  업무
                </li>
                <li>
                  2. ‘챌린지’에 참여하여 조건에 맞는 행동 절차를 수행한
                  ‘회원’에게 자사에서 개발한 자사몰(이하 ‘포인트샵’)에서만
                  사용이 가능한 가상 화폐를 지급하는 업무
                </li>
                <li>
                  3. 자사의 가상화폐를 이용하여 ‘포인트샵’에서 재화를 구매하는
                  업무
                </li>
                <li>4. 기타 '펫누리'가 정하는 업무</li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 6조(서비스의 중단 등)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. '챌린지'는 연중무휴, 1일 24시간 제공을 원칙으로 합니다.
                  다만 '펫누리' 시스템의 유지 · 보수를 위한 점검, 통신장비의
                  교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에
                  대하여 일시적인 제공 중단이 발생할 수 있습니다.
                </li>
                <li>
                  2. '챌린지'는 전시, 사변, 천재지변 또는 이에 준하는
                  국가비상사태가 발생하거나 발생할 우려가 있는 경우,
                  전기통신사업법에 의한 기간통신사업자가 전기통신서비스를
                  중지하는 등 부득이한 사유가 발생한 경우 서비스의 전부 또는
                  일부를 제한하거나 중지할 수 있습니다.
                </li>
                <li>
                  3. '포인트샵'은 재화 또는 용역이 품절되거나 상세 내용이
                  변경되는 경우 장차 체결되는 계약에 따라 제공할 재화나 용역의
                  내용을 변경할 수 있습니다. 이 경우 변경된 재화 또는 용역의
                  내용 및 제공 일자를 명시하여 즉시 공지합니다.
                </li>
                <li>
                  4. '펫누리'가 서비스를 정지하거나 이용을 제한하는 경우 그 사유
                  및 기간, 복구 예정 일시 등을 지체 없이 '이용자'에게 알립니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 7조(챌린지 참여)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'가 정한 양식과 조건에 따라 '회원'이 조건적 행동
                  절차를 수행하여 ‘챌린지’에 참여합니다.
                  <ul>
                    <li>
                      a. 챌린지 내 참여 신청 페이지에 명시된 약관 및 규칙을 모두
                      읽고 동의한 후 참여 신청 버튼을 누른 경우
                    </li>
                  </ul>
                </li>

                <li>
                  2. '펫누리'는 전항에 따라 ‘챌린지’에 참여한 '회원' 중 다음
                  각호의 사유가 없는 한 조건에 맞는 보상을 제공합니다.
                  <ol>
                    <ul>
                      <li>
                        a.‘회원’이 ‘챌린지’ 별로 정해진 필수 조건을 허위로
                        만족한 경우
                      </li>
                      <li>
                        b. ‘회원’이 불법적인 경로 혹은 제한된 경로로 포인트 획득
                        기준을 충족시킨 경우
                      </li>
                      <li>
                        c. 기타 회원의 행위가 '펫누리'의 운영에 현저한 지장을
                        초래하는 것으로 인정되는 경우
                      </li>
                    </ul>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 8조(참여 신청 철회)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '챌린지'에 참여 신청을 완료한 '회원'은 챌린지 유의사항에
                  별도로 명시된 기간 이내에 참여 신청을 철회할 수 있습니다.
                </li>
                <li>
                  2. 다음 각호의 사유에 해당하는 경우, 챌린지 참여 신청 철회가
                  제한됩니다.
                  <ol>
                    <ul>
                      <li>
                        a.'챌린지' 유의사항에 명시된 참여 신청 철회 기간이 지난
                        경우(다만, ‘펫누리’의 귀책으로 철회 신청이 불가능했던
                        경우는 예외로 합니다)
                      </li>
                      <li>
                        b. '챌린지’ 참여 완료로 인정되어 챌린지 조건에 부합하는
                        재화 혹은 가상화폐의 지급이 완료되었으며 해당 재화 혹은
                        가상화폐를 이미 사용한 경우
                      </li>
                      <li>
                        c. ‘챌린지’에서 제공한 체험용 상품이 재사용이 불가능하게
                        변질된 경우
                      </li>
                    </ul>
                  </ol>
                </li>
                <li>
                  3. '펫누리'가 전항의 청약철회 제한 사유를 '신청자'가 볼 수
                  있는 화면에 명시하지 않은 경우 '신청자'의 참여 신청 청약
                  철회가 제한되지 않습니다.
                </li>
                <li>
                  4. '신청자’는 본조의 규정에도 불구하고 제공된 상품의 내용물이
                  고지된 내용과 상이한 경우그 사실을 안날 또는 알 수 있었던
                  날부터 3일 이내에 참여 신청 철회 등을 할 수 있습니다.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>
              제 9조(챌린지 조건 불이행에 대한 후속 조치)
            </div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'은 다음 각 호의 사유에 부합하는 '회원'을 ‘챌린지
                  부정 참여’로 간주하며 ‘챌린지 부정 참여’로 간주된 ‘회원’의
                  이용 권리를 언제든지 제한 또는 정지시킬 수 있습니다.
                  <ol>
                    <ul>
                      <li>
                        a.리뷰 글 작성 등의 조건부 무료로 제품을 제공받았으나
                        이후 조건을 수행하지 않은 경우
                      </li>
                      <li>
                        b. 인증글 작성 기준에 맞지 않는 허위글을 작성하여 보상을
                        수령한 경우
                      </li>
                      <li>c. ‘챌린지’ 참여를 통하여 부당한 이익을 얻은 경우</li>
                      <li>
                        d. 관계법령 또는 본 약관에서 금지하는 행위를 한 경우
                      </li>
                      <li>
                        e. ‘펫누리’에게 불이익을 끼칠 수 있는 행위를 악의적으로
                        수행한 경우
                      </li>
                      <li>
                        f. 기타 ‘챌린지’ 참여로 타 사용자 혹은 제휴업체에 피해를
                        끼친것으로 판단되는 경우
                      </li>
                    </ul>
                  </ol>
                </li>
                <li>
                  2. '펫누리'는 전항의 각 호에 부합하는 ‘이용자’를 펫누리
                  사이트에 접근 금지 시키거나 지급된 가상 화폐를 회수하는 등의
                  이용자의 권리를 제한할 수 있습니다.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 10조(보상 지급)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'는 ‘신청자’가 조건에 부합하는 행동 절차의 수행을
                  완료한 경우, 각 챌린지에 명시된 조건에 맞추어 보상을 지급할 수
                  있도록 필요한 조치를 취합니다.
                </li>
                <li>
                  2. 전항의 경우 '펫누리'는 '신청자'가 보상 지급에 대한 절차 및
                  진행 상황을 확인할 수 있도록 적절한 조치를 취해야합니다.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 11조(개인 정보 보호)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'는 '신청자'의 정보 수집시 다음의 필수사항 등
                  ‘챌린지’ 조건 이행에 필요한 최소한의 정보만을 수집합니다.
                  <ol>
                    <ul>
                      <li>
                        a. 리뷰 글 작성 등의 조건부 무료로 제품을 제공받았으나
                        이후 조건을 수행하지 않은 경우
                        <li>Ⅰ. 수령인 이름</li>
                        <li>Ⅱ. 수령인 연락처</li>
                        <li>Ⅲ. 수령지 주소</li>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        b. 가상화폐 지급 방식 챌린지
                        <li> Ⅰ. (24시간 내) 참여 여부</li>
                        <li>Ⅱ. (24시간 내) 포인트 지급 여부</li>
                      </li>
                    </ul>
                  </ol>
                </li>
                <li>
                  2. '펫누리'가 개인정보보호법 상의 고유식별정보 및 민감정보를
                  수집하는 때에는 반드시 대상자의 동의를 받습니다.
                </li>
                <li>
                  3. '펫누리'는 제공된 개인정보를 '회원'의 동의 없이 목적 외
                  이용, 또는 제 3자 제공할 수 없으며 이에 대한 모든 책임은
                  '펫누리'가 부담합니다. 다만 다음의 경우에는 예외로 합니다.
                  <ol>
                    <ul>
                      <li>
                        a. 리뷰 글 작성 등의 조건부 무료로 제품을 제공받았으나
                        이후 조건을 수행하지 않은 경우
                      </li>
                      <li>
                        b. 통계작성, 학술연구 또는 시장 조사를 위하여 필요한
                        경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
                      </li>
                      <li>
                        c. 재화 등의 거래에 따른 대금 정산을 위하여 필요한 경우
                      </li>
                      <li>d. 도용방지를 위하여 본인 확인이 필요한 경우</li>
                      <li>e. 관계법령의 규정에 따른 경우</li>
                    </ul>
                  </ol>
                </li>
                <li>
                  4. 본 약관에 기재된 사항 이외의 개인정보보호에 관항 사항은
                  '회사'의 '개인정보처리방침'에 따릅니다.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 12조('펫누리'의 의무)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. 자사 혹은 제휴사의 제품을 무료 혹은 조건부 무료로 제공하는
                  업무
                </li>
                <li>
                  2. ‘챌린지’에 참여하여 조건에 맞는 행동 절차를 수행한
                  ‘회원’에게 자사에서 개발한 자사몰(이하 ‘포인트샵’)에서만
                  사용이 가능한 가상 화폐를 지급하는 업무
                </li>
                <li>
                  3. 자사의 가상화폐를 이용하여 ‘포인트샵’에서 재화를 구매하는
                  업무
                </li>
                <li>4. 기타 '펫누리'가 정하는 업무</li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 13조(신청자 및 회원의 의무)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '신청자’는 챌린지 참여 신청 시 사실에 근거하여 신청서를
                  작성해야 합니다. 허위, 또는 타인의 정보를 등록한 경우
                  ‘펫누리'에 대하여 일체의 권리를 주장할 수 없으며, ‘펫누리'는
                  이로 인하여 발생한 손해에 대하여 책임을 부담하지 않습니다.
                </li>
                <li>
                  2. '회원’은 본 약관에서 규정하는 사항과 기타 '펫누리'가 정한
                  제반 규정 및 공지사항을 준수하여야 합니다. 또한 '이용자'는
                  '펫누리'의 업무를 방해하는 행위 및 '펫누리'의 명예를 훼손하는
                  행위를 하여서는 안 됩니다.
                </li>
                <li>
                  3. '회원'은 주소, 연락처, 전자우편 주소 등 회원 정보가 변경된
                  경우 즉시 이를 수정해야 합니다. 변경된 정보를 수정하지 않거나
                  수정을 게을리하여 발생하는 책임은 '회원’이 부담합니다.
                </li>
                <li>
                  4. '이용자'는 다음의 행위를 하여서는 안됩니다.
                  <ol>
                    <ul>
                      <li>a.'펫누리'에 게시된 정보의 변경</li>
                      <li>
                        b. '펫누리'가 정한 정보 외의 다른 정보의 송신 또는 게시
                      </li>
                      <li>
                        c. '펫누리' 및 제 3자의 저작권 등 지식재산권에 대한 침해
                      </li>
                      <li>
                        d. '펫누리' 및 제 3자의 명예를 훼손하거나 업무를
                        방해하는 행위
                      </li>
                      <li>
                        e. 외설 또는 폭력적인 메시지, 화상, 음성 기타 관계 법령
                        및 공서양속에 반하는 정보를 '회사'의 '사이트'에 공개
                        또는 게시하는 행위
                      </li>
                    </ul>
                  </ol>
                </li>
                <li>
                  5. '회원'은 부여된 아이디(ID)와 비밀번호를 직접 관리해야
                  합니다.
                </li>
                <li>
                  6. '회원'이 자신의 아이디(ID) 및 비밀번호를 도난 당하거나 제
                  3자가 사용하고 있음을 인지한 경우에는 바로 '펫누리'에 통보하고
                  안내에 따라야 합니다.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 14조(저작권의 귀속 및 이용)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'가 제공하는 서비스 및 이와 관련된 모든 지식재산권은
                  '펫누리'에 귀속됩니다
                </li>
                <li>
                  2. '이용자'는 '쇼핑몰'에게 지식재산권이 있는 정보를 사전
                  승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여
                  영리목적으로 이용하거나, 제 3자가 이용하게 하여서는 안됩니다.
                </li>
                <li>
                  3. '이용자'가 서비스 내에 게시한 게시물, 이용 후기 등
                  콘텐츠(이하 '콘텐츠')의 저작권은 해당 '콘텐츠'의 저작자에게
                  귀속됩니다.
                </li>
                <li>
                  4. 전항의 규정에도 불구하고 '펫누리'는 서비스의 운영, 전시,
                  전송, 배포, 홍보 등의 목적으로 별도의 허락 없이 무상으로
                  저작권법 및 공정한 거래관행에 합치되는 범위 내에서 다음 각호와
                  같이 '회원'이 등록한 저작물을 이용할 수 있습니다.
                  <ol>
                    <ul>
                      <li>
                        a. '펫누리'가 제공하는 서비스 내에서 '회원'이 작성한
                        '콘텐츠'의 복제, 수정, 전시, 전송, 배포 등 저작권을
                        침해하지 않는 범위 내의 2차적 저작물 또는 편집 저작물
                        작성을 위한 사용. 다만 '회원'이 해당 '콘텐츠'의 삭제
                        또는 사용 중지를 요청하는 경우 관련법에 따라
                        보존해야하는 사항을 제외하고 관련 '콘텐츠'를 모두 삭제
                        또는 사용중지합니다.
                      </li>
                      <li>
                        b. 서비스의 운영, 홍보, 서비스 개선 및 새로운 서비스
                        개발을 위한 범위내의 사용
                      </li>
                      <li>
                        c. 미디어, 통신사 등을 통한 홍보 목적으로 '콘텐츠'를
                        제공, 전시하도록 하는 등의 사용
                      </li>
                    </ul>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 15조(분쟁의 해결)</div>
            <div className={styles.text}>
              <ol>
                <li>
                  1. '펫누리'는 '이용자'가 제기하는 불만사항 및 의견을 지체없이
                  처리하기 위하여 노력합니다. 다만 신속한 처리가 곤란한 경우
                  '이용자'에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                </li>
                <li>
                  2. '펫누리'와 '이용자'간 전자상거래에 관한 분쟁이 발생한 경우,
                  '이용자'는 한국소비자원, 전자문서 · 전자거래분쟁조정위원회 등
                  분쟁조정기관에 조정을 신청할 수 있습니다.
                </li>
                <li>
                  3. '펫누리'와 '이용자'간 발생한 분쟁에 관한 소송은 '펫누리'
                  소재지를 관할하는 법원을 제1심 관할법원으로 하며, 준거법은
                  대한민국의 법령을 적용합니다.
                </li>
              </ol>
            </div>
          </div>
          <span className={styles.title}>부칙</span>
          <div className={styles.contents}>
            <div className={styles.lists}>제 1조(시행일)</div>
            <div className={styles.text}>
              <ol>
                <li>본 약관은 2023.10.01부터 적용합니다.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={styles.modalBottom}>
          <button onClick={handleConfirmClick}>
            <span>동의합니다.</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAgree;
