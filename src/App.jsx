import { Fragment } from "react";
import Link from "./Link";
import TodayDateNow from "./TodayDateNow";
import ButtonList from "./ButtonList";
import PostDetail from "./PostDetail";
import ShoppingCart from "./ShoppingCart";
import Select from "./Select";
import Menu from "./Menu";
import "./App.css";
import Sample from "./Sample";
import Gallery from "./Gallery";
import TimerCounter from "./TimerCounter";
import Timeout from "./Timeout";
import RemoteDropDown from "./RemoteDropDown";
import BlogPost from "./BlogPost";
import EmailInput from "./EmailInput";
import CounDown from "./CounDown";
import DieRoller from "./DieRoller";
import DoubleClickCounter from "./DoubleClickCounter";
import AutoFocusInput from "./AutoFocusInput";
import TreeView from "./tree-view";
import MENUS from "./tree-view/data";
import QRCodeGenerator from "./qr-code-generator";
import MouseMove1 from "./MouseMove1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Contact from "./Contact";
import WindowSize from "./WindowSize";

function App() {
  const post = {
    id: 1,
    title: "Travelling",
    content: "read more about travel!",
  };

  const items = ["Apple", "Orange", "Pinaple"];

  return (
    <Fragment>
      {/* <Contact></Contact> */}
      {/* <Counter3></Counter3> */}
      <WindowSize></WindowSize>
      <Counter2></Counter2>
      {/* <MouseMove1></MouseMove1> */}
      {/* <DoubleClickCounter></DoubleClickCounter>
      <AutoFocusInput></AutoFocusInput> */}
      {/* <QRCodeGenerator></QRCodeGenerator> */}
      {/* <TreeView menus={MENUS}></TreeView> */}
      {/* <CounDown></CounDown>
      <EmailInput></EmailInput>
      <BlogPost
        title="Blog Application"
        body={<p>this is our blog application</p>}
      />
      {/* <TimerCounter></TimerCounter> */}
      {/* <RemoteDropDown></RemoteDropDown> */}
      {/* <TimerCounter></TimerCounter> */}
      {/* <Timeout></Timeout> */}

      {/* <main>
        <Menu />
        <Sample></Sample>
        <br />
        <Select items={items}></Select>
        <TodayDateNow></TodayDateNow>
        <ButtonList />
        <PostDetail post={post} ></PostDetail>
        <ShoppingCart items={items}></ShoppingCart>
        <Link url='//react.dev' framework='React' />
        <Link url='//angular.io' framework='Angular' />
        <Link url='//vuejs.org' framework='VueJs' />
        <br>
        </br>
        <h1>Animals</h1>
        <Gallery></Gallery>
      </main> */}
    </Fragment>
  );
}
export default App;
