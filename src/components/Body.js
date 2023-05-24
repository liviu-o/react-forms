import React, { Component } from "react";
import "../Stylesheets/body.css";
import ENV from "../env.js";
import axios from "axios";

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { palace: "", country: "", email: "", showSnackbar: false, showErrorSnackbar: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePalaceChange = this.handlePalaceChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handlePalaceChange(event) {
    this.setState({ palace: event.target.value });
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    
    let postData = {
      Email: this.state.email,
      Country: this.state.country,
      MAC: window.location.pathname,
      Palace: this.state.palace,
    };

    axios
      .post(ENV.LOGICAPP_URL, postData)
      .then((result) => {
        console.log(result);
      })
      .catch((errors) => {
        this.setState({ showErrorSnackbar: true })
      });

     

        this.setState({ showSnackbar: true }, () => {
          setTimeout(() => {
            this.setState({ showSnackbar: false });
          }, 3000);
        });

        console.log(this.state.email)
    
        this.redirect(this.state.palace);
    
  }

  redirect(palace) {
    let redirectUrl = "";
    switch (palace) {
      case "Hampton Court Palace":
        redirectUrl =
          "https://www.hrp.org.uk/on-site-wifi/hampton-court-palace/";
        break;
      case "Kensington Palace":
        redirectUrl = "https://www.hrp.org.uk/on-site-wifi/kensington-palace/";
        break;
      case "Banqueting House":
        redirectUrl = "https://www.hrp.org.uk/banqueting-house";
        break;
      case "Kew Palace":
        redirectUrl = "https://www.hrp.org.uk/kew-palace";
        break;
      default:
        redirectUrl =
          "https://www.hrp.org.uk/on-site-wifi/hampton-court-palace/";
    }

    setTimeout(() => {
      window.location = redirectUrl;
    }, 4000);
  }

  render() {
    let isSnackbarActive = this.state.showSnackbar;

    

    let email = this.state.email

    let snackbarMessage = this.state.showErrorSnackbar ? 'Could not Connect' : 'Connected to Wifi'
    
    let snackbarText = this.state.showErrorSnackbar ? '' : 'Thank you, the email address ' + {email} + ' has been added to our newsletter mailing list. You will be redirected shortly.'

    
    const snackbar = (
      <div className={isSnackbarActive ? 'snackbar show': "snackbar"}>
        <h1>{snackbarMessage}</h1>
        <p>
          {snackbarText}
        </p>
      </div>
    );

    return (
      <div class="container-fluid page-body">
        <div class="row">
          {snackbar}
          <div class="col-12-xs body-text">
            <h1 class="page-title">
              You are now connected to the Wi-Fi for Historic Royal Palaces.
            </h1>
            <div class="welcome-text"><p>
              Thank you for Playing Your Part by visiting this Palace today. We
              hope you enjoy your visit.
            </p>
            <p>
              By signing up to receive emails from Historic Royal Palaces you
              will discover the stories, past and present, behind these historic
              buildings, and receive regular updates on exciting events as well
              as our beautiful range of shop products.
            </p></div>
            <form onSubmit={this.handleSubmit}>
              <div class="row">
                <div class="col-sm-12 col-md-8">
                  <div class="form-group">
                    <label class="input-label">Email address: *</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email address"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="input-label">
                      The palace I am visiting: *
                    </label>
                    <select
                      class="form-control"
                      id="country"
                      value={this.state.palace}
                      onChange={this.handlePalaceChange}
                    >
                      <option value="UK">Hampton Court Palace</option>
                      <option value="Australia">Tower of London</option>
                      <option value="Brazil">Banqueting House</option>
                      <option value="Canada">Kensington Palace</option>
                      <option value="China">Kew Palace</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="input-label">
                      The country I am visiting from:
                    </label>
                    <select
                      class="form-control"
                      id="country"
                      value={this.state.country}
                      onChange={this.handleCountryChange}
                    >
                      <option value="UK">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Russia">Russia</option>
                      <option value="Spain">Spain</option>
                      <option value="US">United States</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <button class="btn body-button submit-button" type="submit">
                      Sounds great, Sign me up
                    </button>
                    <button class="btn body-button skip-button" type="reset">
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div class="form_footer mt-4">
              <p>
                If you want to update what types of information you want to
                receive from us or opt out of these communications, you can do
                so at any time. We promise never to sell your data to any third
                parties. For more details, take a look at our{" "}
                <a
                  class="hrp-anchor"
                  href="https://www.hrp.org.uk/about-us/who-we-are/our-promise"
                >
                  customer promise
                </a>{" "}
                and{" "}
                <a
                  class="hrp-anchor"
                  href="https://www.hrp.org.uk/privacy-policy/"
                >
                  privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyComponent;
