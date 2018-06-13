import React from 'react'

const Organizer = (props) => (
    <div style={{ padding: '2rem' }}>
        <h2><a target="_blank" rel="noopener noreferrer" href={props.url}>{props.name}</a></h2>
        <img src={`https://s.gravatar.com/avatar/${props.avatarHash}?s=160`} style={{ paddingBottom: '1rem' }} />
        <p>{props.bio}</p>
    </div>
)

export default class Organizers extends React.Component {
    render() {
        return (<div className="interior-page sponsors-page tilt-left">
            <h1 className="secondary-content-header">Organizers</h1>
            <p>These are the people who help make JSMN events happen.</p>
            <Organizer 
                name="Brandon Johnson" 
                avatarHash="1b3b4a36d37e80d04c3b0a9185172541" 
                url="http://brandon.mn" 
                bio="Brandon has been involved with JSMN since 2015, and is often seen saying words before events. During the day, Brandon is a Research Software Engineer at space150."
            />
            <Organizer name="Anna Baker" avatarHash="" url="#" bio="" />
            <Organizer name="Robert Tomb" avatarHash="" url="#" bio="" />
            <Organizer name="Randall Meeker" avatarHash="" url="#" bio="" />
        </div>)
    }
}