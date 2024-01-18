import {
  IgetAboutResponse,
  IgetAffortResponse,
  IgetHomeResponse,
  IgetSettingsResponse
} from "@/interface/apiresp.interfaces";
import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

// Faq
export const faqQuery = () => {
  try {
    const res = ApiRequest.get(endpoints.cms.faq);

    return res;
  } catch (error) {
    return error;
  }
};

export const GetHomeDetails = async () => {
  const res = await axiosInstance.get<IgetHomeResponse>(endpoints.cms.home);
  return res;
};
export const GetAboutData = async () => {
  const res = await axiosInstance.get<IgetAboutResponse>(endpoints.cms.about);
  return res;
};
export const GetAffortabilityData = async () => {
  const res = await axiosInstance.get<IgetAffortResponse>(endpoints.cms.affort);
  return res;
};
export const GetSettingsDetails = async () => {
  const res = await axiosInstance.get<IgetSettingsResponse>(
    endpoints.cms.setting
  );
  return res;
};
