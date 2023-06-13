import { LANGUAGE_DESCRIPTION } from "~/constants";
import {
  about,
  about_biography,
  about_biography_description_1,
  about_biography_description_2,
  about_biography_description_3,
  about_title,
  contract,
  full_name,
  home,
  home_description_1,
  home_description_2,
  home_description_3,
  mern_developer,
  projects,
} from "../content";

const vie = {
  [LANGUAGE_DESCRIPTION.home]: home.vie,
  [LANGUAGE_DESCRIPTION.about]: about.vie,
  [LANGUAGE_DESCRIPTION.projects]: projects.vie,
  [LANGUAGE_DESCRIPTION.contract]: contract.vie,
  [LANGUAGE_DESCRIPTION.full_name]: full_name.vie,
  [LANGUAGE_DESCRIPTION.mern_developer]: mern_developer.vie,
  [LANGUAGE_DESCRIPTION.home_description_1]: home_description_1.vie,
  [LANGUAGE_DESCRIPTION.home_description_2]: home_description_2.vie,
  [LANGUAGE_DESCRIPTION.home_description_3]: home_description_3.vie,
  [LANGUAGE_DESCRIPTION.about_title]: about_title.vie,
  [LANGUAGE_DESCRIPTION.about_biography]: about_biography.vie,
  [LANGUAGE_DESCRIPTION.about_biography_description_1]:
    about_biography_description_1.vie,
  [LANGUAGE_DESCRIPTION.about_biography_description_2]:
    about_biography_description_2.vie,
  [LANGUAGE_DESCRIPTION.about_biography_description_3]:
    about_biography_description_3.vie,
};

export default vie;
