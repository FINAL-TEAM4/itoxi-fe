import { useQuery } from "react-query";
import {
  allList,
  concernList,
  freetalkList,
  pettalkDetail,
  pettalkReply,
} from "../apis/pettalkApi";

export const useAllList = (selectedPet: string) => {
  return useQuery("allList", () => allList(selectedPet));
};

export const useConcernList = (
  petType: string,
  order: string,
  mainCategory: number,
  subCategory: number
) => {
  return useQuery("concernList", () =>
    concernList(petType, order, mainCategory, subCategory)
  );
};

export const useFreetalkList = (selectedPet: string, mainCategory: number) => {
  return useQuery("freetalkList", () =>
    freetalkList(selectedPet, mainCategory)
  );
};

export const usePettalkDetail = (petTalkId: number) => {
  return useQuery("Detail", () => pettalkDetail(petTalkId));
};

export const usePettalkReply = (petTalkId: number) => {
  return useQuery("Replys", () => pettalkReply(petTalkId));
};
