"use client";

import {Switch} from "@nextui-org/switch";
import React, { ReactNode, useEffect, useState } from "react";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { useTheme } from "next-themes";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = (isSelected: boolean, classname: string): ReactNode => {
    if (isSelected) {
      setTheme("light");
      return <MoonIcon className={classname} />;
    } else {
      setTheme("dark");
      return <SunIcon className={classname} />;
    }
  };

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected={theme === "light" ? true : false}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) => handleSwitch(isSelected, className)}
    />
  );
};

export default Switcher;