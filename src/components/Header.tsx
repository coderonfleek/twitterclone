import React from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonThumbnail,
  IonImg,
} from "@ionic/react";
import "./Header.css";

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonThumbnail>
          <IonImg src="https://d3r49iyjzglexf.cloudfront.net/people/fikayo-adepoju-bbc741912f663373522dfa5531d564729605e548c18a0a0a083ad12f4e510ed9.jpg" />
        </IonThumbnail>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
