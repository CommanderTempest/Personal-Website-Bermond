import Social from "./SocialLink";
import LinkedIn32 from "./images/linkedIn32.png"
import Github32 from "./images/githubIcon33.png"
export default function SocialRow() {
  return (
    <div className="social-row">
      <Social
        icon={LinkedIn32}
        text="LinkedIn"
        alt="LinkedInIcon"
        link="https://www.linkedin.com/in/kaleb-bermond-11349b1b7/"
      />
      <Social
        icon={Github32}
        link="https://github.com/CommanderTempest"
        text="GitHub"
        alt="GithubIcon"
      />
    </div>
  );
}
