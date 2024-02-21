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
  image: string[];
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
  app_bold_title: string;
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
  short_title: string;
  intro_title: string;
  intro_description: string;
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
  data: any;
}
export interface IgetServiceDetailsResponse {
  data: Doc;
}

export interface IgetServiceData {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface IgetServiceDataNoPage {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  _id?: string;
  faqId?: Faq[];
  conditionId?: ConditionDoc[];
  title?: string;
  description?: string;
  icon?: string;
  benefits_options?: string[];
  how_to_use_options?: string[];
  result_image?: string;
  button_text1?: string;
  button_text2?: string;
  isDeleted?: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  short_title?: string;
  benefit_heading?: string;
  how_to_use_heading?: string;
  before_image?: string;
  pricings?: Iprice[];
  treat_title?: string;
  image_title?: string;
}
export interface IgetConditionResponse {
  data: any;
}
export interface Iprice {
  _id: string;
  serviceId: string;
  type: string;
  regular_price: number;
  membership_price: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  gold_price: string;
  platinum_price: string;
}
export interface IgetConditionData {
  docs: ConditionDoc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface ConditionDoc {
  title: string;
  image: string;
  isDeleted: boolean;
  status: string;
  _id: string;
  description?: string;
  serivce?: IserviceCondition[];
  short_title: string;
}
export interface Faq {
  _id: string;
  question: string;
  answer: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}
export interface IserviceCondition {
  _id: string;
  title: string;
  description: string;
  icon: string;
  button_text1: string;
  button_text2: string;
  short_title: string;
}
export interface IgetConditionDetailsResponse {
  data: ConditionDoc;
}
export interface IgetBlogDetailsResponse {
  data: blogDoc;
}

export interface IgetContactResponse extends BaseApiResponse {
  data: ISettingsDetails;
}

export interface IgetBlogResponse {
  data: IgetBlogData;
}
export interface IgetBlogData {
  docs: blogDoc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface blogDoc {
  title: string;
  image: string;
  description: string;
  author_name: string;
  category_id: string;
  author_type: string;
  isDeleted: boolean;
  status: string;
  _id: string;
  published_date: string;
  author_image: string;
  related_blogs?: IrelateBlog[];
  short_description: string;
}
export interface IrelateBlog {
  short_description: string;
  _id: string;
  image: string;
  title: string;
  description: string;
  published_date: string;
}
export interface IgetMembershipDetailsResponse extends BaseApiResponse {
  data: IMembershipDetails;
}
export interface IgetConditionCmsDetailsResponse extends BaseApiResponse {
  data: IConditionCms;
}
export interface IgetCmsResponse extends BaseApiResponse {
  data: IcmsData;
}
export interface IcmsData {
  _id: string;
  title: string;
  slug: string;
  status: string;
  content: string;
  isDeleted: boolean;
  updatedAt: string;
}

export interface IConditionCms {
  _id: string;
  isDeleted: boolean;
  content: string;
  title: string;
  short_title: string;
  status: string;
  updatedAt: string;
}
export interface IMembershipDetails {
  _id: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  bold_title: string;
  bold_title_1: string;
  description_1: string;
  head_description: string;
  title: string;
  title_1: string;
}
export interface IgetSettingsFeaturesResponse extends BaseApiResponse {
  data: IMembershipFeatures[];
}
export interface IMembershipFeatures {
  _id: string;
  title: string;
  description: string;
  icon: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}
export interface IgetSettingsMembershipPlansResponse extends BaseApiResponse {
  data: IMembershipPlans[];
}
export interface IMembershipPlans {
  _id: string;
  title: string;
  description: string;
  price: number;
  benefits_options: string[];
  perfect_for_content: string;
  isDeleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  membership_deep_link: string;
}
