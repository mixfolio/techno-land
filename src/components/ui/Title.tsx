import type { FC } from "react";

type TitleProps = {
  title: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Title: FC<TitleProps> = ({ title, ...props }) => {
  return (
    <div className="title">
      <svg>
        <use href="./circle-bullet.svg" />
      </svg>
      <h2>{title}</h2>
    </div>
  );
};
