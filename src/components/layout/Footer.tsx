import { portfolioData } from "~/constants/portfolio.data";
import { SocialIcons } from "~/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="background py-12 border-t border-slate-800/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-body text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
            reserved.
          </p>
          <p className="text-body text-xs mt-1">
            resource &#10084; in VJ
          </p>
        </div>

        <SocialIcons variant="footer" />
      </div>
    </footer>
  );
}
