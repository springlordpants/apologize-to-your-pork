import Image from "next/image"
import { Background } from "../styles/globalStyling"

const BG = () => (
  <Background>
    <Image
      src="/../public/imgs/wild-sea.png"
      alt=""
      rel="preload"
      width={175}
      height={175}
      objectFit="cover"
      quality={100}
    />
  </Background>
)

export default BG
