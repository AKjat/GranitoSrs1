// import { Layout, Text, useTheme } from "@ui-kitten/components";
import React, { useRef } from "react";
import PhoneInput from "react-phone-input-2";
import { makeStyles } from "@mui/styles";
import { Stack, Typography } from "@mui/material";

export const CustomPhoneInput = ({
  placeholder,
  name,
  style,
  value,
  onChange,
  error,
  required,
  validation,
  applyValidation,
  label,
}) => {
  // const useStyles = makeStyles((theme) => ({}));

  // React.useEffect(() => {
  //   phoneInput.current.setValue(value);
  //   if (required) {
  //     if (value) {
  //       applyValidation(name, true);
  //     } else {
  //       applyValidation(name, false);
  //     }
  //   }
  // }, [value]);
  const phoneInput = useRef(null);
  const renderCaption = () => {
    return (
      <div>
        {/* {AlertIcon(styles.captionIcon)} */}

        {required ? (
          validation ? null : (
            <Typography>* This Field is Required</Typography>
          )
        ) : null}

        {error ? <Typography>{error}</Typography> : null}
      </div>
    );
  };
  return (
    <Stack
    // style={{
    //   flex: 1,
    //   flexDirection: "column",
    //   alignItems: "center",
    //   padding: 8,
    // }}
    >
      <Typography>{label}</Typography>
      <PhoneInput
        // defaultValue={value}

        value={value}
        // onChange={(text) => {
        //   onChange(name, text);
        // }}
        onChange={(phone) => {
          onChange(name, phone);
        }}
        initialCountry="in"
        textProps={{ placeholder: "enter your number" }}
        // onChangeText={(text) => {
        //   applyValidation(name, phoneInput.current?.isValidNumber(text));
        // }}
        ref={phoneInput}
      />
      {renderCaption()}
    </Stack>
  );
};
// const styles = StyleSheet.create({
//   captionContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//   },
//   captionIcon: {
//     width: 10,
//     height: 10,
//     marginRight: 5,
//   },
//   captionText: {
//     fontSize: 12,
//     fontWeight: "400",
//     //   fontFamily: "opensans-regular",
//     // color: "#8F9BB3",
//   },
//   phoneInput: {
//     borderWidth: 2,
//     borderRadius: 2,
//     padding: 10,
//   },
// });

{
  /* <CustomPhoneInput
              placeholder="Enter Phone Number"
              name="number"
              style={styles.input}
              data={partyForm.number}
              onChange={handleChange}
              error={null}
            /> */
}
