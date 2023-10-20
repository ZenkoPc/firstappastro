import { useState } from 'preact/hooks'

export default function Greeting({ messages }) {
    
    const randomMessage = () => messages[(Math.floor(Math.random()*messages.length))]
    const [Greeting, setGreeting] = useState(messages[0])

    return (
        <div>
            <h3>
                {Greeting}
            </h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    )
}