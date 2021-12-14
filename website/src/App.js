import './App.css';
import logo from './agariomods.png'
import markiplierslither from './markiplierslither.jpg'
import clips from './mp4/clips.mp4'

function App() {
  return (
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="./">
              <h1 className="title">
                agariomods
              </h1>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        <br/>
        <section className="hero">
          <div className="hero-body image is-16by9">
            <iframe 
              src={`https://cell.iomods.com/embed.html`}
              frameBorder="0"
              title="Cell.iomods.com"
              className="has-ratio" 
              width="100%"
              height="100%"
            />
          </div>
        </section>
        <br/>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="has-text-centered">
              <img className="" src={logo} />
            </div>
            <p className="title">
              Once upon a time
            </p>
            <p className="subtitle">
              There was a cool little project that was loved by millions
            </p>
          </div>
        </section>
        <br/>
        <section>  
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="featureslist">
                    Complies to r/agario no cheating rules<br />
                    Use custom skins that are seen by other script users<br />
                    Show mass on player is selected on start up<br />
                    Touchpad fix to prevent accidental freezing<br />
                    Includes popup confirming intent to leave agario<br />
                    Mass-graph to show your performance<br />
                    End-of-game statistics<br />
                    Checkbox settings are now saved<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Press ALT+1 for FPS counter<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Press Z for stats<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Press T for Time benchmark<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Firefox fullscreen mode with Ctrl-f<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Sound effects<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Background music<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Acid Mode<br />
                    <font style={{color:"red"}}>NEW</font>&nbsp;Volume settings, graph toggle, etc.<br />
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box" >
                <video id="sigh" preload="auto" autoPlay="autoplay" loop="loop">
                  <source src={clips} type="video/mp4"/>
                </video>
                <p>
                  Enjoyed and loved by tens of millions of people.
                </p>
              </article>
            </div>
          </div>
        </section>

        <br/>

        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">
              We even made a nice demo video
            </p>
            <p className="subtitle">
              Which is embedded below for your viewing pleasure
            </p>
          </div>
        </section>

        <br/>

        <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <iframe
                    src={`https://www.youtube.com/embed/KG5_5iwnpcU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    height="auto"
                    width="100%"
                    className="has-ratio" 
                  />
                </figure>
              </article>
            </div>
          </div>
        
          <section>  
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h1 className="is-size-2 mb-4">
                  Agariomods
                </h1>
                <p className="mb-4 has-text-weight-bold">More skins</p>
                <p className="mb-4">Iomods has a large directory of skins that can be used by setting your name to the skin name. This list can be found at skins.iomods.com</p>
                <p className="mb-4 has-text-weight-bold">Connect skins</p>
                <p className="mb-4">Connect is a service where you create an account, upload a skin, which you can then use in-game by setting your name to *Username. The * is needed at the start.</p>
                <p className="mb-4 has-text-weight-bold">Client skin</p>
                <p className="mb-4">This feature allows you to enter a url of an image to use as your skin. Note that this skin will only be seen by you, so it's mostly only useful for recording.</p>
                <p className="mb-4 has-text-weight-bold">Themes</p>
                <p className="mb-4">Themes are mainly a selection of backgrounds, and they're are very few of them at the moment. Themes can also have experimental animated skins for viruses and/or food.</p>
                <p className="mb-4 has-text-weight-bold">Custom background</p>
                <p className="mb-4">This is the last option in the Themes setting. This will let you enter a url of an image to be used as the game's background.</p>
                <p className="mb-4 has-text-weight-bold">Sound effects</p>
                <p className="mb-4">Sound effects play when you eat things, there's a sound effect for eating pellets, cells, viruses, as well as spawning and dying.</p>
                <p className="mb-4 has-text-weight-bold">Background music</p>
                <p className="mb-4">Background music plays in the background when you load up agar.io. There's a variety of tracks in the shuffled playlist. The tracks are chiptune from creators at <a href="http://www.battleofthebits.org" className="botb">battleofthebits.org</a>, all royalty free. No copyright issues with recording with music playing.</p>
                <p className="mb-4 has-text-weight-bold">Team mass</p>
                <p className="mb-4">When you have the "Show Mass" setting enabled, while playing in the teams gamemode, you will be able to see the mass of cells on your team.</p>
                <p className="mb-4 has-text-weight-bold">Advanced settings</p>
                <p className="mb-4">You can access advanced settings by clicking the wrench icon in the top-right of the right panel.</p>
                <p className="mb-4 has-text-weight-bold">Debug info</p>
                <p className="mb-4">Enables through advanced settings. Shows native debug stats, which is normally accessed through http://agar.io/?debug this shows a graph of your FPS and network connection.</p>
                <p className="mb-4 has-text-weight-bold">FPS counter</p>
                <p className="mb-4">Simple little fps counter in the top-left corner of the screen, if you dont need the entire debug menu.</p>
                <p className="mb-4 has-text-weight-bold">Disable lag popup</p>
                <p className="mb-4">Agario may make a subtle popup at the bottom of the screen if you are experiencing latency issues. As per request of a recorder, I made an advanced setting to remove it.</p>
                <p className="mb-4 has-text-weight-bold">Leave page confirmation</p>
                <p className="mb-4">While you are in-game, if you try to navigate away from the page, the mod will ask ror confirmation.</p>
              </article>
            </div>



            <div className="tile is-vertical is-parent">
              <div className="tile is-child box">
                <h1 className="is-size-2 mb-4">
                  Slitheriomods
                </h1>
                <p className="mb-4 has-text-weight-bold">Skins</p>
                <p className="mb-4">This allows you to use Agariomods and Connect skins in slither. This replaces your snake's head with the selected skin, and removes the eyes for better skin visibility, which can be seen by others.</p>
                <p className="mb-4 has-text-weight-bold">Backgrounds</p>
                <p className="mb-4">This replaces the background with a random background of the selected theme.</p>
                <p className="mb-4 has-text-weight-bold">Zoom</p>
                <p className="mb-4">You can zoom in and out with the scroll wheel to get a better view of your surroundings. This feature is arguably "cheaty", but for now, it doesn't seem to be hurting anyone's gameplay experience. If it becomes a problem, It'll be removed.</p>
                <p className="mb-4 has-text-weight-bold">Party system</p>
                <p className="mb-4">This is recreates the functionality of agario parties. You generate a party token, which can be used to join the server you are playing on.</p>
                <p className="mb-4 has-text-weight-bold">Leave page confirmation</p>
                <p className="mb-4">While you are in-game, if you try to navigate away from the page, the mod will ask ror confirmation.</p>
                <p className="mb-4 has-text-weight-bold">Custom background</p>
                <p className="mb-4">This is the last option in the Themes setting. This will let you enter a url of an image to be used as the game's background.</p>
                <p className="mb-4 has-text-weight-bold">Sound effects</p>
                <p className="mb-4">Sound effects play when you eat things, there's a sound effect for eating pellets, cells, viruses, as well as spawning and dying.</p>
                <p className="mb-4 has-text-weight-bold">Background music</p>
                <p className="mb-4">Background music plays in the background when you load up slither.io. There's a variety of tracks in the shuffled playlist. The tracks are chiptune from creators at <a href="http://www.battleofthebits.org" className="botb">battleofthebits.org</a>, all royalty free. No copyright issues with recording with music playing.</p>
              </div>
              <div className="tile is-child box">
                <div className="has-text-centered">
                  <img className="" src={markiplierslither} />
                </div>
                <p>
                    Ooh, yes, almost forgot... Slitheriomods was a thing too!
                </p>
              </div>
              <div className="tile is-child box">
                <figure className="image is-16by9">
                    <iframe
                      src={`https://archive.org/embed/BotB19123EntryForBOTBsOHBContestSongNameIsBlidiaSman&playlist=1&autoplay=1`}
                      frameBorder="0"
                      title="Embedded game music playlist"
                      height="auto"
                      width="100%"
                      className="has-ratio"
                    />
                  </figure>
                  <p>
                    ... and here is the music we made, feel free to click on the unmute icon. The filenames are a bit weird, but the music is great, thankfully.
                  </p>
              </div>
            </div>


          </div>
        </section>



      </div>
  );
}

export default App;
