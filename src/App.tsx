import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Challenge from "./pages/challenge";
import PointShop from "@/pages/challenge/PointShop";
import PetTalk from "@/pages/petTalk";
import Concern from "@/pages/petTalk/concern";
import FreeTalk from "@/pages/petTalk/freetalk";
import MyPage from "./pages/MyPage";

import "./styles/common.scss";
import "./styles/globalstyle.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/pointshop" element={<PointShop />} />
      <Route path="/pettalk" element={<PetTalk />} />
      <Route path="/pettalk" element={<PetTalk />} />
      <Route path="/concern" element={<Concern />} />
      <Route path="/freetalk" element={<FreeTalk />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
