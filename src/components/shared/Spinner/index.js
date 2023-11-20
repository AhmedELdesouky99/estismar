import { Spin } from "antd";

export const Spinner = ({
  children,
  isLoading,
  style = { position: "fixed" },
  size = "large",
  tip = "spinner.loading",
}) => {
  return (
    <Spin style={style} size={size} spinning={isLoading} tip={tip}>
      {children}
    </Spin>
  );
};
