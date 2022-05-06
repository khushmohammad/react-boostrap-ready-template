import React from 'react'
import OurStore from '../section/OurStore'
import OurStory from '../section/OurStory'
import OurTeam from '../section/OurTeam'

const componentitem = [OurStore, OurStory, OurTeam];

console.log(OurStore)
export default function About() {
    return (
        <div>
            {componentitem.map((Data, index) => {

                return (
                    <div key={index}>

                        <Data />
                    </div>
                )
            })}

            {/* <OurStore />
        <OurStory />
        <OurTeam /> */}
        </div>
    )
}
