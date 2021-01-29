import React from "react";
import {
  Main,
  Package,
  PackageLink,
  PackageName,
  Badge,
  PackageSubtitle,
  PackageDescription,
  ClearFix,
  Background,
} from "./PackageElements";

const PagePackage = () => {
  return (
    <Main>
      <Background />
      <Package className="plus">
        <PackageLink to="/">
          <PackageName>Our Plus Plan</PackageName>
          <Badge>RECOMMENDED</Badge>
          <PackageSubtitle>
            The most popular choice of our customers
          </PackageSubtitle>
          <PackageDescription>
            Benefit from increased storage and faster support to ensure that
            your mission-critical data and applications are always available!
          </PackageDescription>
        </PackageLink>
      </Package>
      <Package className="free">
        <PackageLink to="/">
          <PackageName>Our Free Plan</PackageName>

          <PackageSubtitle>
            An extremely solid start into our hosting world.
          </PackageSubtitle>
          <PackageDescription>
            Get started immediately at zero cost!
          </PackageDescription>
        </PackageLink>
      </Package>
      <ClearFix />
      <Package className="premium">
        <PackageLink to="/">
          <PackageName>Our Premium Plan</PackageName>
          <PackageSubtitle>
            All your enterprise needs. Instant support, guaranteed uptime.
          </PackageSubtitle>
          <PackageDescription>
            The best solution for small to large enterprises. Because hosting
            shouldn't be in the way!
          </PackageDescription>
        </PackageLink>
      </Package>
    </Main>
  );
};

export default PagePackage;
