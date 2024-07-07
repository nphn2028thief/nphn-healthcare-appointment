import React, { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface IProps {
  isLoading: boolean;
  className?: string;
  children: ReactNode;
}

const SubmitButton: FC<IProps> = (props) => {
  const { isLoading, className, children } = props;

  return (
    <Button
      type="submit"
      size={"lg"}
      disabled={isLoading}
      className={className ?? "w-full text-white shad-primary-btn"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/icons/loader.svg"}
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
