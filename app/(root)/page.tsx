import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalance";
import RightSideBar from "@/components/RightSideBar";

function Home() {
  const loggedIn = { firstName: "Sagnik", lastName: "Saha", email:'sagnik12347@gmail.com' };

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
      <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{},{}]}
          />
    </section>
  );
}

export default Home;
