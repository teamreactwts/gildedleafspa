import {
  IgetAboutResponse,
  IgetAffortResponse,
  IgetConditionResponse,
  IgetHomeResponse,
  IgetServiceResponse,
  IgetSettingsResponse
} from "@/interface/apiresp.interfaces";
import { Ipagination } from "@/types/common.type";
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
export const GetServiceList = async (body: Ipagination) => {
  const res = await axiosInstance.post<IgetServiceResponse>(
    endpoints.service.list,
    body
  );
  return res;
};
export const GetConditionList = async (body: Ipagination) => {
  const res = await axiosInstance.post<IgetConditionResponse>(
    endpoints.condition.list,
    body
  );
  return res;
};
