import { userData } from "@/types/common.type";
import { BaseApiResponse } from "./common.interface";

export interface IgetSignUpQuery extends BaseApiResponse {
  data: userData;
}

export interface IgetHomeResponse extends BaseApiResponse {
  data: IhomeDetails;
}
export interface IhomeDetails {
  _id: string;
  title: string;
  description: string;
  image: string;
  button_text: string;
  interested_in_title: string;
  interested_in_description: string;
  concerns_title: string;
  concerns_description: string;
  app_button_text: string;
  app_button_text1: string;
  app_description: string;
  app_title: string;
  app_image: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  bold_title: string;
  interested_in_bold_title: string;
  concerns_bold_title: string;
}
export interface IgetAboutResponse extends BaseApiResponse {
  data: IAboutDetails;
}
export interface IAboutDetails {
  _id: string;
  headtitle: string;
  title: string;
  description: string;
  image: string;
  make_us_different_short_description: string;
  make_us_different_title: string;
  make_us_different_title_1: string;
  make_us_different_title_2: string;
  make_us_different_title_3: string;
  make_us_different_title_4: string;
  make_us_different_title_5: string;
  make_us_different_image_1: string;
  make_us_different_image_2: string;
  make_us_different_image_3: string;
  make_us_different_image_4: string;
  make_us_different_image_5: string;
  impact_title: string;
  impact_description: string;
  impact_image: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  make_us_different_bold_title: string;
}
export interface IgetAffortResponse extends BaseApiResponse {
  data: IAffortDetails;
}
export interface IAffortDetails {
  _id: string;
  isDeleted: boolean;
  description: string;
  description_1: string;
  header_title: string;
  title: string;
  title_1: string;
  updatedAt: string;
  image: string;
  image_1: string;
}
export interface IgetSettingsResponse extends BaseApiResponse {
  data: ISettingsDetails;
}
export interface ISettingsDetails {
  _id: string;
  socialLinks: SocialLinks;
  contactNumber: string;
  email: string;
  address: string;
  playstoreURL: string;
  applestoreURL: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SocialLinks {
  fb: string;
  tiktok: string;
  insta: string;
  yt: string;
}

export interface IgetServiceResponse {
  data: IgetServiceData;
}

export interface IgetServiceData {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  _id: string;
  faqId: string[];
  conditionId: string[];
  title: string;
  description: string;
  icon: string;
  benefits_options: string[];
  how_to_use_options: string[];
  result_image: string;
  button_text1: string;
  button_text2: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}
