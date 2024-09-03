/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import './TextDecrypt.css';
import { useTheme } from "@mui/material";
// import { useTheme } from "styled-components";

interface IDecryptOptions {
  chars: string;
  interval: number;
}

const decryptOptions: IDecryptOptions = {
  chars: "-./*!?#%&@$€()[]{}<>~0123456789abcdefghijklmnopqrstuvwxyz",
  interval: 60,
};

export const TextDecrypt = (props: any) => {
  const theme = useTheme();
  const [result, setResult] = useDencrypt(decryptOptions);

  useEffect(() => {
    const updateText = () => {
      setResult(props.text || "");
    };

    const action = setTimeout(updateText, 300);

    return () => clearTimeout(action);
  }, [props.text]);

  return (
    // <span className={`decoder-text text-black`}>
     <span className={`decoder-text`} style={{color: `${theme.palette.text.secondary}`}}>
      <span className="decoder-text__label">{result}</span>
      {" "}
    </span>
  );
};
