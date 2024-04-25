import Project from "./project";
import TempestStudio from "./images/TempestStudio.png"
import ZenerithIcon from "./images/ZenerithIcon.png"
import YellowLogo from "./images/yellowlogo.jpg"
import PULogo from "./images/park-university-logo-usa.jpg"
import SpellbladeLogo from "./images/SpellBladeLogo.png"

export default function ProjectColumn() {
  return (
    <div className="project-root">
      <div className="project-column" id="left-projects">
        <h2 className="background-red">Projects</h2>
        <Project
          title="Spellblade"
          type="Personal Project"
          startDate="February 19, 2024"
          endDate="Ongoing"
          desc="An RPG game involving swords, spells, and exploration."
          tags={["GDScript", "Godot"]}
          links={{
            GitHub: "https://github.com/CommanderTempest/Spellblade-Delta",
            "Project Board": "https://linear.app/spellblade/team/SPE/all",
          }}
          icon={SpellbladeLogo}
        />
        <Project
          title="Zenerith"
          type="Australis Entertainment"
          startDate="March, 2022"
          endDate="Ongoing"
          desc="An RPG game on Roblox"
          tags={["TypeScript", "Roblox", "Lua"]}
          links={{
            "Public Test Build":
              "https://www.roblox.com/games/6191725593/Zenerith-Alpha",
          }}
          icon={ZenerithIcon}
        />
        <Project
          title="Robo Rampage"
          type="Class Project"
          startDate="March 17, 2024"
          endDate="March 20, 2024"
          desc="An FPS game where you navigate an enemy base, and take out drones."
          tags={["GDScript", "Godot"]}
          links={{
            GitHub: "https://github.com/CommanderTempest/Robo-Rampage",
          }}
        />
        <Project
          title="Toon Tanks"
          type="Class Project"
          startDate="December 4, 2023"
          endDate="December 11, 2023"
          desc="An isometric tank shooter."
          tags={["C++", "Unreal"]}
          links={{ GitHub: "https://github.com/CommanderTempest/ToonTanks" }}
        />
      </div>
      <div className="project-column" id="right-projects">
        <h2 className="background-red">Experience</h2>
        <Project
          title="Yellow"
          type="IT Intern"
          tags={["Java", "HTML/CSS", "Angular"]}
          startDate="May 22, 2023"
          endDate="July 27, 2023"
          desc="I improved existing systems and fixed bugs while on multiple different development teams. Before the end of the internship, the company went backrupt and I was layed off."
          links={{
            LinkedIn: "https://www.linkedin.com/company/yellowcorporation/",
          }}
          icon={YellowLogo}
        />
        <Project
          title="Park University"
          type="Tutor"
          tags={["Python", "Java", "C++"]}
          startDate="January 2022"
          endDate="Ongoing"
          links={{
            LinkedIn: "https://www.linkedin.com/school/park-university/",
            Website: "https://www.park.edu/",
          }}
          icon={PULogo}
          desc="Tutored students in different CS courses that included but are not limited to: Python, Java, C++, SQL, MIS, Database Design, Data Science."
        />
      </div>
    </div>
  );
}
