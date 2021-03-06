import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>About</h2>
                <p>
                    Thanks for checking out my app! This app was built just for
                    fun and with great appreciation for Star Wars Imperial
                    Assault.{' '}
                </p>

                <p>
                    Built with React, Redux, Webpack, SASS, Bootstrap,
                    FontAwesome among other things.
                </p>

                <p>
                    Check out the{' '}
                    <a
                        href="https://github.com/tkiethanom/imperial-assault-dice"
                        target="_blank"
                    >
                        Github project <i className="fa fa-github" />
                    </a>
                </p>
            </div>
        );
    }
}
