class Register extends Component {
    constructor() {
        this.state = {
            username: '',
            email: '',
            password: '',
            submited: false
        }
    }

    render() {
        return (
            <form id="register" className="input-group">
                <input type="text" name="username" className="input-field" placeholder="Username" required />
                <input type="email" name="email" className="input-field" placeholder="Email" required />
                <input type="text" name="password" className="input-field" placeholder="Password" required />
                <input type="checkbox" name="terms" className="check-box" /><span className="check-span">I agree to the terms & conditions</span>
                <button type="submit" className="submit-btn">REGISTER</button>
            </form>
        );
    }
}

export default Register;