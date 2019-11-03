import React, {Fragment} from 'react';
import {Tween, Timeline} from 'react-gsap'


/**
 * Insert text at cursor position.
 *
 * @param {string} width e.g. "10px"
 * @param {string} height likewise, e.g. "1em"
 * @param {string} header Header of the tile
 * @public
 */
const Tile = ({width, height, header}) => {

  return (
    <div>
      <Timeline
        wrapper={
          <div style={{
            backgroundColor:"#1b1b1e",
            width:width,
            height:height,
            position:'relative',
            overflow:'hidden',
            }}/>
        }
        target={
          <Fragment>
            <div style={{
              position:'relative',
              width:'auto',
              height:'auto',
              backgroundColor:'#1b1b1e',
              color:'white',
              padding:'0 0 0 30px',
              margin:'20px 0 20px 20px'
            }}>
              {header}
            </div>
          </Fragment>
        }>
        <Tween 
          from={{ x: '200px' }} 
          to={{ x: '0px' }} 
          duration={0.7}
        >
        </Tween>
        <Timeline
          wrapper={
            <div style={{
              backgroundColor: "white",
              width: '300px',
              height: 'auto',
              position: 'relative',
              overflow: 'hidden',
              margin:'auto',
            }} />
          }
          target={
            <Fragment>
              <div style={{textAlign:"left", padding:'10%', fontSize:'20px'}}>
                Live
              </div>
                  <div style={{ textAlign: "center", padding: '10%', fontSize: '20px'}}>
                Laugh
              </div>
                  <div style={{ textAlign: "right", padding: '10%', fontSize: '20px'}}>
                Love
             </div>
            </Fragment>
          }
          // Repeats 10 times
          repeat={10}
        >
        
          <Tween
          // staggerFrom applies to each element in it's time (delay specified by'stagger')
          // must use Fragment, which enables as to target one element, which doesn't get loaded to DOM,
          // and such this staggering will target all it's children. If it was div, Tween would be
          // applied to all of them at the same time regardless of stagger.
            staggerFrom={{ opacity: 0 }}
            staggerTo={{ opacity: 1 }}
            stagger={1}
            duration={2}
          />
          <Tween
            staggerFrom={{ opacity: 1 }}
            staggerTo={{ opacity: 0 }}
            stagger={0.5}
            duration={1}
          />
           
          
            
        </Timeline>
      </Timeline>
    </div>
  )
}
  

export default Tile;
