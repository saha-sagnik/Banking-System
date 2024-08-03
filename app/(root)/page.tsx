import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalance";

function Home() {
  const loggedIn = { firstName: "Sagnik" };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage you acount and transactions efficiently"
            />
            <TotalBalance
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.0}
            />
          </header>
        </div>
      </div>
    </section>
  );
}

export default Home;
