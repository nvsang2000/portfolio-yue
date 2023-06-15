import { LANGUAGE_DESCRIPTION } from "~/constants";
import {
  about,
  about_biography,
  about_biography_at_the_company,
  about_biography_description_1,
  about_biography_description_2,
  about_biography_description_3,
  about_biography_off_code,
  about_title,
  about_work_experience_plan_1,
  about_work_experience_plan_2,
  contract,
  full_name,
  home,
  home_description_1,
  home_description_2,
  home_description_3,
  mern_developer,
  projects,
  resume,
  skill,
  work_experience,
} from "../content";

const vie = {
  [LANGUAGE_DESCRIPTION.resume]: resume.vie,
  [LANGUAGE_DESCRIPTION.home]: home.vie,
  [LANGUAGE_DESCRIPTION.skill]: skill.vie,
  [LANGUAGE_DESCRIPTION.about]: about.vie,
  [LANGUAGE_DESCRIPTION.projects]: projects.vie,
  [LANGUAGE_DESCRIPTION.contract]: contract.vie,
  [LANGUAGE_DESCRIPTION.full_name]: full_name.vie,
  [LANGUAGE_DESCRIPTION.work_experience]: work_experience.vie,
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
  [LANGUAGE_DESCRIPTION.about_work_experience_plan_1]: about_work_experience_plan_1.vie,
  [LANGUAGE_DESCRIPTION.about_work_experience_plan_2]:
    about_work_experience_plan_2.vie,
  [LANGUAGE_DESCRIPTION.about_biography_at_the_company]: about_biography_at_the_company.vie,
  [LANGUAGE_DESCRIPTION.about_biography_off_code]: about_biography_off_code.vie
};

export default vie;
