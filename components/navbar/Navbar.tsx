import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ActionButtons } from "./ActionButtons";

export const Navbar = () => {
  return <nav className="flex justify-between">
    <Logo/>
    <Navigation/>
    <ActionButtons/>
  </nav>;
};
