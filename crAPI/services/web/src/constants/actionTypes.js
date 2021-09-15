/*
 * Copyright 2020 Traceable, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const actionTypes = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCHED_DATA: "FETCHED_DATA",

  SIGN_UP: "SIGN_UP",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  VERIFY_OTP: "VERIFY_OTP",
  LOG_IN: "LOG_IN",
  LOGGED_IN: "LOGGED_IN",
  FETCHED_USER: "FETCHED_USER",
  RESET_PASSWORD: "RESET_PASSWORD",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  VERIFY_TOKEN: "VERIFY_TOKEN",
  LOG_OUT: "LOG_OUT",
  INVALID_SESSION: "INVALID_SESSION",
  GET_SERVICES: "GET_SERVICES",

  RESEND_MAIL: "RESEND_MAIL",
  VERIFY_VEHICLE: "VERIFY_VEHICLE",
  GET_VEHICLES: "GET_VEHICLES",
  FETCHED_VEHICLES: "FETCHED_VEHICLES",
  REFRESH_LOCATION: "REFRESH_LOCATION",
  REFRESHED_LOCATION: "REFRESHED_LOCATION",
  GET_MECHANICS: "GET_MECHANICS",
  FETCHED_MECHANICS: "FETCHED_MECHANICS",
  CONTACT_MECHANIC: "CONTACT_MECHANIC",

  UPLOAD_PROFILE_PIC: "UPLOAD_PROFILE_PIC",
  PROFILE_PIC_CHANGED: "PROFILE_PIC_CHANGED",
  UPLOAD_VIDEO: "UPLOAD_VIDEO",
  VIDEO_CHANGED: "VIDEO_CHANGED",
  CHANGE_VIDEO_NAME: "CHANGE_VIDEO_NAME",
  VIDEO_NAME_CHANGED: "VIDEO_NAME_CHANGED",
  CONVERT_VIDEO: "CONVERT_VIDEO",

  BALANCE_CHANGED: "BALANCE_CHANGED",
  GET_PRODUCTS: "GET_PRODUCTS",
  FETCHED_PRODUCTS: "FETCHED_PRODUCTS",
  BUY_PRODUCT: "BUY_PRODUCT",
  GET_ORDERS: "GET_ORDERS",
  FETCHED_ORDERS: "FETCHED_ORDERS",
  RETURN_ORDER: "RETURN_ORDER",
  ORDER_RETURNED: "ORDER_RETURNED",
  APPLY_COUPON: "APPLY_COUPON",

  GET_POSTS: "GET_POSTS",
  FETCHED_POSTS: "FETCHED_POSTS",
  FETCHED_POST: "FETCHED_POST",
  ADD_POST: "ADD_POST",
  GET_POST_BY_ID: "GET_POST_BY_ID",
  ADD_COMMENT: "ADD_COMMENT",
};

export default actionTypes;
