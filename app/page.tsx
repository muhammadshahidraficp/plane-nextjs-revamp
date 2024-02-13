import Image from "next/image";
import BluePlaneLogoWithoutText from "../public/plane-logos/blue-without-text.png";
import { SignInRoot } from "../components/account";

export default function Home() {
  return (
    <div className="h-full w-full bg-onboarding-gradient-100">
    <div className="flex items-center justify-between px-8 pb-4 sm:px-16 sm:py-5 lg:px-28">
      <div className="flex items-center gap-x-2 py-10">
        <Image src={BluePlaneLogoWithoutText} height={30} width={30} alt="Plane Logo" className="mr-2" />
        <span className="text-2xl font-semibold sm:text-3xl">Plane</span>
      </div>
    </div>

    <div className="mx-auto h-full rounded-t-md border-x border-t border-custom-border-200 bg-onboarding-gradient-100 px-4 pt-4 shadow-sm sm:w-4/5 md:w-2/3">
      <div className="h-full overflow-auto rounded-t-md bg-onboarding-gradient-200 px-7 pb-56 pt-24 sm:px-0">
        <SignInRoot />
      </div>
    </div>
  </div>
  );
}
