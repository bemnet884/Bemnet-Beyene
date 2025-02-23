import Figma from "@/components/logos/figma";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";

import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item";

export default function Items() {
  return (
    <>
      {/**
       * 
       * <section>
        <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <Badge variant="outline" className="border-brand/30 text-brand">
              Last updated: x
            </Badge>
            <h2 className="text-md font-semibold sm:text-2xl">
              Everything you need to build professional websites
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Logo image={Figma} name="Figma" />
            <Logo image={React} name="React" version="19.0.0" />
            <Logo image={TypeScript} name="TypeScript" version="5.6.3" />
            <Logo image={ShadcnUi} name="Shadcn/ui" version="2.1.8" />
            <Logo image={Tailwind} name="Tailwind" version="3.4.14" />
          </div>
        </div>
      </section>
       */}

      <section>
        <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Everything you need to build professional apps
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <ScanFaceIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Accessibility first
              </ItemTitle>
              <ItemDescription>
                WCAG 2.0 compliant for an inclusive user experience
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <MonitorSmartphoneIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Responsive design
              </ItemTitle>
              <ItemDescription>
                Optimized for all screen sizes and devices
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <EclipseIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Light & Dark mode
              </ItemTitle>
              <ItemDescription>
                Automatic theme switching for better usability
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <BlocksIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Fully customizable
              </ItemTitle>
              <ItemDescription>
                Adaptable design and architecture for any project
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <FastForwardIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                High performance
              </ItemTitle>
              <ItemDescription>
                Built for speed and seamless user interactions
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <RocketIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Scalable & production-ready
              </ItemTitle>
              <ItemDescription>
                Designed for enterprise-grade scalability
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <LanguagesIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Localization support
              </ItemTitle>
              <ItemDescription>
                Multilingual support for global audiences
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <SquarePenIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                CMS integration
              </ItemTitle>
              <ItemDescription>
                Compatible with popular headless CMS platforms
              </ItemDescription>
            </Item>
          </div>
        </div>
      </section></>

  );
}
