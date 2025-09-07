import React from "react";
import AccountsHero from "../components/Accounts/AccountsHero";
import AccountsPlans from "../components/Accounts/AccountsPlans";
import AccountsSpecials from "../components/Accounts/AccountsSpecials";
import AccountsSteps from "../components/Accounts/AccountsSteps";
import AccountsContactCTA from "../components/Accounts/AccountsContactCTA";
import SecurityWithdrawals from "../components/Accounts/SecurityWithdrawals";
import SecuritySection from "../components/Accounts/SecuritySection";

export default function AccountTypesPage() {
  return (
    <>
      <AccountsHero />
      <AccountsPlans />
      <AccountsSpecials />
      <AccountsSteps />
      <SecurityWithdrawals />
      <SecuritySection />     
    
      <AccountsContactCTA />

    </>
  );
}
