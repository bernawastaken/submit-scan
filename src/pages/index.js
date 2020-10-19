import React from "react"
import Hero  from "../components/hero/hero"
import Input  from "../components/input/input"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import "./index.css"

class IndexPage extends React.Component {
// TODO make an function that makes <Input> with criteria being cycled through, maybe make line inline css

  render() {
    return (
      <>
        <SEO title="Submit Scan" />
        <div className="flexer">
          <Hero />
          <aside>
            <div id="chartGenerator">
              <div id="inputContainer">
                <Input id="bodiesReported" criterion="Bodies Reported"/>
                <Input id="emergenciesCalled" criterion="Emergencies Called"/>
                <Input id="tasksCompleted" criterion="Tasks Completed" />
                <Input id="allTasksCompleted" criterion="All Tasks Completed" />
                <Input id="sabotagesFixed" criterion="Sabotages Fixed" />
                <Input id="imposterKills" criterion="Impostor Kills"/>
                <Input id="timesMurdered" criterion="Times Murdered" />
                <Input id="timesEjected" criterion="Times Ejected"/>
                <Input id="crewmateStreak" criterion="Crewmate Streak"/>
                <Input id="timesImposter" criterion="Times Impostor"/>
                <Input id="timesCrewmate" criterion="Times Crewmate"/>
                <Input id="gamesStarted" criterion="Games Started"/>
                <Input id="gamesFinished" criterion="Games Finished"/>
                <Input id="imposterVoteWins" criterion="Impostor Vote Wins"/>
                <Input id="imposterKillWins" criterion="Impostor Kill Wins"/>
                <Input id="imposterSabotageWins" criterion="Impostor Sabotage Wins"/>
                <Input id="sabotageWins" criterion="Sabotage Wins"/>
                <Input id="crewmateVoteWins" criterion="Crewmate Vote Wins"/>
                <Input id="crewmateTaskWins" criterion="Crewmate Task Wins"/>
              </div>
              <div id="chartContainer">
                <canvas id="myChart" width="400" height="400"></canvas>
              </div>
            </div>
            
          </aside>
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPage;