import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import helmet from "helmet";

import {
  Navbar,
  Footer,
  Home,
  About,
  BoardGovernors,
  WorkingGroups,
  MentorsAndAdvisors,
  SecretariatTeam,
  GeneralBody,
  AnnualReport,
  CareerAtIsgf,
  CareerInternship,
  SmartGridHandbook,
  WhitePapersAndTechnicalReports,
  AllWhitePaper,
  DomainOfExpertise,
  Standards,
  PowerSectorDirectory,
  Nsgm,
  SmartGridNews,
  EventCalendar,
  Testimonies,
  AdvisoryServices,
  TrainingProgramsWorkshops,
  TraineesTrained,
  Awards,
  TechnicalPapers,
  IndiaCgdForum,
  UamForum,
  WomenEnergy,
  BilateralWorkshops,
  Webinar,
  Competitions,
  Vidoes,
  Photos,
  PressRelease,
  SmartGridBulletin,
  IsgfMediaCoverage,
  BecomeAmember,
  MembersList,
  Contribution,
  IsgfBlogs,
  ContactUs,
  IsgfBlogDetails,
  GridModernization,
  Achievements,
  FunctionalExpertise,
  GuidelinesAndPolicy,
  Disclaimer,
  PrivacyPolicy,
  TermsConditions,
  RefundAndCancellation,
  IndiaSmartUtilityWeek,
  DistributionUtilityMeet,
  TrainingsCapacityBuilding,
  Thankyou,
  OnlineTrainingRegistration,
  TrainingsNewParticipantsRegistration,
  TrainingsParticipantsRegistration,
  TrainingsAfterLoginSgfc,
  TrainingsOnlineTrainingsLiveTraining,
  TrainingsOnlineTrainingsRecordedTraining,
  TrainingsOnsiteTrainings,
  NewParticipantsRegistrationOrderSummary,
  NewParticipantsRegistrationPayOffline,
  NewParticipantsRegistrationProFormaInvoice,
  NewParticipantsRegistrationTrainingOption,
  Payment,
  ProformaInVoice,
  IsgFocusAreas,
  FoundationCourse,
  SessionMaterialForParticipants,
  FoundationDetails


} from "./components/index";
import AdvisoryDetail from "./components/isgf-initiatives/AdvisoryDetail";
import AdvisoryTag from "./components/isgf-initiatives/AdvisoryTag";
import EventsDetail from "./components/isgf-initiatives/EventsDetail";
import EventsTag from "./components/isgf-initiatives/EventsTag";
import NewsDetail from "./components/isgf-initiatives/NewsDetail";
import NewsTag from "./components/isgf-initiatives/NewsTag";
import ReportsDetail from "./components/isgf-initiatives/ReportsDetail";
import ReportsTag from "./components/isgf-initiatives/ReportsTag";
import StandardsDetail from "./components/isgf-initiatives/StandardsDetail";
import StandardsTag from "./components/isgf-initiatives/StandardsTag";
import TrainingsDetail from "./components/isgf-initiatives/TrainingsDetail";
import TrainingsTag from "./components/isgf-initiatives/TrainingsTag";
import WhitepapersDetail from "./components/isgf-initiatives/WhitepapersDetail";
import WhitepapersTag from "./components/isgf-initiatives/WhitepapersTag";
import Search from "./components/isgf-initiatives/Search";
import TestingPdf from "./components/isgf-initiatives/TestingPdf";
const App = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/boardgovernors" element={<BoardGovernors/>} />
          <Route exact path="/working-groups" element={<WorkingGroups/>} />
          <Route exact path="/mentors-and-advisors" element={<MentorsAndAdvisors/>} />
          <Route exact path="/secretariat-team" element={<SecretariatTeam/>} />
          <Route exact path="/general-body" element={<GeneralBody/>} />
          {/* <Route exact path="/annual-report" element={<AnnualReport/>} /> */}
          <Route exact path="/annual-report/:id" element={<AnnualReport/>} />
          <Route exact path="/career-at-isgf" element={<CareerAtIsgf/>} />
          <Route exact path="/career-internship-at-isgf" element={<CareerInternship/>} />
          <Route exact path="/smart-grid-handbook" element={<SmartGridHandbook/>} />
          <Route exact path="/white-papers-technical-reports" element={<WhitePapersAndTechnicalReports/>} />
          <Route exact path="/white-papers-technical-reports/:id" element={<AllWhitePaper/>} />
          <Route exact path="/domain-of-expertise" element={<DomainOfExpertise/>} />
          <Route exact path="/standards" element={<Standards/>} />
          <Route exact path="/power-sector-directory" element={<PowerSectorDirectory/>} />
          <Route exact path="/nsgm" element={<Nsgm/>} />
          <Route exact path="/smart-grid-news" element={<SmartGridNews/>} />
          <Route exact path="/news/:id" element={<GridModernization/>} />

          {/* Tags page Start */}

          <Route exact path="/news-tag/:id" element={<NewsTag/>} />
          <Route exact path="/news-detail/:id" element={<NewsDetail/>} />

          <Route exact path="/advisory-tag/:id" element={<AdvisoryTag/>} />
          <Route exact path="/advisory-detail/:id" element={<AdvisoryDetail/>} />
          <Route exact path="/trainings-tag/:id" element={<TrainingsTag/>} />
          <Route exact path="/trainings-detail/:id" element={<TrainingsDetail/>} />
          <Route exact path="/reports-tag/:id" element={<ReportsTag/>} />
          <Route exact path="/reports-detail/:id" element={<ReportsDetail/>} />
          <Route exact path="/whitepapers-tag/:id" element={<WhitepapersTag/>} />
          <Route exact path="/whitepapers-detail/:id" element={<WhitepapersDetail/>} />
          <Route exact path="/events-tag/:id" element={<EventsTag/>} />
          <Route exact path="/events-detail/:id" element={<EventsDetail/>} />
          <Route exact path="/standards-tag/:id" element={<StandardsTag/>} />
          <Route exact path="/standards-detail/:id" element={<StandardsDetail/>} />

          {/* Tags page end */}

          <Route exact path="/event-calendar" element={<EventCalendar/>} />
          <Route exact path="/testimonies" element={<Testimonies/>} />
          <Route exact path="/advisory-services" element={<AdvisoryServices/>} />
          <Route exact path="/training-programs-workshops" element={<TrainingProgramsWorkshops/>} />
          <Route exact path="/trainees-trained" element={<TraineesTrained/>} />
          <Route exact path="/awards" element={<Awards/>} />
          <Route exact path="/technical-papers" element={<TechnicalPapers/>} />
          <Route exact path="/india-cgd-forum" element={<IndiaCgdForum/>} />
          <Route exact path="/uam-forum" element={<UamForum/>} />
          <Route exact path="/bilateral-workshops" element={<BilateralWorkshops/>} />
          <Route exact path="/webinar" element={<Webinar/>} />
          <Route exact path="/competitions" element={<Competitions/>} />
          <Route exact path="/vidoes" element={<Vidoes/>} />
          <Route exact path="/photos" element={<Photos/>} />
          <Route exact path="/press-release" element={<PressRelease/>} />
          <Route exact path="/smart-grid-bulletin" element={<SmartGridBulletin/>} />
          <Route exact path="/media-coverage" element={<IsgfMediaCoverage/>} />
          <Route exact path="/become-a-member" element={<BecomeAmember/>} />
          <Route exact path="/members-list" element={<MembersList/>} />
          <Route exact path="/contribution" element={<Contribution/>} />
          <Route exact path="/isgf-blogs" element={<IsgfBlogs/>} />
          <Route exact path="/isgf-blogs/:id" element={<IsgfBlogDetails/>} />
          <Route exact path="/contact-us" element={<ContactUs/>} />
          {/* <Route exact path="/grid-modernization" element={<GridModernization/>} /> */}
          <Route exact path="/achievements" element={<Achievements/>} />
          <Route exact path="/functional-expertise" element={<FunctionalExpertise/>} />
          <Route exact path="/guidelines-and-policy" element={<GuidelinesAndPolicy/>} />
          <Route exact path="/disclaimer" element={<Disclaimer/>} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route exact path="/terms-conditions" element={<TermsConditions/>} />
          <Route exact path="/refund-and-cancellation" element={<RefundAndCancellation/>} />
          <Route exact path="/india-smart-utility-Week" element={<IndiaSmartUtilityWeek/>} />
          <Route exact path="/distribution-utility-meet" element={<DistributionUtilityMeet/>} />
          <Route exact path="/women-energy" element={<WomenEnergy/>} />
          <Route exact path="/thankyou" element={<Thankyou/>} />

          <Route exact path="/trainings-capacity-building" element={<TrainingsCapacityBuilding/>} />
          <Route exact path="/online-training-registration" element={<OnlineTrainingRegistration/>} />
          <Route exact path="/recorded-training-program" element={<TrainingsOnlineTrainingsRecordedTraining/>} />
          <Route exact path="/online-trainings-program" element={<TrainingsOnlineTrainingsLiveTraining/>} />
          <Route exact path="/onsite-trainings-program" element={<TrainingsOnsiteTrainings/>} />
          <Route exact path="/registration" element={<TrainingsParticipantsRegistration/>} />
          <Route exact path="/participants-registration" element={<TrainingsNewParticipantsRegistration/>} />
          <Route exact path="/training-option" element={<NewParticipantsRegistrationTrainingOption/>} />
          <Route exact path="/order-summary" element={<NewParticipantsRegistrationOrderSummary/>} />
          <Route exact path="/trainings-after-login-sgfc" element={<TrainingsAfterLoginSgfc/>} />
          <Route exact path="/pay-offline" element={<NewParticipantsRegistrationPayOffline/>} />
          <Route exact path="/pay-leter" element={<NewParticipantsRegistrationPayOffline/>} />
          <Route exact path="/proformaInVoice" element={<ProformaInVoice/>} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/pro-forma-invoice" element={<NewParticipantsRegistrationProFormaInvoice/>} />
          <Route exact path="/isgf-focus-areas" element={<IsgFocusAreas/>} />
          <Route exact path="/search/:id" element={<Search/>} />

          <Route exact path="/course/:id" element={<FoundationCourse/>} />
          <Route exact path="/course" element={<SessionMaterialForParticipants/>} />
          <Route exact path="/course-1" element={<FoundationDetails/>} />
          <Route exact path="/testing-pdf" element={<TestingPdf/>} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
