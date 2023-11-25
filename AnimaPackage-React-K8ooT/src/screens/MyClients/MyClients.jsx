import React from "react";
import { ButtonBig } from "../../components/ButtonBig";
import { Foto } from "../../components/Foto";
import { LogoutWrapper } from "../../components/LogoutWrapper";
import { PopupInput } from "../../components/PopupInput";
import { Logo } from "../../icons/Logo";
import { Logout } from "../../icons/Logout";
import { X } from "../../icons/X";
import "./style.css";

export const MyClients = () => {
  return (
    <div className="my-clients">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="dashboard-client">
            <div className="group">
              <div className="group-wrapper">
                <div className="div-wrapper">
                  <div className="div">My clients</div>
                </div>
              </div>
            </div>
            <div className="group-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="background" />
                  <div className="group-3">
                    <div className="overlap-group-2">
                      <div className="background-2" />
                      <img className="vector" alt="Vector" src="/img/vector-4.svg" />
                      <img className="img" alt="Vector" src="/img/vector-3.svg" />
                      <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
                      <div className="border-bot" />
                      <div className="border-bot-2" />
                      <div className="border-bot-3" />
                      <div className="border-bot-4" />
                      <div className="text-wrapper-2">65382</div>
                      <div className="text-wrapper-3">12221</div>
                      <div className="text-wrapper-4">Luciano Palla</div>
                      <div className="text-wrapper-5">Juan Perez</div>
                      <div className="text-wrapper-6">Jose Lopez</div>
                      <div className="text-wrapper-7">Batechinc@gmail.com</div>
                      <div className="text-wrapper-8">juanp@gmail.com</div>
                      <div className="text-wrapper-9">jose_lopez@gmail.com</div>
                      <div className="text-wrapper-10">Jan 12,2021</div>
                      <div className="text-wrapper-11">Jan 07,2021</div>
                      <div className="text-wrapper-12">Jan 12,2021</div>
                      <div className="text-wrapper-13">Pendiente</div>
                      <div className="ellipse" />
                      <div className="text-wrapper-14">Done</div>
                      <div className="ellipse-2" />
                      <div className="text-wrapper-15">Done</div>
                      <div className="ellipse-3" />
                      <div className="placeholder" />
                      <div className="placeholder-2" />
                      <div className="placeholder-3" />
                      <div className="text-wrapper-16">Batech</div>
                      <div className="text-wrapper-17">Paramon</div>
                      <div className="text-wrapper-18">Signi</div>
                      <div className="text-wrapper-19">Service in social media</div>
                      <div className="text-wrapper-20">Logo Editing</div>
                      <div className="text-wrapper-21">Re branding</div>
                    </div>
                    <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
                    <div className="border-bot-5" />
                    <div className="overlap-2">
                      <img className="vector-4" alt="Vector" src="/img/vector.svg" />
                      <div className="text-wrapper-22">Numero de ID</div>
                      <div className="text-wrapper-23">Email</div>
                      <div className="text-wrapper-24">Date add</div>
                      <div className="text-wrapper-25">Status</div>
                      <div className="text-wrapper-26">Enterprise</div>
                    </div>
                    <div className="text-wrapper-27">43234</div>
                    <div className="text-wrapper-28">Ricardo Navarro</div>
                    <div className="text-wrapper-29">Ricardo_nava@gmail.com</div>
                    <div className="text-wrapper-30">Jan 12,2021</div>
                    <div className="text-wrapper-31">Done</div>
                    <div className="ellipse-4" />
                    <div className="placeholder-4" />
                    <div className="text-wrapper-32">Mobile men</div>
                    <div className="text-wrapper-33">Service in social media</div>
                    <img className="fill" alt="Fill" src="/img/path0-fill.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fondo" />
          <div className="popup-input-2" />
          <X className="x-1" color="white" />
          <div className="menu">
            <div className="frame-2">
              <div className="div-2">
                <img className="transaction" alt="Transaction" src="/img/transaction-1.svg" />
                <div className="text-wrapper-34">My Clients</div>
              </div>
              <div className="my-payments">
                <div className="text-wrapper-35">My contracts</div>
                <img className="signing-a-document" alt="Signing a document" src="/img/signing-a-document-1.png" />
              </div>
              <div className="my-payments">
                <div className="text-wrapper-35">My payments</div>
                <img className="initiate-money" alt="Initiate money" src="/img/initiate-money-transfer-1.png" />
              </div>
              <div className="archive">
                <div className="text-wrapper-36">Archive</div>
                <img className="archive-list-of" alt="Archive list of" src="/img/archive-list-of-parts-1.png" />
              </div>
              <div className="cards">
                <div className="text-wrapper-37">Cards</div>
                <img className="magnetic-card" alt="Magnetic card" src="/img/magnetic-card-1.png" />
              </div>
              <div className="setting">
                <div className="text-wrapper-38">Settings</div>
                <img className="settings" alt="Settings" src="/img/settings-1.png" />
              </div>
            </div>
            <Foto className="foto-instance" />
            <LogoutWrapper className="logout-instance" frameIcon={<Logout className="logout-3-instance" />} />
            <Logo className="logo-2" />
          </div>
          <ButtonBig addAccountsClassName="design-component-instance-node" className="button-big-instance" text="" />
          <PopupInput
            className="popup-input-instance"
            frameClassName="popup-input-3"
            text="Full name"
            text1="Put the id that came to the mail"
          />
          <PopupInput
            className="popup-input-4"
            frameClassName="popup-input-3"
            text="Email"
            text1="Put the id that came to the mail"
          />
          <PopupInput
            className="popup-input-5"
            frameClassName="popup-input-3"
            text="Phone number"
            text1="Put the id that came to the mail"
          />
          <PopupInput
            className="popup-input-6"
            frameClassName="popup-input-3"
            text="Service"
            text1="Put the id that came to the mail"
          />
          <PopupInput
            className="popup-input-7"
            frameClassName="popup-input-3"
            text="Callendar"
            text1="Put the id that came to the mail"
          />
          <p className="client-information">
            <span className="span">
              Client Information
              <br />
            </span>
            <span className="text-wrapper-39">Personal details and application.</span>
          </p>
          <div className="text-wrapper-40">Client</div>
          <div className="text-wrapper-41">Contract</div>
          <div className="text-wrapper-42">Review</div>
          <div className="text-wrapper-43">Next</div>
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};
