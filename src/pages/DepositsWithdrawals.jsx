import React from "react";
import DepositsHero from "../components/Payments/DepositsHero";
import FundingMethods from "../components/Payments/FundingMethods";
import SecuritySection from "../components/Accounts/SecuritySection";
import WithdrawalsSection from "../components/Payments/WithdrawalsSection";
import AccountsSteps from "../components/Accounts/AccountsSteps";
import WithdrawalsRules from "../components/Payments/WithdrawalsRules";
import DepositsFAQ from "../components/Payments/DepositsFAQ";

export default function DepositsWithdrawalsPage() {
  return (
    <>
      <DepositsHero />
      <FundingMethods />
      <SecuritySection />
      <WithdrawalsSection />
      <AccountsSteps />
      <WithdrawalsRules />
      <DepositsFAQ />
    </>
  );
}
