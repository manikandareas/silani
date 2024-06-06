import React, { ComponentProps } from "react";
import RNSpinner from "react-native-loading-spinner-overlay";

type Props = ComponentProps<typeof RNSpinner>;
const Spinner = (props: Props) => {
   const { color, size, ...rest } = props;
   return (
      <RNSpinner {...rest} size={size ?? "large"} color={color ?? "#D1F249"} />
   );
};

export default Spinner;
