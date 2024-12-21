import { Platform, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Box, Column, FormControl, IInputProps, IStackProps, Input } from "native-base";

type Props = {
  label?: string;
  _stack?: IStackProps;
  shadow?: string;
} & IInputProps;

const isIOS = Platform.OS === "ios";

const FormInput = ({ label, _stack, shadow = "8", ...inputProps }: Props) => {
  return (
    <Column {..._stack}>
      {!!label && (
        <FormControl.Label _text={{ color: "primary.600", fontWeight: "medium" }}>
          {label}
        </FormControl.Label>
      )}
      <Box bg="transparent" rounded="full" shadow={shadow}>
        {/* <Input
          size="md"
          bg="primary.200"
          borderColor="primary.200"
          placeholder={label}
          rounded="full"
          variant="filled"
          py={isIOS ? "3" : "2"}
          color="white"
          {...inputProps}
        /> */}
        <TextInput
          placeholder={label || inputProps.placeholder}
          placeholderTextColor="#ffffff"
          style={[
            styles.input,
            { paddingVertical: isIOS ? 12 : 8 }, 
          ]}
          onChangeText={inputProps.onChangeText}
          value={inputProps.value}
          secureTextEntry={inputProps.type === "password"}
          keyboardType={inputProps.keyboardType}
          onBlur={inputProps.onBlur}
        />

      </Box>
    </Column>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EB7575",
    borderColor: "#EB7575",
    borderWidth: 1,
    borderRadius: 50,
    color: "white",
    paddingHorizontal: 16,
    fontSize: 14,
  },
});
