import Document, {Head, Html, Main, NextScript} from "next/document";
import {ColorModeScript, theme} from "@chakra-ui/react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
        <Html lang='en'>
          <Head/>

          <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    )
  }
}
