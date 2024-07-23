"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Header } from "@/components/auth/herder";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLaberl: string;
  backButtonLaberl: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function CardWrapper({
  children,
  headerLaberl,
  backButtonLaberl,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLaberl} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLaberl} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
