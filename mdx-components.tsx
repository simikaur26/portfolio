import type { MDXComponents } from "mdx/types";
import ContextBlock from "@/components/ContextBlock";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import EmphasisLine from "@/components/EmphasisLine";
import CaseImage from "@/components/CaseImage";
import QuoteCluster from "@/components/QuoteCluster";
import Button from "@/components/Button";
import TwoUp from "@/components/TwoUp";
import ThreeUp from "@/components/ThreeUp";
import BeforeAfter from "@/components/BeforeAfter";
import RefinementBlock from "@/components/RefinementBlock";
import OutcomeBanner from "@/components/OutcomeBanner";
import CaseVideo from "@/components/CaseVideo";
import DesignChallenge from "@/components/DesignChallenge";
import GroupedPoints from "@/components/GroupedPoints";
import FeatureScreenshot from "@/components/FeatureScreenshot";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="text-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="text-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="text-h6">{children}</h6>,
    p: ({ children }) => <p className="text-body">{children}</p>,
    ContextBlock,
    Hero,
    SectionHeader,
    EmphasisLine,
    CaseImage,
    QuoteCluster,
    Button,
    TwoUp,
    ThreeUp,
    BeforeAfter,
    RefinementBlock,
    OutcomeBanner,
    CaseVideo,
    DesignChallenge,
    GroupedPoints,
    FeatureScreenshot,
  };
}
