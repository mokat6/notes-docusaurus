import React from "react";

type SvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type Data = {
  text: string;
  img: SvgComponent | string;
};

type ImgCaptionFlexWrapProps = {
  children: Data[];
  itemMaxWidth?: number;
};

const imgStyle = {
  display: "block",
};

function ImgCaptionFlexWrap({ children, itemMaxWidth = 300 }: ImgCaptionFlexWrapProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {children.map((item) => {
        const Image = item.img;
        const imgIsString = typeof Image === "string";
        return (
          <div
            style={{
              maxWidth: itemMaxWidth,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {item.text}
            {imgIsString ? <img src={Image} style={imgStyle} /> : <Image style={imgStyle} />}
          </div>
        );
      })}
    </div>
  );
}

export default ImgCaptionFlexWrap;
