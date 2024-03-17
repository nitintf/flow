import React from "react";
import Image from "next/image";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils/cn";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center">
              <h2 className="pb-xxs text-h3 font-[700] text-white">
                Start your journey today
              </h2>
              <p className="mx-auto max-w-3xl text-link text-gray-500">
                Choose the Perfect Plan for Seamless Screen Recording, Cloud
                Storage, and AI Enhancement - Because Your Creative Journey
                Deserves the Best.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-xs md:flex-row">
            <PricingCard
              type="Hobby"
              price="Free"
              description="Record, Store, and Enhance – All in One. Hobbyist's Paradise Unleashed!"
              buttonText="Choose Personal"
            >
              <List
                options={[
                  "Unilimtied Recordings",
                  "Connect 1 Cloud Provider",
                  "1 Hr recording length",
                  "Use AI Features upto 3 Times",
                ]}
              ></List>
            </PricingCard>
            <PricingCard
              type="Pro"
              price="$5"
              subscription="month"
              description="Cloud Storage, AI Brilliance, and Seamless Recording."
              buttonText="Choose Pro"
              active
            >
              <List
                active
                options={[
                  "Unilimited Recordings",
                  "All Cloud Providers",
                  "Unlimited Recording Length",
                  "Use Unlimited AI Features",
                ]}
              ></List>
            </PricingCard>
            <PricingCard
              type="Enterprise"
              price="Custom"
              description="Enterprise-Grade Recording, Custom Solutions, and Limitless Creative Power."
              buttonText="Contact Us"
            >
              <List
                options={[
                  "Advance Security",
                  "All Pro Features",
                  "Advance Recordings",
                  "SSO (SAML)",
                ]}
              ></List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}: {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription?: string;
  buttonText: string;
  active?: boolean;
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div
          className={cn(
            "shadow-pricing relative z-10 mb-10 rounded-[10px] bg-background p-xs",
            {
              "outline-btn": active,
            },
          )}
        >
          {active && (
            <Image
              src={"/images/pricing-decoration.png"}
              width={60}
              height={60}
              alt="Pricing decoration"
              className="absolute -top-4 right-0"
            />
          )}
          <span className={cn("block text-lg font-semibold text-white")}>
            {type}{" "}
            {active && (
              <Badge className="ml-xxs text-white" variant={"outline"}>
                Most Popular
              </Badge>
            )}
          </span>
          <h2
            className={cn("text-[40px] font-bold text-white", {
              "header-text": active,
            })}
          >
            {price}
            {subscription && (
              <span
                className={cn(
                  "text-body-color dark:text-dark-6 text-base font-medium",
                )}
              >
                / {subscription}
              </span>
            )}
          </h2>
          <p
            className={cn(
              "border-stroke mb-4 mt-2 border-b border-gray-300 pb-4 text-base text-gray-400",
            )}
          >
            {description}
          </p>
          <div
            className={cn("mb-9 flex flex-col gap-[8px]", {
              "text-white": active,
            })}
          >
            {children}
          </div>
          <Button className="w-full">{buttonText}</Button>
          <div></div>
        </div>
      </div>
    </>
  );
};

const List = ({ options, active }: { options: string[]; active?: boolean }) => {
  return options.map((option) => (
    <div key={option} className={cn("flex items-center gap-1")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="white"
        className={cn("h-4 w-4 flex-shrink-0")}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <p className={cn("dark:text-dark-6 text-mini text-gray-400")}>{option}</p>
    </div>
  ));
};
