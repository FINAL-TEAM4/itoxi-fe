import { useState, ChangeEvent } from "react";
import styles from "@/styles/deliverybs/deliverybsaddress.module.scss";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal"; // 추가

interface DeliveryBSAddressProps {
  onAddressComplete: any;
}

const DeliveryBSAddress: React.FC<DeliveryBSAddressProps> = ({
  onAddressComplete,
}) => {
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>(""); // 추가
  const [isOpen, setIsOpen] = useState<boolean>(false); //추가

  const completeHandler = (data: any) => {
    setRoadAddress(data.roadAddress);
    setIsOpen(false); //추가
  };

  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "400px",
      padding: "0",
      overflow: "hidden",
    },
  };

  // 검색 클릭
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // 상세 주소검색 event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
    onAddressComplete(roadAddress + e.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.addressContainer}>
        <div className={styles.inputTitle}>배송지 입력</div>
        {/* <input value={zipCode} readOnly placeholder="우편번호" /> */}
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