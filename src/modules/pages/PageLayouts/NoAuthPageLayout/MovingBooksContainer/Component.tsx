import React, { useState, useEffect, useRef } from "react";
import BIRDS from '../../../../../Books/src/vanta.birds';
import { PageLayoutProps } from "../../types";
import { Layout }  from 'antd';
import './movingbookscontainer.css';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const { Content } = Layout;

const Books = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy()
    // }
  }, [vantaEffect])
  return <div ref={myRef} />
};

function MovingBooksContainer(props : PageLayoutProps): React.ReactElement {

  const { children } = props;

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy()
    // }
  }, [vantaEffect])

  return(
    <div className='moving-books-container' ref={myRef}>
      {children}
    </div>
  );
}

export default MovingBooksContainer;