import { useState } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybsaddress.module.scss";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal"; // 추가

interface DeliveryBSAddressProps {
  onAddressComplete: (addressInfo: {
    roadAddress: string;
    detailAddress: string;
    zipCode: string;
  }) => void;
  initialRoadAddress?: string;
  initialDetailAddress?: string;
  initialZipCode?: string;
}

interface DaumPostcodeData {
  roadAddress: string;
  zonecode: string;
}

const DeliveryBSAddress: React.FC<DeliveryBSAddressProps> = ({
  onAddressComplete,
  initialRoadAddress = "",
  initialDetailAddress = "",
  initialZipCode = "",
}) => {
  const [zipCode, setZipCode] = useState(initialZipCode);
  const [roadAddress, setRoadAddress] = useState<string>(initialRoadAddress);
  const [detailAddress, setDetailAddress] =
    useState<string>(initialDetailAddress); // 추가
  const [isOpen, setIsOpen] = useState<boolean>(false); //추가

  const completeHandler = (data: DaumPostcodeData) => {
    setRoadAddress(data.roadAddress);
    setZipCode(data.zonecode);
    onAddressComplete({
      roadAddress: data.roadAddress,
      detailAddress: "",
      zipCode: data.zonecode,
    });
    setIsOpen(false); //추가
  };

  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex : 1999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "375px",
      height: "400px",
      padding: "0",
      overflow: "hidden",
      zIndex : 2000,
    },
  };

  // 검색 클릭
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // 상세 주소검색 event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
    onAddressComplete({ roadAddress, zipCode, detailAddress: e.target.value });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.addressContainer}>
        <div className={styles.inputTitle}>배송지 입력</div>
        <input
          value={zipCode}
          readOnly
          placeholder="우편번호"
          className={styles.addressZipCode}
        />

        <input
          onClick={toggle}
          value={roadAddress}
          readOnly
          placeholder="주소지를 검색해주세요"
          className={styles.addressInput}
        />
        {/* <button onClick={toggle}>우편번호 검색</button> */}
        <Modal
          isOpen={isOpen}
          ariaHideApp={false}
          style={customStyles}
          onRequestClose={closeModal}
        >
          <DaumPostcode onComplete={completeHandler} />
          {/* <button onClick={closeModal}>close</button> */}
        </Modal>
        <input
          type="text"
          onChange={changeHandler}
          value={detailAddress}
          placeholder="상세 주소 입력"
          className={styles.detailAddress}
        />
      </div>
    </>
  );
};

export default DeliveryBSAddress;
