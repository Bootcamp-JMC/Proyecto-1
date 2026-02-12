import { CallToActionTitle } from "./components/CallToActionTitle";
import { CallToActionDescription } from "./components/CallToActionDescription";
import { CallToActionButtons } from "./components/CallToActionButtons";
import { CallToActionFooter } from "./components/CallToActionFooter";

export const CallToAction = () => {
  return (
    <div className="container mx-auto px-4 pt-23.75 text-center sm:px-6 md:px-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-br from-purple-600 via-violet-600 to-purple-700 px-13 py-12 text-white shadow-2xl">
        <CallToActionTitle />
        <CallToActionDescription />

        <CallToActionButtons />

        <CallToActionFooter />
      </div>
    </div>
  );
};
