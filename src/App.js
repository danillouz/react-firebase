import React, { Component } from 'react';
import firebase, { auth, googleAuthProvider, database } from './firebase.app';

const UserCard = ({ session, signOut }) => {
	const {
		displayName,
		photoURL,
	} = session;

	return (
		<div>
			<img src={photoURL} alt={displayName} />

			<h3>{displayName}</h3>

			<button onClick={signOut}>
				sign out
			</button>
		</div>
	);
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSignedIn: false,
			session: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(session => {
			console.log('auth state changed -- session: ', session);

			this.setState({
				isSignedIn: !!session,
				session
			});
		});
	}

	signInWithGoogle = () => {
		auth.signInWithRedirect(googleAuthProvider);
	}

	signOut = () => {
		auth.signOut();
	}

	render() {
		const {
			isSignedIn,
			session
		} = this.state;

		return (
			<div>
				<h2>App</h2>

				{
					isSignedIn
						? <UserCard session={session} signOut={this.signOut} />
						: <button onClick={this.signInWithGoogle}>
							sign in with google
						</button>
				}
			</div>
		);
	}
}

export default App;
