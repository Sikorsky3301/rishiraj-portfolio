import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    ____  _      __    _    ____          _
   / __ \\(_)____/ /_  (_)  / __ \\____ _  (_)
  / /_/ / / ___/ __ \\/ /  / /_/ / __ \`/ / /
 / _, _/ (__  ) / / / /  / _, _/ /_/ / / /
/_/ |_/_/____/_/ /_/_/  /_/ |_|\\__,_/_/ /
                                   /___/
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____  _      __    _
   / __ \\(_)____/ /_  (_)
  / /_/ / / ___/ __ \\/ /
 / _, _/ (__  ) / / / /
/_/ |_/_/____/_/ /_/_/

    ____          _
   / __ \\____ _  (_)
  / /_/ / __ \`/ / /
 / _, _/ /_/ / / /
/_/ |_|\\__,_/_/ /
           /___/

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          AI Engineer | Computer Vision | Generative AI | Full-Stack
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
