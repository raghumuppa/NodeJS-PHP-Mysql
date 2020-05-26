import React from 'react';

type Props = {
    history: any;
}

const Homepage = (props: Props) => {

    const redirectToTestTwo = () => {
        props.history.push('/testIfRoutesWorks');
    };

    return (
        <div>
            <h1>The first test of the front-end is successful! :)</h1>
            <button onClick={redirectToTestTwo}>Click here for second test</button>
        </div>
    );
};

export default Homepage;
