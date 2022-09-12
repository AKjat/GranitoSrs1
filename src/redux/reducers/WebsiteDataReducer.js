import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const WebsiteSlice = createSlice({
  name: "website_data",
  initialState: [],
  reducers: {
    setWebsiteData(state, { payload, type }) {
      state = payload;
      return state;
    },

    addWebsiteData(state, { payload, type }) {
      state = [payload, ...state];
      return state;
    },
  },
});

export const WebsiteFormSlice = createSlice({
  name: "website_form",
  initialState: {
    lead: null,
    product: null,
    block: null,
    link: null,
  },
  reducers: {
    setLead(state, { payload, type }) {
      state = { ...state, [payload.name]: payload.value };
      return state;
    },
    setLeadForm(state, { payload, type }) {
      state = payload;
      return state;
    },
    clearForm(state, { payload, type }) {
      state = {
        lead: null,
        product: null,
        block: null,
        link: null,
      };
      return state;
    },
    setLeadFormID(state, { payload }) {
      console.log(payload, "paaaayload");
      state = {
        company_name: payload?.company_name,
        category: payload?.category?.id,
      };
      return state;
    },
  },
});

export const WebsiteFormActions = WebsiteFormSlice.actions;
export const WebsiteActions = WebsiteSlice.actions;

export const fetchLead = (setRefreshing, next, is_client) => {
  return function (dispatch, getState) {
    const { LeadLinks, leadSearch } = getState();
    // console.log('hashaghs',is_client)
    let link;
    // if (!axios.defaults.baseURL) {
    //   return
    // }
    if (next) {
      if (LeadLinks.next) {
        link = LeadLinks.next;
      } else {
        if (setRefreshing) {
          setRefreshing(false);
        }
        return;
      }
    } else {
      if (is_client) {
        link = `${axios.defaults.baseURL}/api/client/`;
      } else {
        link = `${axios.defaults.baseURL}/api/lead/`;
      }
    }

    let url = new URL(link);
    if (!next) {
      if (leadSearch != null && leadSearch != {}) {
        url.search = new URLSearchParams(leadSearch);
      }
    }

    axios
      .get(url.toString())
      .then((res) => {
        if (next) {
          dispatch(LeadActions.addLeadList(res.data.results));
        } else if (is_client) {
          dispatch(LeadActions.setLead(res.data));
        } else {
          dispatch(LeadActions.setLead(res.data.results));
        }
        if (!is_client) {
          dispatch(
            LeadLinksActions.setLeadLinks({
              next: res.data.next,
              count: res.data.count,
              unread_count: res.data.unread_count,
            })
          );
        }
        if (setRefreshing) {
          setRefreshing(false);
        }
      })
      .catch((e) => {
        console.log(e, e.response.data);
      });
  };
};
