import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonThumbnail,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Profile",
    url: "/page/Profile",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Lists",
    url: "/page/Lists",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Topics",
    url: "/page/Topics",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Bookmarks",
    url: "/page/Bookmarks",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Moments",
    url: "/page/Moments",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonThumbnail slot="start">
            <IonImg src="https://d3r49iyjzglexf.cloudfront.net/people/fikayo-adepoju-bbc741912f663373522dfa5531d564729605e548c18a0a0a083ad12f4e510ed9.jpg" />
          </IonThumbnail>
          <IonListHeader>Fikayo Adepoju</IonListHeader>
          <IonNote>@coderonfleek</IonNote>
          <IonGrid>
            <IonRow>
              <IonCol>247 Following</IonCol>
              <IonCol>383 Followers</IonCol>
            </IonRow>
          </IonGrid>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
