import axios from "axios";
import { savingActions } from "./SaveReducer";
import {
  WebsiteActions,
  WebsiteErrorActions,
  WebsiteFormActions,
} from "./WebsiteDataReducer";

export const saveWebsiteForm = (_goBack, id) => {
  return function (dispatch, getState) {
    const { websiteForm } = getState();

    dispatch(savingActions.setSaving(true));
    axios({
      method: id ? "patch" : "post",
      url: id
        ? "/client_visit_information/" + id + "/"
        : "/client_visit_information/",
      data: websiteForm,
    })
      .then((res) => {
        dispatch(WebsiteFormActions.clearForm());

        if (id) {
          //   toast.show("Existing Lead Updated");
          console.log("Existing Lead Updated");
        } else {
          //   toast.show("New Lead Saved");
          console.log("New Lead Saved");
        }
        _goBack();
        let lead = res.data;

        dispatch(WebsiteActions.addWebsiteData(lead));

        dispatch(savingActions.setSaving(false));
      })
      .catch((e) => {
        dispatch(savingActions.setSaving(false));
        dispatch(WebsiteErrorActions.setWebsiteError(e.response.data));
        // toast.show("Lead Saving Error!");
        console.log("Lead Saving Error!");

        console.log(e.response.data, "leeeadErrror");
      });
  };
};

export const checkWebsiteNumber = (name, number, setCheckingNumber) => {
  return function (dispatch, getState) {
    axios({
      method: "post",
      url: "/website_check_lead_number/",
      data: { number: number },
    })
      .then((res) => {
        let error = {};
        error[name] = res.data.number;
        dispatch(WebsiteErrorActions.setWebsiteError(error));
        if (setCheckingNumber) {
          setCheckingNumber(false);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        if (setCheckingNumber) {
          setCheckingNumber(false);
        }
      });
  };
};
