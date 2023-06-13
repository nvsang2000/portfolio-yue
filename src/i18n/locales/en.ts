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
  resume,
} from "../content";

const en = {
  [LANGUAGE_DESCRIPTION.resume]: resume.en,
  [LANGUAGE_DESCRIPTION.home]: home.en,
  [LANGUAGE_DESCRIPTION.about]: about.en,
  [LANGUAGE_DESCRIPTION.projects]: projects.en,
  [LANGUAGE_DESCRIPTION.contract]: contract.en,
  [LANGUAGE_DESCRIPTION.full_name]: full_name.en,
  [LANGUAGE_DESCRIPTION.mern_developer]: mern_developer.en,
  [LANGUAGE_DESCRIPTION.home_description_1]: home_description_1.en,
  [LANGUAGE_DESCRIPTION.home_description_2]: home_description_2.en,
  [LANGUAGE_DESCRIPTION.home_description_3]: home_description_3.en,
  [LANGUAGE_DESCRIPTION.about_title]: about_title.en,
  [LANGUAGE_DESCRIPTION.about_biography]: about_biography.en,
  [LANGUAGE_DESCRIPTION.about_biography_description_1]:
    about_biography_description_1.en,
  [LANGUAGE_DESCRIPTION.about_biography_description_2]: about_biography_description_2.en,
  [LANGUAGE_DESCRIPTION.about_biography_description_3]: about_biography_description_3.en
};

export default en;
