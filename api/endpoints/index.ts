export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};

export const endpoints = {
  auth: {
    signup: "user/existence",
    signUpProfile: "user/signup",
    login: "user/login",
    profileDetails: "user/profile/get",
    profileUpdate: "user/profile/update"
  },
  cms: {
    faq: "faq/all",
    home: "home/content-data",
    about: "aboutUs/get-data",
    affort: "affordability/details",
    setting: "settings/details"
  },
  service: {
    list: "service/list",
    details: "service/details"
  },
  condition: {
    list: "condition/get-data",
    details: "condition/get-details"
  },
  contact: {
    contactus: "contact-us/store"
  },
  blog: {
    list: "blog/list",
    details: "blog/get-details"
  },
  newsletter: {
    save: "news-letter/store"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate
];
