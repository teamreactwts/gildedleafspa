import {
  IgetAboutResponse,
  IgetAffortResponse,
  IgetBlogDetailsResponse,
  IgetBlogResponse,
  IgetCmsResponse,
  IgetConditionCmsDetailsResponse,
  IgetConditionDetailsResponse,
  IgetConditionResponse,
  IgetContactResponse,
  IgetContactUsResponse,
  IgetHomeResponse,
  IgetMembershipDetailsResponse,
  IgetServiceDetailsResponse,
  IgetServiceResponse,
  IgetSettingsFeaturesResponse,
  IgetSettingsMembershipPlansResponse,
  IgetSettingsResponse,
  IgetShopResponse
} from "@/interface/apiresp.interfaces";
import {
  IContactData,
  INewsData,
  IQueryProps,
  Ipagination
} from "@/types/common.type";
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
export const GetContactDetails = async () => {
  const res = await axiosInstance.get<IgetContactUsResponse>(
    endpoints.cms.contact
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
export const GetShopList = async () => {
  const res = await axiosInstance.get<IgetShopResponse>(endpoints.shop.list);
  return res;
};

export const GetServiceDetails = async (data: IQueryProps) => {
  const res = await axiosInstance.get<IgetServiceDetailsResponse>(
    `${endpoints.service.details}/${data?._id}`
  );
  return res;
};
export const GetConditionDetails = async (data: IQueryProps) => {
  const res = await axiosInstance.get<IgetConditionDetailsResponse>(
    `${endpoints.condition.details}/${data?._id}`
  );
  return res;
};
export const GetBlogDetails = async (data: IQueryProps) => {
  const res = await axiosInstance.get<IgetBlogDetailsResponse>(
    `${endpoints.blog.details}/${data?._id}`
  );
  return res;
};

export const createContactMutation = async (body: IContactData) => {
  const res = await axiosInstance.post<IgetContactResponse>(
    endpoints.contact.contactus,
    body
  );
  return res;
};
export const createNewsLetterMutation = async (body: INewsData) => {
  const res = await axiosInstance.post<IgetContactResponse>(
    endpoints.newsletter.save,
    body
  );
  return res;
};

export const GetBlogList = async (body: Ipagination) => {
  const res = await axiosInstance.post<IgetBlogResponse>(
    endpoints.blog.list,
    body
  );
  return res;
};
export const GetMembershipFeatures = async () => {
  const res = await axiosInstance.get<IgetSettingsFeaturesResponse>(
    endpoints.membership.features
  );
  return res;
};
export const GetMembershipPlans = async () => {
  const res = await axiosInstance.get<IgetSettingsMembershipPlansResponse>(
    endpoints.membership.plans
  );
  return res;
};
export const GetMembershipDetails = async () => {
  const res = await axiosInstance.get<IgetMembershipDetailsResponse>(
    endpoints.membership.details
  );
  return res;
};
export const GetConditionCmsData = async () => {
  const res = await axiosInstance.get<IgetConditionCmsDetailsResponse>(
    endpoints.condition.cms
  );
  return res;
};

export const GetCmsDetails = async (slug: string) => {
  const res = await axiosInstance.get<IgetCmsResponse>(
    `${endpoints.cms.details}/${slug}`
  );
  return res;
};
