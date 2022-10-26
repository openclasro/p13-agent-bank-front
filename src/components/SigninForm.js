const SigninForm = () => {
    return (
        <> <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSignInClick()
            }}
        >
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="email"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
                Sign In
            </button>
        </form></>);

}

export default SigninForm;