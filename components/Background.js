import Image from "next/image"
import { Background } from "../styles/globalStyling"

const BG = () => (
  <Background>
    <Image
      src="/../public/imgs/wild-sea-lg.png"
      alt=""
      rel="preload"
      width={1920}
      height={1080}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </Background>
)

export default BG
